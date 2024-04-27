import {v2 as cloudinary} from "cloudinary";

export const CloudinaryProvider = {
    provide: 'CLOUDINARY',
    useFactory: ()=>{
        return cloudinary.config({
            cloud_name: CLOUDNAME,
            api_key: APIKEY,
            api_secret: APISECRET
        });
    }
}