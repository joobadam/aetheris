"use client";

import * as React from "react";
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import { useSanityData } from '@/app/hooks/useSanityData';
import { getNavCategoryData, getNavBrandsData } from '@/lib/api';
import { Skeleton } from "@/components/ui/skeleton";
import { NavBrand, NavCategory } from "@/app/models/Nav.model";
import { ShoppingCart } from 'lucide-react';
import { CartPreview } from "./CartPreview";
import { useCart } from "@/app/providers/CartContext";

export function Navbar() {
  const { data: categories, isLoading: isCategoriesLoading } = useSanityData<NavCategory[]>(getNavCategoryData);
  const { data: brands, isLoading: isBrandsLoading } = useSanityData<NavBrand[]>(getNavBrandsData);
  const { items, isCartPreviewOpen, setIsCartPreviewOpen } = useCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && !event.target.closest('.cart-preview')) {
        setIsCartPreviewOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsCartPreviewOpen]);

  return (
    <div className="hidden sm:flex p-5 fixed w-full justify-between items-center z-40 bg-primary/20">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white">PERFUMES</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/aetheris1.svg"
                        alt="aetheris"
                        height={40}
                        width={40}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Aetheris
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Scents in the air, memories in the ether
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {isCategoriesLoading ? (
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[20vh] w-[40%] rounded-xl" />
                    <Skeleton className="h-[20vh] w-[80%]" />
                    <Skeleton className="h-[30vh] w-[60%]" />
                  </div>
                ) : (
                  categories?.map((category) => (
                    <ListItem key={category.slug} href={`/category/${category.slug}`} title={category.name}>
                      {category.description}
                    </ListItem>
                  ))
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white">BRANDS</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {isBrandsLoading ? (
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[20vh] w-[40%] rounded-xl" />
                    <Skeleton className="h-[20vh] w-[80%]" />
                    <Skeleton className="h-[30vh] w-[60%]" />
                  </div>
                ) : (
                  brands?.map((brand) => (
                    <ListItem
                      key={brand.slug}
                      title={brand.name}
                      href={`/brand/${brand.slug}`}
                      className='pl-10'
                    >
                    </ListItem>
                  ))
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-bold text-sm">
                ABOUT US
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <div className="relative cart-preview">
          <button
            onClick={() => setIsCartPreviewOpen(!isCartPreviewOpen)}
            className="bg-transparent text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </button>
          <CartPreview />
        </div>
        <ThemeSwitchButton />
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
          <Button>
            <SignOutButton />
          </Button>
        </SignedIn>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";