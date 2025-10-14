<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import logo from '@/assets/logo.png'
import { useRoute, useRouter } from 'vue-router'


type NavItem =
  | { label: string; to: string }                 // صفحات عادية
  | { label: string; hash: string }               // أقسام الهوم

const nav: NavItem[] = [
  { label: 'Home',     to: '/' },
  { label: 'Services', hash: '#services' },
  { label: 'About Us', hash: '#about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Blog',     to: '/blogs' },
]

const openDrawer = ref(false)
const toggleDrawer = () => (openDrawer.value = !openDrawer.value)

/* --- Active detection --- */
const route = useRoute()
const router = useRouter()
const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

async function goSection(hash: string) {
  // لو مو على الهوم، روح للهوم مع الهاش — scrollBehavior يتكفّل بالتمرير
  if (route.path !== '/') {
    await router.push({ path: '/', hash })
    return
  }
  toggleDrawer()
  // على الهوم: مرّر ناعمًا داخل نفس الصفحة
  await nextTick()
  const el = document.querySelector(hash) as HTMLElement | null
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // حدّث العنوان بدون إعادة تحميل
    history.replaceState(null, '', hash)
  }
}

/* أغلق السايدبار عند تغيّر المسار */
watch(() => route.fullPath, () => (openDrawer.value = false))
</script>

<template>
  <header class="sticky top-0 z-50 bg-white">
    <!-- Desktop navbar -->
    <nav class="hidden border-b border-gray-100 lg:block">
      <div class="mx-auto max-w-7xl px-6">
        <div class="flex h-16 items-center justify-between">
          <!-- logo -->
          <RouterLink to="/" class="flex items-center gap-2">
            <img :src="logo" alt="Qawaem Mohasib" class="h-26" />
          </RouterLink>

          <!-- links center -->
         <ul class="flex items-center gap-8 text-[17px]">
            <li v-for="(item, i) in nav" :key="i" class="relative">
              <RouterLink
              v-if="'to' in item"
                :to="item.to"
                :class="[
                  'font-medium',
                  isActive(item.to) ? 'text-[#1E3A8A] font-extrabold' : 'text-[#1E3A8A] hover:text-[#0f2870]'
                ]"
              >
                {{ item.label }}
              </RouterLink>

                  <button
        v-else
        type="button"
        @click="goSection(item.hash)"
        class="text-[#1E3A8A] hover:text-[#0f2870] font-medium">
        {{ item.label }}
      </button>
              <span
              
                v-if="'to' in item && isActive(item.to)"
                class="absolute left-1/2 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-[#97A8D9]"
              />
            </li>
          </ul>

          <!-- right -->
          <div class="flex items-center gap-5">
            <button class="text-[#1E3A8A]" aria-label="Search">
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
                />
              </svg>
            </button>

            <span class="h-6 w-px bg-gray-200" />

            <RouterLink to="/Auth" class="inline-flex items-center gap-2 text-[17px] font-medium text-green-600">
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
                />
              </svg>
              Sign In
            </RouterLink>

            <RouterLink
              to="/contactus"
              class="rounded-lg bg-[#1E3A8A] px-5 py-2.5 text-[16px] font-semibold text-white shadow hover:bg-[#182f77]"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile top -->
    <nav class="border-b border-gray-200 lg:hidden">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex h-14 items-center justify-between">
          <RouterLink to="/">
            <img :src="logo" alt="logo" class="h-20" />
          </RouterLink>

          <div class="flex items-center gap-5">
            <button class="text-[#163B8E]" aria-label="Search">
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
                />
              </svg>
            </button>

            <button @click="toggleDrawer" class="text-[#163B8E]" aria-label="Open menu">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Drawer -->
    <transition name="fade">
      <div
        v-if="openDrawer"
        class="fixed inset-0 z-50 bg-white lg:hidden"
        role="dialog"
      >
        <div class="flex items-center justify-between px-4 py-4">
          <img :src="logo" alt="logo" class="h-26" />
          <button @click="toggleDrawer" class="text-[#2A5AC1]">
            <svg viewBox="0 0 24 24" class="h-6 w-6">
              <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

       <ul class="divide-y divide-dashed divide-gray-200/90">
          <li v-for="(item, i) in nav" :key="i">
            <RouterLink
            v-if="'to' in item"
              :to="item.to"
              class="flex items-center justify-between px-4 py-5 text-[18px] font-medium"
              :class="isActive(item.to) ? 'text-[#1E3A8A]' : 'text-[#1E3A8A]'"
            >
              <span>{{ item.label }}</span>
              <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#1E3A8A]">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <div
        v-else
        type="button"
        @click="goSection(item.hash) "
        class="flex   justify-between mx-4 py-4 text-[#1E3A8A] hover:text-[#0f2870] font-medium">
          <span>{{ item.label }}</span>

         <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#1E3A8A]">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
      </div>
          </li>
        </ul>

        <div class="mt-16 flex items-center justify-center gap-6 px-4">
          <RouterLink to="/Auth" class="inline-flex items-center gap-2 text-[17px] font-semibold text-[#1E3A8A]">
            <svg viewBox="0 0 24 24" class="h-5 w-5">
              <path
                fill="currentColor"
                d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
              />
            </svg>
            Sign In
          </RouterLink>

          <span class="h-8 w-px bg-gray-200"></span>

          <RouterLink
            to="/contactus"
            class="inline-flex items-center gap-2 rounded-lg bg-[#1E3A8A] px-4 py-2.5 text-[16px] font-semibold text-white"
            @click="toggleDrawer"
          >
            Contact Us
            <svg viewBox="0 0 20 20" class="h-4 w-4">
              <path
                d="M7 4l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
