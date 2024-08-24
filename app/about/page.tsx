'use client'

import React from 'react'
import Image from 'next/image'
import { useSanityData } from '@/app/hooks/useSanityData'
import { getAboutData } from '@/lib/api'
import { SkeletonCard } from "@/components/Skeleton"

interface AboutData {
  title: string
  imageUrl: string
  slug: string
  description: string
  description2: string
}

export default function Page() {
  const { data: aboutData, isLoading, error } = useSanityData<AboutData[]>(getAboutData)

  if (error) return <div>Error: {error.message}</div>

  if (isLoading) {
    return <SkeletonCard />
  }

  if (!aboutData || aboutData.length === 0) return <div>No about information available.</div>

  const { title, imageUrl, description, description2 } = aboutData[0]

  return (
    <div className="container mx-auto px-5 py-8">
      <div className="relative h-[70vh] mb-8">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="space-y-10">
        <p className="">{description}</p>
        <p className="">{description2}</p>
      </div>
    </div>
  )
}