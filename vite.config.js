import { defineConfig, loadEnv } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

import { fileURLToPath, URL } from 'node:url';


export default defineConfig((mode) => {
    //https://main.vitejs.dev/config/#using-environment-variables-in-config
    const env = loadEnv(mode, process.cwd(), '');
    //version .evn
    const version = env.VITE_APP_VERSION?.split(" ")[0].split(".").join("_") || "0.0.1";

    return {

        base: "https://vitevue2.takeoverdev.com",
        plugins: [
            vue2(
            ),
            Components({
                resolvers: [VuetifyResolver()],
            })
        ],
        build: {
            //https://vitejs.dev/config/build-options#build-minify
            minify: true,
            reportCompressedSize: true,
            cssCodeSplit: true,
            // assetsDir: 'assets', 
            outDir: 'dist', // 

            rollupOptions: {
                output: {
                    //https://rollupjs.org/configuration-options/#output-assetfilenames
                    //The pattern to use for naming custom emitted assets to include in the build output, or a function that is called per asset to return such a pattern
                    assetFileNames: (assetInfo) => {
                        const name = assetInfo.name;
                        const fileNameSection = name.split("");
                        const medium = Math.trunc(fileNameSection.length / 2);
                        const sectionFirts = medium % 2 == 0 ? fileNameSection.slice(0, medium).reverse().join("") + "f" : fileNameSection.slice(medium).reverse().join("") + "s";
                        if (name.endsWith(".css")) {
                            return `css/${sectionFirts}_[hash]${version}[extname]`;
                        }
                        else {
                            return `assets/a${sectionFirts}_[hash]${version}[extname]`;

                        }
                    },
                    //https://rollupjs.org/configuration-options/#output-chunkfilenames
                    //The pattern to use for naming shared chunks created when code-splitting, or a function that is called per chunk to return such a pattern
                    chunkFileNames: (chunkInfo) => {
                        console.log(chunkInfo, "---");
                        const facadeModuleId = chunkInfo.facadeModuleId?.split('/') ?? [];
                        let name = "";
                        if (facadeModuleId.length > 0) {
                            const nameF = facadeModuleId[facadeModuleId.length - 2];
                            const fileNameSection = nameF.split("");
                            const medium = Math.trunc(fileNameSection.length / 2);
                            const sectionFirts = medium % 2 == 0 ? fileNameSection.slice(0, medium).reverse().join("") + "r" : fileNameSection.slice(medium).reverse().join("");
                            const finalName = `[hash]${sectionFirts}`;
                            name = finalName;
                        } else {

                            const arrayName = chunkInfo.name.split("");
                            const medium = Math.trunc(arrayName.length / 2);
                            const sectionFirts = medium % 2 == 0 ? arrayName.slice(0, medium).reverse().join("") + "fn" : arrayName.slice(medium).reverse().join("") + "sn";

                            name = `[hash]${sectionFirts}`;
                        }

                        return `js/chunk_${name}.[hash]${version}.js`;
                    },
                    //https://rollupjs.org/configuration-options/#output-entryfilenames
                    //The pattern to use for chunks created from entry points,
                    entryFileNames: () => {

                        //Archivo js principal 
                        return `js/chunkMain__[name]-[hash]${version}.js`;
                    },
                },

            },

        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
            extensions: [
                '.js',
                '.json',
                '.jsx',
                '.mjs',
                '.ts',
                '.tsx',
                '.vue',
            ],
        },
    }



})
