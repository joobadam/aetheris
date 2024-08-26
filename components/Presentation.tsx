'use client'

import React from 'react'
import Image from 'next/image'
import { getPresentationData } from '../lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSanityData } from '@/app/hooks/useSanityData'
import { SkeletonCard } from './Skeleton'
import { PresentationItem } from '@/app/models/Presentation.model'
import Link from 'next/link'



export default function Presentation() {
  const { data: presentationItems, isLoading, error } = useSanityData<PresentationItem[]>(getPresentationData)

  const renderImage = (url: string | null, alt: string) => (
    <div className="relative w-full h-48">
      {url ? (
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      ) : (
        <SkeletonCard/>
      )}
    </div>
  )

  const renderFullWidthImage = (item: PresentationItem) => (
    <div className="relative h-[65vh]">
      {item?.imageUrl ? (
        <Image
          src={item.imageUrl}
          alt={item.title || ''}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <SkeletonCard/>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white text-center">{item?.title || <SkeletonCard />}</h2>
      </div>
    </div>
  )

  const renderCards = (item: PresentationItem) => (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((index) => (
          <Card key={index} className="duration-300 shadow-lg hover:shadow-2xl">
            <CardHeader>
              <CardTitle>{item?.[`name${index}` as keyof PresentationItem] || <SkeletonCard/>}</CardTitle>
            </CardHeader>
            <Link href={`/brand/${item.brand}`}>
            <CardContent>
              {renderImage(item?.[`image${index}Url` as keyof PresentationItem] as string | null, item?.[`name${index}` as keyof PresentationItem] as string || '')}
            </CardContent>
            <CardFooter className="grid grid-rows-2">
              <Button className="">
                More info
              </Button>
            </CardFooter>
          </Link>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading || error || !presentationItems ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            {renderFullWidthImage(presentationItems[1])}
            {renderCards(presentationItems[3])}
            {renderCards(presentationItems[2])}
            {renderFullWidthImage(presentationItems[0])}
          </>
        )}
      </div>
    </div>
  )
}