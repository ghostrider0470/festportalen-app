// Create a Cloudinary instance and set your cloud name.
import {Cloudinary} from "@cloudinary/url-gen";
import {limitPad} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {

        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
        apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    },
    url: {
        secure: true,
    },

});
export const getImgUrl = (item: string | undefined | null, size?: { w: number, h: number }) => {
    if (item === undefined || item === null) {
        return 'https://placehold.co/600x400';
    }

    // Find the index of the last occurrence of '/v1/' in the URL
    const lastIndex = item.lastIndexOf('/v1/');

    // Extract the substring starting from the index after '/v1/'
    const trimmedString = item.substring(lastIndex + 4);

    if (size) {
        return cld.image(trimmedString)
            .resize(limitPad()
                .width(size.w)
                .height(size.h))
            .format('webp')
            .quality('auto')
            .toURL();
    }

    return cld.image(trimmedString)
        .format('webp')
        .quality('auto')
        .toURL();
}
export const getImgUrlFrom = (publicId: string | undefined | null) => {
    console.log(publicId);
    if (publicId === undefined || publicId === null) {
        return 'https://placehold.co/600x400';
    }
    return cld.image(publicId)
        .resize(limitPad()
            .width(70)
            .height(70))
        .format('webp')

        .quality('auto').toURL();
}

export default cld;