// Create a Cloudinary instance and set your cloud name.
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {

        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
        apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET
    }
});
export const getImgUrl = (item: string | undefined | null) => {
    if (item === undefined || item === null) {
        return 'https://placehold.co/600x400';
    }

    // Find the index of the last occurrence of '/v1/' in the URL
    const lastIndex = item.lastIndexOf('/v1/');

    // Extract the substring starting from the index after '/v1/'
    const trimmedString = item.substring(lastIndex + 4);

    return cld.image(trimmedString)
        .format('webp')
        .quality('auto')
        .toURL();
}
export default cld;