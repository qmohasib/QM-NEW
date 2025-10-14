<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthImageBlock from '@/components/Auth/AuthImageBlock.vue'
import SignInCard from '@/components/Auth/SignInCard.vue'
import SignUpCard from '@/components/Auth/SignUpCard.vue'

const route = useRoute()
const router = useRouter()

const mode = computed<'signin'|'signup'>(() => {
  const m = String(route.query.mode || 'signin')
  return m === 'signup' ? 'signup' : 'signin'
})


function onSwitch(nextMode: 'signin'|'signup') {
  router.replace({ query: { mode: nextMode } })  // هذا يُشغّل نفس أنيميشن التبديل
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#F6F8FC]">
    <!-- خط زخرفي أعلى يمين -->
    <svg class="pointer-events-none absolute right-0 top-0 hidden h-[220px] w-[460px] md:block" viewBox="0 0 460 220" fill="none">
      <path d="M20 210C150 110 260 70 450 20" stroke="#7FB7FF" stroke-width="2" stroke-linecap="round"/>
    </svg>

    <div class="mx-auto max-w-7xl px-4 py-10">
      <div class="grid items-center gap-10 lg:grid-cols-2">
      <!-- العمود 1 (الكارد) -->
<div :class="mode==='signin' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'">
  <Transition :name="mode==='signin' ? 'card-from-left' : 'card-from-right'" mode="out-in">
    <component :is="mode==='signin' ? SignInCard : SignUpCard" :key="mode" @switch="onSwitch" />
  </Transition>
</div>

<!-- العمود 2 (الصورة) -->
<div :class="mode==='signin' ? 'order-1 lg:order-2' : 'order-2 lg:order-1'">
  <Transition :name="mode==='signin' ? 'img-from-right' : 'img-from-left'" mode="out-in">
    <AuthImageBlock :key="mode" />
  </Transition>
</div>
      </div>

     
    </div>
  </section>
</template>

<style scoped>
/* ====== حركات متعاكسة للبطاقة والصورة ====== */
.card-from-left-enter-from,
.img-from-right-enter-from { opacity: 0; transform: translateX(-40px); }
.card-from-left-leave-to   { opacity: 0; transform: translateX( 40px); }

.card-from-right-enter-from,
.img-from-left-enter-from  { opacity: 0; transform: translateX( 40px); }
.card-from-right-leave-to  { opacity: 0; transform: translateX(-40px); }

/* الصورة عكس اتجاه البطاقة */
.img-from-right-enter-from { transform: translateX(40px); }
.img-from-left-enter-from  { transform: translateX(-40px); }
.img-from-right-leave-to   { opacity: 0; transform: translateX(-40px); }
.img-from-left-leave-to    { opacity: 0; transform: translateX(40px); }

.card-from-left-enter-active,
.card-from-left-leave-active,
.card-from-right-enter-active,
.card-from-right-leave-active,
.img-from-right-enter-active,
.img-from-right-leave-active,
.img-from-left-enter-active,
.img-from-left-leave-active {
  transition: opacity .45s ease, transform .45s ease;
}
</style>
