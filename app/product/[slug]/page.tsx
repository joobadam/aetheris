'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useSanityData } from '@/app/hooks/useSanityData'
import { getProductData } from '@/lib/api'
import { Button } from "@/components/ui/button"
import { SkeletonCard } from '@/components/Skeleton'
import { useToast } from "@/components/ui/use-toast"
import { useCart } from '@/app/providers/CartContext'
import { ProductData } from '@/app/models/Product.model'


export default function ProductPage() {
  const { slug } = useParams()
  const getProductDataMemo = useMemo(() => () => getProductData(slug as string), [slug])
  const { data: product, isLoading, error } = useSanityData<ProductData>(getProductDataMemo)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (error) return <div>Error loading product: {error.message}</div>

  if (isLoading) {
    return <SkeletonCard />
  }

  if (!product) return <div>Product not found</div>

  const handleAddToCart = () => {
    if (product.price !== null) {
      addItem({
        id: product.slug,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      })
      toast({
        title: "Product added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    } else {
      toast({
        title: "Unable to add to cart",
        description: "This product doesn't have a price set.",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="relative h-[50vh] md:h-[70vh]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl mb-2 uppercase">{product.brand}</p>
          <p className="text-lg mb-4">{product.type}</p>
          <p className="text-2xl font-semibold mb-4">
            {product.price != null ? `${product.price.toLocaleString()} Ft` : 'Price not available'}
          </p>
          <p className="mb-6 text-sm">{product.description}</p>
          <Button onClick={handleAddToCart} className="w-full md:w-auto" disabled={product.price === null}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}