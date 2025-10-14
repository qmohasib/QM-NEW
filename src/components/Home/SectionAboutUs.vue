<script setup lang="ts">
import imgmain from '@/assets/icon/about/Frame 780.png'
import chatgrow from '@/assets/icon/about/chart growth.svg'
import chart from '@/assets/icon/about/Chart.svg'

interface Props {
  title?: string
  body?: string
  image?: string
  customers?: number
}
const props = withDefaults(defineProps<Props>(), {
  title: 'About Us',
  body:
    'We are an innovative accounting platform that aims to simplify and manage your financial business with ease and professionalism. We offer integrated solutions that include accounting, invoicing, reporting, payroll management.',
  image:imgmain,
  customers: 37230,
})

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)
</script>

<template>
  <section class="bg-white" id="about">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <!-- Left: Image Card -->
        <div class="relative mx-auto w-full max-w-md">
          <div
            class="relative rounded-t-[28px] rounded-b-[140px] shadow-[0_30px_80px_rgba(23,44,90,0.12)] ring-1 ring-gray-100"
          >
            <img
              :src="props.image"
              alt="About us"
              class="h-[380px] w-full  object-cover sm:h-[520px]"
            />

            <!-- Top-right mini badge -->
            <div
              class="absolute -right-3 -top-3 rounded-2xl bg-white px-3 py-2 shadow-[0_12px_30px_rgba(23,44,90,0.18)] ring-1 ring-gray-100 animate-float-slow"
            >
              <div class="flex items-center gap-2">
                <div class="grid h-8 w-8 place-items-center rounded-xl bg-[#EEF3FF] text-[#1F3B86]">
                  <!-- bars icon -->
                  <img :src="chart" class="h-5 w-5" alt="">
                </div>
                <span class="text-sm font-semibold text-[#1F3B86]">Analytics</span>
              </div>
            </div>

            <!-- Bottom-left badge -->
            <div
              class="absolute -bottom-3 left-1/3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(23,44,90,0.16)] ring-1 ring-gray-100 animate-float"
            >
              <div class="flex items-center gap-3">

                <div>
                  <p class="text-[12px] font-semibold text-[#1F3B86]">Revenue</p>
                  <p class="mt-0.5 text-[12px] text-gray-500">growth</p>
                </div>
                <div class="grid h-9 w-9 place-items-center rounded-xl text-white">
               

                  <img :src="chatgrow" class="h-10 w-10" alt="">
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Text & floating KPI card -->
        <div class="relative">
          <h2 class="text-3xl font-bold text-[#1F3B86] font-cairo">{{ props.title }}</h2>
          <p class="mt-4 max-w-xl text-[15px] leading-7 text-gray-500 font-Nunito">
            {{ props.body }}
          </p>

          <!-- customers card -->
          <div
            class="absolute -right-2 mt-8 hidden w-[220px] select-none rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(23,44,90,0.14)] ring-1 ring-gray-100 sm:block"
            style="top: 170px"
          >
            <p class="text-[12px] font-semibold text-[#1F3B86]">Our customers</p>
            <div class="mt-3 flex items-center gap-2">
              <!-- avatars -->
              <div class="flex -space-x-2">
                <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=12" alt="" />
                <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=32" alt="" />
                <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=45" alt="" />
              </div>
              <div class="ml-2 flex items-baseline gap-1">
                <span class="rounded-md bg-[#EEF7F1] px-2 py-0.5 text-[11px] font-semibold text-emerald-600">+{{ fmt(props.customers) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile customers card (placed below) -->
      <div
        class="mt-8 w-full rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(23,44,90,0.10)] ring-1 ring-gray-100 sm:hidden"
      >
        <p class="text-[12px] font-semibold text-[#1F3B86]">Our customers</p>
        <div class="mt-3 flex items-center gap-2">
          <div class="flex -space-x-2">
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=12" alt="" />
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=32" alt="" />
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=45" alt="" />
          </div>
          <span class="ml-2 rounded-md bg-[#EEF7F1] px-2 py-0.5 text-[11px] font-semibold text-emerald-600">+{{ fmt(props.customers) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* حركات خفيفة للبادجات */
@keyframes float {
  0%   { transform: translateY(0) }
  50%  { transform: translateY(-4px) }
  100% { transform: translateY(0) }
}
@keyframes floatSlow {
  0%   { transform: translateY(0) }
  50%  { transform: translateY(-2px) }
  100% { transform: translateY(0) }
}
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-float-slow { animation: floatSlow 4.2s ease-in-out infinite; }
</style>
