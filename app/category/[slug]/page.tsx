'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { useSanityData } from '@/app/hooks/useSanityData'
import { getCategoryData, getProductsByCategorySlug } from '@/lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { SkeletonCard } from '@/components/Skeleton'
import { CategoryData } from '@/app/models/Category.model'
import { ProductData } from '@/app/models/Product.model'
import Link from 'next/link'




export default function CategoryPage({ params }: { params: { slug: string } }) {
  const getCategoryDataMemo = useMemo(() => () => getCategoryData(params.slug), [params.slug])
  const getProductsDataMemo = useMemo(() => () => getProductsByCategorySlug(params.slug), [params.slug])

  const { data: categoryData, isLoading: isCategoryLoading, error: categoryError } = useSanityData<CategoryData>(getCategoryDataMemo)
  const { data: productsData, isLoading: isProductsLoading, error: productsError } = useSanityData<ProductData[]>(getProductsDataMemo)

  if (categoryError) return <div>Error loading category: {categoryError.message}</div>
  if (productsError) return <div>Error loading products: {productsError.message}</div>

  if (isCategoryLoading || isProductsLoading) {
    return <SkeletonCard />
  }

  if (!categoryData) return <div>Category not found</div>

  return (
    <div className="">
      {/* Category Banner */}
      <div className="relative h-[70vh] mb-8">
        <Image
          src={categoryData.imageUrl}
          alt={categoryData.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='container'>
        <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
        <p className="mb-8">{categoryData.description}</p>
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
              <Link href={`/product/${product.slug}`}>
              <CardContent>
                <div className="relative w-full h-48">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CardContent>
              </Link>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold">
                  {product.price != null 
                    ? `${product.price.toLocaleString()} Ft` 
                    : 'Ár nem elérhető'}
                </span>
                <Button className="ml-2">
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-600">
            No products found for this category.
          </div>
        )}
      </div>
    </div>
  )
}