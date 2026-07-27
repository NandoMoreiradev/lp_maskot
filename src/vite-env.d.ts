/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WHATSAPP_NUMBER?: string
    readonly VITE_GA_MEASUREMENT_ID?: string
    readonly VITE_GOOGLE_ADS_ID?: string
    readonly VITE_GOOGLE_ADS_CONVERSION_LABEL?: string
    readonly VITE_META_PIXEL_ID?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
