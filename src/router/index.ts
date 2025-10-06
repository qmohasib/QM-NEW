// BEGIN: Add missing imports
import { defineComponent } from 'vue'; // Ensure Vue is imported correctly
import { RouteRecordRaw } from 'vue-router'; // Add this import for RouteRecordRaw type
// END: Add missing imports
import { createRouter, createWebHistory } from "vue-router";

import SignIn from "@/views/signIn.vue"; // Ensure the path is correct and type declarations are available

import CreateAccount from "@/views/createAccount.vue"; // Adjusted path to ensure it resolves correctly


const routes: RouteRecordRaw[] = [ // Specify the type for routes
  { path: "/", redirect: "/signin" },
  { path: "/signin", component: SignIn },
  { path: "/create-account", component: CreateAccount },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// END: Fix import issue

export default router;
