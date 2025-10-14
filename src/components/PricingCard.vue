<script setup lang="ts">

import FeatureIcon from '@/assets/icon/Homepackage/Quote mark.svg'
import { useRouter } from 'vue-router';


const router = useRouter()

interface Plan {
  name:string; subtitle:string; price:string; note:string;
  features:string[]; featured?:boolean
}
const props = defineProps<{ plan: Plan; active: boolean }>()
</script>

<template>
  <!-- إذا active => شكل الـFeatured، وإلا الشكل العادي -->
  <article
    class="relative rounded-3xl ring-1 ring-gray-200 shadow-sm transition-all duration-initial animation-duration-1000"
    :class="props.active ? 'shadow-[0_35px_90px_rgba(20,32,70,0.45)]  scale-105' : ''"
  >
    <!-- Header -->
    <div
      class="rounded-t-3xl px-6 pt-5"
      :class="props.active ? 'bg-[#1F3B86] pb-10 text-white' : 'bg-white pb-4 text-[#111927]'"
    >
      <h3 class="text-[18px] font-extrabold">{{ props.plan.name }}</h3>
      <p class="mt-1 text-[13px]" :class="props.active ? 'text-white/85' : 'text-gray-500'">
        {{ props.plan.subtitle }}
      </p>

      <div class="mt-5">
        <div class="text-2xl font-extrabold" :class="props.active ? '' : 'text-[#111927]'">
          {{ props.plan.price }}
        </div>
        <p class="mt-1 text-[12px]" :class="props.active ? 'text-white/80' : 'text-gray-500'">
          {{ props.plan.note }}
        </p>
      </div>
    </div>

    <!-- Capsule body إن كانت مفعّلة -->
    <div
      :class="props.active
        ? '-mt-7 rounded-t-[28px] rounded-b-[28px] bg-white px-6 pt-7 pb-6'
        : 'px-6 pt-6 pb-6 bg-white rounded-b-3xl '"
    >
      <p class="text-[13px] font-semibold text-[#2A5AC1] flex items-center gap-2">
        <img :src="FeatureIcon" class="h-5 w-5" alt="">
        Features:
      </p>
      <ul class="mt-3 space-y-3">
        <li v-for="(f, i) in props.plan.features" :key="i" class="flex items-start gap-2 text-[14px]"
            :class="props.active ? 'text-[#111927]' : 'text-gray-500'">
          <svg viewBox="0 0 20 20" class="mt-0.5 h-4 w-4 text-emerald-500">
            <path fill="currentColor" d="M8.6 13.2 5.4 10l1.4-1.4L8.6 10.4l4.6-4.6L14.6 7.2 8.6 13.2Z"/>
          </svg>
          <span>{{ f }}</span>
        </li>
      </ul>

      <!-- Button -->
      <button
        class="mt-7 w-full rounded-full px-6 py-4 text-[16px] font-semibold transition-colors cursor-pointer"
        :class="props.active
          ? 'bg-[#1F3B86] text-white hover:bg-[#182f77] flex items-center justify-center gap-2'
          : 'border border-[#1F3B86] text-[#1F3B86] hover:bg-[#F4F7FF]'"

          @click="()=>{ router.push('/package_details')}"
      >
        Choose Plan
        <span v-if="props.active" class="grid h-7 w-7 place-items-center rounded-full bg-white text-blue-900">
          <svg viewBox="0 0 20 20" class="h-4 w-4"><path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </button>
    </div>
  </article>
</template>
