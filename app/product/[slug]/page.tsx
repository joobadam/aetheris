'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { useSanityData } from '@/app/hooks/useSanityData'
import { getProductData } from '@/lib/api'
import { Button } from "@/components/ui/button"
import { SkeletonCard } from '@/components/Skeleton'
import { ProductData } from '@/app/models/Product.model'



export default function ProductPage({ params }: { params: { slug: string } }) {
  const getProductDataMemo = useMemo(() => () => getProductData(params.slug), [params.slug])

  const { data: productData, isLoading, error } = useSanityData<ProductData>(getProductDataMemo)

  if (error) return <div>Error loading product: {error.message}</div>

  if (isLoading) {
    return <SkeletonCard />
  }

  if (!productData) return <div>Product not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="relative h-[50vh] md:h-[70vh]">
          <Image
            src={productData.imageUrl}
            alt={productData.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
          <p className="text-xl mb-2 uppercase">{productData.brand}</p>
          <p className="text-2xl font-semibold mb-4">{productData.price != null ? `${productData.price.toLocaleString()} Ft` : ''} Ft</p>
          <p className="mb-6 text-sm">{productData.description}</p>
          <Button className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}