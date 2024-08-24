import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen z-50">
      <Image
        alt="Background"
        src="/icons/not_found.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" /> 
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn't find the page you're looking for.</p>
        <p className="mt-4 text-base text-white/70 sm:mt-6 uppercase font-bold">This is just a demo page.</p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-sm font-semibold leading-7 text-white hover:text-white/80">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}