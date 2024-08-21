'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { getBannerData } from '../lib/api'
import { Button } from "@/components/ui/button"
import { useSanityData } from '@/app/hooks/useSanityData'

interface BannerData {
  title: string
  description: string
  imageUrl?: string
  slug?: string
}

export function Banner() {
  const { data: bannerData, isLoading, error } = useSanityData<BannerData[]>(getBannerData)

  if (isLoading) return <div className="w-full h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="w-full h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>
  if (!bannerData || bannerData.length === 0) return null

  return (
    <div className="relative w-full ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full "
      >
        <CarouselContent className=''>
          {bannerData.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full overflow-hidden h-[60vh]">
                {banner.imageUrl && (
                  <img 
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-16 lg:p-24">
                  <div className="max-w-4xl">
                    <h2 className="text-xl font-bold mb-4 text-white">{banner.title}</h2>
                    <p className="text-sm text-white mb-6">{banner.description}</p>
                    <Button variant="outline" className="">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" left-4 z-10" />
        <CarouselNext className=" right-4 z-10" />
      </Carousel>
    </div>
  )
}