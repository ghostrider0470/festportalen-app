/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_URL: string
    readonly VITE_CLOUDINARY_CLOUD_NAME: string
    readonly VITE_CLOUDINARY_API_KEY: string
    readonly VITE_CLOUDINARY_API_SECRET: string
    readonly VITE_CLOUDINARY_API_BASE_ADDRESS: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}