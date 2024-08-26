export interface ProductData {
    name: string
    type: string
    slug: string
    price: number | null
    description: string
    imageUrl: string
    brand?: string
  }