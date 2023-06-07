import { md1,md3 } from 'vuetify/blueprints'
export default defineNuxtConfig({
    modules: [
        '@invictus.codes/nuxt-vuetify'
    ],
    vuetify: {
        vuetifyOptions: {
            blueprint: md3,
        },
        moduleOptions: {
            treeshaking: true,
            useIconCDN: true,
            styles: true,
            autoImport: true,
        }
    }
})
