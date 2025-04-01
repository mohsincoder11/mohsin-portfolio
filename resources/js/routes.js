import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/Auth/Login.vue";
const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
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
    store.dispatch("loading/setLoading", true); // Vuex example for enabling loader
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({
                name: "sign-in",
            });
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.OnlyGuest)) {
        if (store.getters.isAuthenticated) {
            next({
                name: "home",
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
