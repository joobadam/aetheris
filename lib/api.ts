import { client } from './sanity'


export async function getNavCategoryData() {
  return client.fetch(`*[_type == "navCategory"] {
    name,
    description,
    "slug": slug.current
  }`)
}

export async function getNavBrandsData() {
  return client.fetch(`*[_type == "navBrands"] {
    name,
    "slug": slug.current
  }`)
}

export async function getBannerData() {
  return client.fetch(`*[_type == "banner"] {
    title,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`)
}

export async function getSectionData() {
  return client.fetch(`*[_type == "section"] {
    title,
    description,
    "image": image {
      asset->{
        url
      }
    },
    slug
  }`)
}


export async function getAboutData() {
  return client.fetch(`*[_type == "about"] {
    title,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    description,
    description2
  }`)
}

export async function getMidData() {
  return client.fetch(`*[_type == "mid"] {
    title,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`)
}

export async function getPopularData() {
  return client.fetch(`*[_type == "popular"] {
    name,
    "imageUrl": image.asset->url,
    price,
    "slug": slug.current
  }`)
}

export async function getPresentationData() {
  return client.fetch(`*[_type == "presentation"] {
    title,
    "imageUrl": image.asset->url,
    "image1Url": image1.asset->url,
    "image2Url": image2.asset->url,
    name1,
    name2,
    price1,
    price2,
    "slug": slug.current
  }`)
}

export async function getMonthlyData() {
  return client.fetch(`*[_type == "monthly"] {
    title,
    "image": image {
      asset->{
        url
      }
    },
    slug
  }`)
}

export async function getBrandData(slug: string) {
  return client.fetch(`*[_type == "brand" && slug.current == $slug][0] {
    name,
    "imageUrl": image.asset->url,
    description,
    "slug": slug.current
  }`, { slug })
}

export async function getProductsByBrandSlug(brandSlug: string) {
  return client.fetch(`*[_type == "product" && brand == $brandSlug] {
    name,
    brand,
    type,
    "slug": slug.current,
    price,
    description,
    "imageUrl": image.asset->url
  }`, { brandSlug })
}