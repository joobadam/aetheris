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

export function MobileNavbar() {
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
                    <Link href="/" className="block p-2 hover:bg-accent rounded-md">
                      Aetheris
                    </Link>
                    <Link href="/docs" className="block p-2 hover:bg-accent rounded-md">
                      Introduction
                    </Link>
                    <Link href="/docs/installation" className="block p-2 hover:bg-accent rounded-md">
                      Installation
                    </Link>
                    <Link href="/docs/primitives/typography" className="block p-2 hover:bg-accent rounded-md">
                      Typography
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="perfumes">
                <AccordionTrigger>PERFUMES</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <Link href="/perfumes/1" className="block p-2 hover:bg-accent rounded-md">
                      Perfume 1
                    </Link>
                    <Link href="/perfumes/2" className="block p-2 hover:bg-accent rounded-md">
                      Perfume 2
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/about" className="block p-4 hover:bg-accent rounded-md">
              ABOUT US
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