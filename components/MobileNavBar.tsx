'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ThemeSwitchButton from './ThemeSwitchButton';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from '@clerk/nextjs';
import { useSanityData } from '@/app/hooks/useSanityData';
import { getNavCategoryData, getNavBrandsData } from '@/lib/api';
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from 'lucide-react';

interface NavCategory {
  name: string;
  description: string;
  slug: string;
}

interface NavBrand {
  name: string;
  slug: string;
}

export function MobileNavbar() {
  const { data: categories, isLoading: isCategoriesLoading } = useSanityData<NavCategory[]>(getNavCategoryData);
  const { data: brands, isLoading: isBrandsLoading } = useSanityData<NavBrand[]>(getNavBrandsData);

  return (
    <div className="sm:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
      <Link href="/">
        <Image src="/aetheris1.svg" alt="aetheris" height={30} width={30} />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Navigate through our perfume collection and more.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="brands">
                <AccordionTrigger>BRANDS</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {isBrandsLoading ? (
                      <>
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                      </>
                    ) : (
                      brands?.map((brand) => (
                        <Link key={brand.slug} href={`/brand/${brand.slug}`} className="block p-2 hover:bg-accent rounded-md">
                          {brand.name}
                        </Link>
                      ))
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="perfumes">
                <AccordionTrigger>PERFUMES</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {isCategoriesLoading ? (
                      <>
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                      </>
                    ) : (
                      categories?.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} className="block p-2 hover:bg-accent rounded-md">
                          {category.name}
                        </Link>
                      ))
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/about" className="block p-4 hover:bg-accent rounded-md">
              ABOUT US
            </Link>
            <Link href='/cart'>
              <Button className='flex gap-2'>
              <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
              </Link>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <ThemeSwitchButton />
              <SignedOut>
                <Button>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-2">
                  <UserButton />
                  <Button>
                    <SignOutButton />
                  </Button>
                </div>
              </SignedIn>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}