<script setup lang="ts">

import imageLogin from '@/assets/imageLogin.png'
import logo from '@/assets/QM-logo.png'

interface Props {
  src?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: imageLogin
})
</script>

<template>
  <div class="relative overflow-hidden rounded-[34px] bg-white shadow-[0_25px_70px_rgba(21,38,84,.10)] ring-1 ring-black/5">
    <img :src="props.src" alt="" class="h-[520px] w-full rounded-[34px] object-cover" />

    <!-- القطعة البيضاء العلوية اليسرى -->
<img :src="logo" class=" -mx-35 -mt-20" alt="">
    <!-- شعار سفلي يمين -->
    <svg class="absolute bottom-0 right-0 h-[190px] w-[220px]" viewBox="0 0 220 190" fill="none">
      <path d="M210 95c0 52-42 95-94 95V95h94Z" fill="#2AD3F8"/>
      <path d="M150 95c0 52-42 95-94 95V95h94Z" fill="#2AD3F8" opacity=".85"/>
      <path d="M210 95c0-52-42-95-94-95v95h94Z" fill="#0E3771"/>
      <path d="M150 95c0-52-42-95-94-95v95h94Z" fill="#0E3771" opacity=".92"/>
    </svg>
  </div>
</template>
