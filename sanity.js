import { createCurrentUserHook ,  createClient } from 'next-sanity';
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // apiVersion: '2021-08-11', 
  projectId: 's3nxowgc', // you can find this in sanity.json
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
};
export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);
