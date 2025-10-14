<script setup lang="ts">
import { RouterLink } from 'vue-router'
import introImage from '@/assets/icon/Frame 749.png'

interface Props {
  title?: string
  subtitle?: string
  image?: string
  ctaTo?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Manage Your Business Easily And Professionally.',
  subtitle: 'Smart accounting solutions that help you save time and increase your profits.',
  image: introImage,
  ctaTo: '/book',
})
</script>

<template>
  <section class="relative overflow-hidden ">
    <!-- blobs الخفيفة -->
    <div aria-hidden class="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#2A5AC1]/10 blur-3xl"></div>
    <div aria-hidden class="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#67D2D5]/10 blur-3xl"></div>

    <div class="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div class="relative mx-auto max-w-6xl">
        <!-- العناوين الكبيرة حول الصورة -->
        <div class="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 text-[88px] font-Sansation font-extrabold tracking-wide text-[#1F3B86]/90 md:block">
          QAW
        </div>
        <div class="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 text-right text-[88px] font-Sansation font-extrabold tracking-wide text-[#1F3B86]/90 md:block">
          AEM
          <div class="mt-2 text-[44px] font-Sansation font-extrabold text-[#1F3B86]">Mohaseb</div>
        </div>

        <!-- الغلاف + أنيميشن الكشف الأفقي -->
        <div class="relative mx-auto grid max-w-3xl   place-items-center overflow-hidden rounded-[100px]  sm:h-[260px] md:h-[300px]">
          <img
            :src="props.image"
            alt="Hero"
            class="h-full w-f hero-reveal"
          />
        </div>
      </div>

      <!-- النص و CTA -->
      <div class="mx-auto mt-10 max-w-6xl text-center md:text-left">
        <h1 class="text-[28px] font-extrabold leading-tight text-[#1F3B86] sm:text-[34px]">
          {{ props.title }}
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-[18px] leading-8 text-gray-400 md:mx-0">
          {{ props.subtitle }}
        </p>

        <div class="mt-8 flex flex-wrap items-center  justify-center gap-4 md:justify-center">
          <RouterLink
            :to="props.ctaTo"
            class="inline-flex items-center justify-center rounded-full bg-[#1F3B86] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#1F3B86]/20 hover:bg-[#183372] focus:outline-none focus:ring-2 focus:ring-[#1F3B86]/40"
          >
            Book Appointment
          </RouterLink>
          <RouterLink
            :to="props.ctaTo"
            class="grid h-12 w-12 place-items-center rounded-full bg-white text-[#1F3B86] shadow-[0_8px_18px_rgba(0,0,0,0.12)] ring-1 ring-gray-200 hover:bg-gray-50"
            aria-label="Next"
          >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
              <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* أنيميشن يكشف الصورة أفقياً مع الحفاظ على نفس الارتفاع والحجم النهائي من البداية */
@keyframes revealX {
  0%   { clip-path: inset(0 50% 0 50%); opacity: 0; }
  40%  { opacity: 1; }
  100% { clip-path: inset(0 0% 0 0 round 100px); }
}

/* نستخدم نفس نصف قطر الزوايا المستخدم في Tailwind: rounded-[100px] */
.hero-reveal {
  animation: revealX 1.1s ease-out forwards;
  will-change: clip-path, opacity;
}

/* احترام تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  .hero-reveal { animation: none; opacity: 1; clip-path: inset(0 0 0 0 round 100px); }
}
</style>
