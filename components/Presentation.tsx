/* 'use client'

import React from 'react'
import Image from 'next/image'
import { getPresentationData } from '../lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSanityData } from '@/app/hooks/useSanityData'

interface PresentationItem {
  title: string
  imageUrl: string | null
  image1Url: string | null
  image2Url: string | null
  name1: string | null
  name2: string | null
  price1: number | null
  price2: number | null
  slug: string
}

export default function Presentation() {
  const { data: presentationItems, isLoading, error } = useSanityData<PresentationItem[]>(getPresentationData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!presentationItems || presentationItems.length < 4) return null

  const formatPrice = (price: number | null) => {
    return price != null ? price.toLocaleString() : 'N/A'
  }

  const renderImage = (url: string | null, alt: string) => {
    if (!url) {
      return <div className="w-full h-48 bg-gray-200 flex items-center justify-center">No image available</div>
    }
    return (
      <div className="relative w-full h-48">
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    )
  }

  const renderFullWidthImage = (item: PresentationItem) => (
    <div className="relative w-full h-[50vh]">
      {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white text-center">{item.title}</h2>
      </div>
    </div>
  )

  const renderCard = (item: PresentationItem) => (
    <Card className="duration-300 shadow-lg hover:shadow-2xl">
      <CardHeader>
        <CardTitle>{item.name1}</CardTitle>
      </CardHeader>
      <CardContent>
        {renderImage(item.image1Url, item.name1 || '')}
      </CardContent>
      <CardFooter className="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2">
        <span className='mx-auto sm:mx-0'>{formatPrice(item.price1)} Ft</span>
        {item.price1 != null && (
          <Button className="">
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {renderFullWidthImage(presentationItems[1])}
        {renderCard(presentationItems[3])}
        {renderCard(presentationItems[2])}
        {renderFullWidthImage(presentationItems[0])}
      </div>
    </div>
  )
} */


'use client'

import React from 'react'
import Image from 'next/image'
import { getPresentationData } from '../lib/api'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSanityData } from '@/app/hooks/useSanityData'

interface PresentationItem {
  title: string
  imageUrl: string | null
  image1Url: string | null
  image2Url: string | null
  name1: string | null
  name2: string | null
  price1: number | null
  price2: number | null
  slug: string
}

export default function Presentation() {
  const { data: presentationItems, isLoading, error } = useSanityData<PresentationItem[]>(getPresentationData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!presentationItems || presentationItems.length < 4) return null

  const formatPrice = (price: number | null) => {
    return price != null ? price.toLocaleString() : 'N/A'
  }

  const renderImage = (url: string | null, alt: string) => {
    if (!url) {
      return <div className="w-full h-48 bg-gray-200 flex items-center justify-center">No image available</div>
    }
    return (
      <div className="relative w-full h-48">
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    )
  }

  const renderFullWidthImage = (item: PresentationItem) => (
    <div className="relative h-[65vh]">
      {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white text-center">{item.title}</h2>
      </div>
    </div>
  )

  const renderCards = (item: PresentationItem) => (
    <div className="">
{/*        <h2 className="font-bold mb-6">{item.title}</h2>  */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="duration-300 shadow-lg hover:shadow-2xl">
          <CardHeader>
            <CardTitle>{item.name1}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderImage(item.image1Url, item.name1 || '')}
          </CardContent>
          <CardFooter className="grid grid-rows-2">
            <span className='mx-auto '>{formatPrice(item.price1)} Ft</span>
            {item.price1 != null && (
              <Button className="">
                Add to cart
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className="duration-300 shadow-lg hover:shadow-2xl">
          <CardHeader>
            <CardTitle>{item.name2}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderImage(item.image2Url, item.name2 || '')}
          </CardContent>
          <CardFooter className="grid grid-rows-2">
            <span className='mx-auto'>{formatPrice(item.price2)} Ft</span>
            {item.price2 != null && (
              <Button className="">
                Add to cart
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderFullWidthImage(presentationItems[1])}
        {renderCards(presentationItems[3])}
        {renderCards(presentationItems[2])}
        {renderFullWidthImage(presentationItems[0])}
      </div>
    </div>
  )
}