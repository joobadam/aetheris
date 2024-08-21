'use client'

import React from 'react'
import Image from 'next/image'

import { getPopularData } from '../lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSanityData } from '@/app/hooks/useSanityData'
import { Button } from './ui/button'

interface PopularItem {
  name: string
  imageUrl: string
  price: number
  slug: string
}

export default function Popular() {
  const { data: popularItems, isLoading, error } = useSanityData<PopularItem[]>(getPopularData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!popularItems || popularItems.length === 0) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Best seller</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {popularItems.map((item, index) => (
          <Card key={item.slug} className={index >= 6 ? 'hidden md:block ' : ' duration-300 shadow-lg hover:shadow-2xl'}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span>{item.price.toLocaleString()} Ft</span>
              <Button className="">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}