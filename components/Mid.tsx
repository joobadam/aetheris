'use client'

import React from 'react'
import Image from 'next/image'
import { getMidData } from '../lib/api'
import { useSanityData } from '@/app/hooks/useSanityData'
import { SkeletonCard } from './Skeleton'
import { MidData } from '@/app/models/Mid.model'



export default function Mid() {
  const { data: midData, isLoading, error } = useSanityData<MidData[]>(getMidData)

  if (error) return <div className="w-full h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>
  if (!midData || midData.length === 0) return null

  if (isLoading) {
    return <SkeletonCard />
  }

  const { title, imageUrl } = midData[0]

  return (
    <div className="relative w-full h-screen">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
    </div>
  )
}