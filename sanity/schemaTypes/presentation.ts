import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'presentation',
  title: 'Presentation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image1',
      title: 'Image1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image2',
      title: 'Image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name1',
      title: 'Name1',
      type: 'string',
    }),
    defineField({
      name: 'name2',
      title: 'Name2',
      type: 'string',
    }),
    defineField({
      name: 'price1',
      title: 'Price1',
      type: 'number',
    }),
    defineField({
      name: 'price2',
      title: 'Price2',
      type: 'number',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})