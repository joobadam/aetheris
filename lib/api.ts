import { client } from './sanity'

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

// További függvények a többi séma típushoz...