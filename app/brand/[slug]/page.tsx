'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { useSanityData } from '@/app/hooks/useSanityData'
import { getBrandData, getProductsByBrandSlug } from '@/lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { SkeletonCard } from '@/components/Skeleton'
import { ProductData } from '@/app/models/Product.model'
import { BrandData } from '@/app/models/Brand.model'
import Link from 'next/link'




export default function BrandPage({ params }: { params: { slug: string } }) {
  const getBrandDataMemo = useMemo(() => () => getBrandData(params.slug), [params.slug])
  const getProductsDataMemo = useMemo(() => () => getProductsByBrandSlug(params.slug), [params.slug])

  const { data: brandData, isLoading: isBrandLoading, error: brandError } = useSanityData<BrandData>(getBrandDataMemo)
  const { data: productsData, isLoading: isProductsLoading, error: productsError } = useSanityData<ProductData[]>(getProductsDataMemo)

  if (brandError) return <div>Error loading brand: {brandError.message}</div>
  if (productsError) return <div>Error loading products: {productsError.message}</div>

  if (isBrandLoading || isProductsLoading) {
    return <SkeletonCard />
  }

  if (!brandData) return <div>Brand not found</div>

  return (
    <div className="">
      {/* Brand Banner */}
      <div className="relative h-[70vh] mb-8">
        <Image
          src={brandData.imageUrl}
          alt={brandData.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='container'>
      <h1 className="text-4xl font-bold mb-4">{brandData.name}</h1>
      <p className="mb-8">{brandData.description}</p>
      </div>
      {/* Products Grid */}
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {productsData && productsData.length > 0 ? (
          productsData.map((product) => (
            <Card key={product.slug} className="duration-300 shadow-lg hover:shadow-2xl">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
              <Link href={`/product/${product.slug}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
            </Link>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold"> {product.price != null ? `${product.price.toLocaleString()} Ft` : ''} Ft</span>
                <Button className="ml-2">
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-600">
            No products found for this brand.
          </div>
        )}
      </div>
    </div>
  )
}