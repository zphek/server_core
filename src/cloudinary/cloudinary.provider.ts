import {v2 as cloudinary} from "cloudinary";

export const CloudinaryProvider = {
    provide: 'CLOUDINARY',
    useFactory: ()=>{
        return cloudinary.config({
            cloud_name: "dckcxwshv",
            api_key: "453437872361889",
            api_secret: "ZOfHmcW1r2EZgw4ruZuKmxYDW1k"
        });
    }
}