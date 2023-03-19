'useClient'

import { createClient, createCurrentUserHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { defineConfig } from 'sanity'


export default defineConfig({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

export const sanityCient = createClient(defineConfig);

const builder = imageUrlBuilder(defineConfig);

export const urlFor = (source) => builder.image(source);

export const useCurrentUser = createCurrentUserHook(defineConfig);
