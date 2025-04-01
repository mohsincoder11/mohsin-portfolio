import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                "resources/css/app.scss","resources/css/admin.scss","resources/js/app.js","resources/js/admin/app.js",
            ],
            refresh: true,
        }),
    ], 
});