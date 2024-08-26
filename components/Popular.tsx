'use client'

import React from 'react'
import Image from 'next/image'
import { getPopularData } from '../lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSanityData } from '@/app/hooks/useSanityData'
import { Button } from './ui/button'
import { SkeletonCard } from './Skeleton'
import { PopularItem } from '@/app/models/Popular.model'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"
import { useCart } from '@/app/providers/CartContext'

export default function Popular() {
  const { data: popularItems, isLoading, error } = useSanityData<PopularItem[]>(getPopularData)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (error) return <div className="container mx-auto px-4 py-8 text-red-500">Error: {error.message}</div>
  if (!popularItems || popularItems.length === 0) return null

  const handleAddToCart = (item: PopularItem) => {
    addItem({
      id: item.slug,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
    })
    toast({
      title: "Product added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Best seller</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5x">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          popularItems.map((item, index) => (
            <Card key={item.slug} className={index >= 6 ? 'hidden md:block ' : ' duration-300 shadow-lg hover:shadow-2xl'}>
              <CardHeader>
                <CardTitle className='text-lg'>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
              <Link href={`/product/${item.slug}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              </CardContent>
              <CardFooter className="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2">
                <span className='mx-auto sm:mx-0'>{item.price.toLocaleString()} Ft</span>
                <Button onClick={() => handleAddToCart(item)}>
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}