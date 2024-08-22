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

// További függvények a többi séma típushoz...