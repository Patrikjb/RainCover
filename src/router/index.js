import { createWebHistory, createRouter } from "vue-router";

import MainView from '../Views/MainView.vue'
import MobileView from '../Views/MobileView.vue'
import BuyDesktopView from '../Views/BuyDesktopView.vue'
import DesktopLandingPage from '../components/DesktopLandingPage.vue'
import AboutDesktop from '../components/AboutDesktop.vue'

const routes = [
    {
        path: "/",
        name: "DesktopLandingPage",
        component: DesktopLandingPage
    },
    {
        path: "/mobile",
        name: "MobileView",
        component: MobileView
    },
    {
        path: "/buydesktop",
        name: "BuyDesktopView",
        component: BuyDesktopView
    },
    {
        path: "/aboutdesktop",
        name: "AboutDesktop",
        component: AboutDesktop
    },
];

const router = createRouter(
    {history:createWebHistory(),
    routes
});

export default router;