import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const clientConfig = createClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_REACT_APP_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_REACT_APP_SANITY_API_VERSION,
    useCdn: true,
    token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(clientConfig);

export const urlFor = (source: SanityImageSource) => {
    if (!source) {
        console.warn('Sanity image source is undefined or invalid');
        return ''; 
    }
    return builder.image(source).url();
};
