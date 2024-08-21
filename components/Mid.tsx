'use client'

import React from 'react'
import Image from 'next/image'

import { getMidData } from '../lib/api'
import { useSanityData } from '@/app/hooks/useSanityData'

interface MidData {
  title: string
  imageUrl: string
  slug: string
}

export default function Mid() {
  const { data: midData, isLoading, error } = useSanityData<MidData[]>(getMidData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!midData || midData.length === 0) return null

  const { title, imageUrl } = midData[0] // Csak az első elemet használjuk

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