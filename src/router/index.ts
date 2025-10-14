import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookAppointment from '@/views/BookAppointment.vue'
import ContactUs from '@/views/ContactUs.vue'
import BlogsPage from '@/views/BlogsPage.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import PackagesPage from '@/views/PackagesPage.vue'
import PackageDetails from '@/views/PackageDetails.vue'
import Testt from '@/views/Testt.vue'
import Auth from '@/views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path : '/book',
      name : 'book',
      component : BookAppointment
    },
    {
      path : '/contactus',
      name : 'contactUs',
      component : ContactUs
    },
    {
      path : '/blogs',
      name : 'blogs',
      component : BlogsPage
    },
       {
      path : '/blog_dtails',
      name : 'blogsDetails',
      component : BlogDetail
    },
      {
      path : '/packages',
      name : 'packages',
      component : PackagesPage
    },
    {
      path : '/package_details',
      name : 'packageDetails',
      component : PackageDetails
    },
    {
      path : '/test',
      name : 'test',
      component : Testt
    },
    {
      path : '/Auth',
      name : 'Auth',
      component : Auth
    }
  ],

  scrollBehavior(to, from, saved) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (saved) return saved
    return { top: 0 }
  },
})

export default router
