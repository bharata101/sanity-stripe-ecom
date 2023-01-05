import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 export const client = sanityClient({
    projectId:'780kk14c',
    dataset:'production',
    apiVersion:'2022-12-23',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client); // sanity akan kasih url dimana image kita berada

export const urlFor = (source) => builder.image(source);