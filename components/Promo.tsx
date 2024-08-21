import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const testimonials = [
  {
    id: 1,
    quote: 'Wearing a niche perfume is like discovering a secret garden. Each time, I find new scent notes on myself.',
    attribution: 'Francis Kurkdjian, Paris',
  },
  {
    id: 2,
    quote: 'The combination of uniqueness and quality is astounding. These perfumes are truly works of art, not just fragrances.',
    attribution: 'Serge Lutens, Marrakech',
  },
  {
    id: 3,
    quote: 'With niche perfumes, I finally found the scent that perfectly expresses my personality. It is invaluable to me.',
    attribution: 'Tom Ford, New York',
  },
]

export default function NichePerfumePromo() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">  
          <Image
            alt="Niche perfume background"
            src="/icons/niche-perfume-background.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="opacity-20"
          />
        </div>
      </div>

      {/* Main content */}
      <section
        aria-labelledby="promo-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="promo-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the World of Niche Perfumes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl">
            Niche perfumes are not just scents, they are artistic creations. Their unique compositions, high-quality ingredients, and limited availability make them stand out from mass-market fragrances.
          </p>
          <Link href="/collections/niche-perfumes" passHref>
            <Button className="mt-6 inline-block w-full font-medium sm:w-auto">
              Explore Our Niche Perfume Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight">
            What Do Perfumes Say About Their Creators?
          </h2>
          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic">{testimonial.attribution}</cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}