import { v2 as cloudinary } from "cloudinary";

const config = useRuntimeConfig();
function cloudinaryInit() {
    cloudinary.config({
        cloud_name: config.cludinaryCloudName,
        api_key: config.cludinaryApiKey,
        api_secret: config.cludinaryApiSecret,
    });
    return cloudinary
}
export async function uploadToCloudinary(image) {
    const response = await cloudinaryInit().uploader.upload(image);
    return response;
}