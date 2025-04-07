import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {},
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});
router.beforeEach((to, from, next) => {
    next();
});
export default router;
