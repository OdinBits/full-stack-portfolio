import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: process.env.API_VERSION,
    useCdn: true,
    token: process.env.TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source).url(); 