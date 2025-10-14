<script setup lang="ts">
import BreadcrumbHeader from '@/components/Auth/BreadcrumbHeader.vue'
import PricingCard from '@/components/PricingCard.vue'
import chatgrow from '@/assets/icon/about/chart growth.svg'
import Footer from '@/components/Footer/Footer.vue'
import { ref, computed } from 'vue'

/* ------------------ Toggle ------------------ */
type Toggle = 'Monthly' | 'Platform packages'
const toggle = ref<Toggle>('Monthly')

type Plan = {
    name: string
    subtitle: string
    price: string
    note: string
    features: string[]
    featured?: boolean
}

const plans: Plan[] = [
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
     {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
]

const hoveredIndex = ref<number | null>(null)
const setHover = (i: number | null) => (hoveredIndex.value = i)


/* ------------------ Compare Table ------------------ */
type Row = { label: string; cols: boolean[] }
const tableHeader = [
  'Service Facility Package',
  'Service Facility Package',
  'Service Facility Package',
  'Service Facility Package',
  'Service Facility Package',
]
const coreRows: Row[] = [
  { label: 'Total Limit', cols: [true, true, true, true, false] },
  { label: 'Total Limit', cols: [false, true, true, true, true] },
  { label: 'Total Limit', cols: [true, false, true, true, true] },
  { label: 'Total Limit', cols: [true, true, false, true, false] },
  { label: 'Total Limit', cols: [true, true, true, false, true] },
]
</script>

<template>
  <section class="bg-white">
    <!-- Breadcrumb bar -->
        <!-- Header -->
    <BreadcrumbHeader :items="[
      { label: 'Home', to: '/', icon: true },
      { label: 'Packages' }
    ]" title="Packages" bg-class="bg-[#F6F9FF]" border-class="border-gray-100" title-align="center"
      :uppercase-title="false" separator="›" />

    <div class="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <!-- Title + subtitle -->
      <header class="text-center">
        <h1 class="text-3xl font-extrabold font-Cairo text-[#1f3b86] sm:text-[32px]">
          Choose <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2a5ac1] to-[#67d2d5]">_</span>
          Your Package Now
        </h1>
        <p class="mt-2 text-gray-500 font-Nunito">
          Our packages are designed to suit every stage of your business.
        </p>

        <!-- Toggle -->
        <div class="mt-6 inline-flex rounded-full  bg-white border border-gray-300  px-6 py-2 text-sm">
          <button
            class="rounded-full px-4 py-1.5"
            :class="toggle==='Monthly' ? 'bg-[#59CBEF] shadow text-[#2A5AC1]' : 'text-gray-600'"
            @click="toggle='Monthly'"
          >
            Monthly
          </button>
          <button
            class="rounded-full px-4 py-1.5"
            :class="toggle==='Platform packages' ? 'bg-[#59CBEF] shadow text-[#2A5AC1]' : 'text-gray-600'"
            @click="toggle='Platform packages'"
          >
            Platform packages
          </button>
        </div>
      </header>

      <!-- 3 pricing cards -->
       <section class="bg-white rounded-2xl" >
                <div class="mx-auto max-w-7xl px-4 py-10">
                    <div class="grid gap-6 md:grid-cols-3">
                        <div v-for="(p, idx) in plans" :key="idx">
                            <div @mouseenter="setHover(idx)" @mouseleave="setHover(null)" @focusin="setHover(idx)"
                                @focusout="setHover(null)" class="outline-none" tabindex="0">
                                <PricingCard :plan="p" :active="p.featured || hoveredIndex === idx" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>

    <!-- Banner -->
    <div class="mx-auto max-w-6xl px-4">
      <div class="rounded-2xl border border-gray-100 bg-[#F6F9FF] p-6 sm:p-8 shadow-sm">
        <div class="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 class="text-[20px] font-bold text-[#1f3b86] font-Cairo">
              Always stay compliant with smart accounting
            </h3>
            <p class="mt-3 text-sm text-gray-600 font-Nunito">
              —Qawaem takes care of it all. Save time, avoid costly errors, and focus on
              growing your business while we handle the numbers.
            </p>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              class="h-40 w-full rounded-xl object-cover"
              alt=""
            />
            <span class="absolute bottom-2 right-2 rounded-lg items-center bg-white px-3 py-1 text-xs font-semibold text-[#1f3b86] shadow flex">
              Revenue growth <img :src="chatgrow" class="w-10 h-10" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Compare Plans -->
    <div class="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h3 class="text-center text-xl font-bold text-gray-900 font-Cairo">Compare Plans</h3>

      <!-- header buttons (شكل فقط) -->
      <div class="mt-6 grid gap-4 sm:grid-cols-5">
        <div v-for="(h, i) in tableHeader" :key="i" class="text-center">
          <p class="text-xs text-gray-500 leading-4">Service Facility<br/>Package</p>
          <button
            class="mx-auto mt-3 rounded-sm border px-6 py-2 text-xs font-semibold"
            :class="i===3 ? 'bg-[#59CBEF] text-white border-transparent' : 'border-[#59CBEF] text-[#59CBEF]'"
          >
            Get Stated
          </button>
        </div>
      </div>

      <!-- table -->
      <div class="mt-6 overflow-hidden rounded-xl  ">
        <div class="divide-y  divide-gray-200">
          <!-- section title -->
          <div class="bg-gray-50 px-4 py-3 text-sm font-semibold text-[#1E3A8A]">Core features</div>

          <div v-for="(row, rIndex) in coreRows" :key="rIndex" class="grid grid-cols-[200px_repeat(5,minmax(0,1fr))] items-center px-4 py-4">
            <div class="text-sm text-[#1E3A8A]">{{ row.label }}</div>
            <div v-for="(v, cIndex) in row.cols" :key="cIndex" class="flex items-center justify-center">
              <span
                class="inline-grid h-5 w-5 place-items-center rounded-full"
                :class="v ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'"
              >
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path v-if="v" fill="currentColor" d="M8.6 13.2 5.4 10l1.4-1.4L8.6 10.4l4.6-4.6L14.6 7.2 8.6 13.2Z" />
                  <circle v-else cx="10" cy="10" r="6" fill="currentColor"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- second section title (مكرر كما بالصورة) -->
          <div class="bg-gray-50 px-4 py-3 text-sm font-semibold text-[#1E3A8A] font-Cairo">Core features</div>

          <div v-for="(row, rIndex) in coreRows" :key="'b'+rIndex" class="grid grid-cols-[200px_repeat(5,minmax(0,1fr))] items-center px-4 py-4">
            <div class="text-sm text-[#1E3A8A]">{{ row.label }}</div>
            <div v-for="(v, cIndex) in row.cols" :key="cIndex" class="flex items-center justify-center">
              <span
                class="inline-grid h-5 w-5 place-items-center rounded-full"
                :class="v ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'"
              >
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path v-if="v" fill="currentColor" d="M8.6 13.2 5.4 10l1.4-1.4L8.6 10.4l4.6-4.6L14.6 7.2 8.6 13.2Z" />
                  <circle v-else cx="10" cy="10" r="6" fill="currentColor"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video section -->
    <div class="mx-auto max-w-6xl px-4 pb-16">
      <h4 class="mb-4 text-center text-sm font-bold text-gray-900 font-Cairo">
        You can learn about our entire package through the explanatory video.
      </h4>

      <div class="grid gap-6 rounded-2xl border border-gray-200 bg-[#F6F9FF] p-6 sm:grid-cols-[1fr_360px]">
        <div>
          <div class="flex flex-wrap items-center gap-2 text-[11px]">
            <span class="rounded-full bg-[#163B8E] px-2.5 py-1 text-white"># system packages</span>
            <span class="rounded-full bg-[#163B8E] px-2.5 py-1 text-white"># Month package</span>
            <span class="rounded-full bg-[#163B8E] px-2.5 py-1 text-white"># future support</span>
          </div>
          <h3 class="mt-3 text-lg font-semibold text-gray-900">Qawaem Mohasbi</h3>
          <p class="mt-1 text-sm text-gray-600">
            Helps developers quickly navigate, query, and debug their SQL-like datasets,
            making troubleshooting faster and more efficient. It's an essential tool for all
            developers at Pythagora.
          </p>
          <div class="mt-4 flex items-center gap-3">
            <button class="rounded-md bg-[#1f3b86] px-4 py-2 text-xs font-semibold text-white">View demo</button>
            <button class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-[#1f3b86] shadow">
              Watch Now
              <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
            class="h-40 w-full rounded-xl object-cover sm:h-full"
            alt=""
          />
          <button
            class="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#1f3b86] shadow"
            aria-label="Play"
          >
            <svg viewBox="0 0 20 20" class="h-6 w-6"><path fill="currentColor" d="M7 4l9 6-9 6V4Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
/* كل شيء عبر Tailwind؛ لا يلزم CSS إضافي */
</style>
