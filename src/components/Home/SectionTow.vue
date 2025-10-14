<script setup lang="ts">
import { computed } from 'vue'

type Logo = { src: string; alt?: string; href?: string; width?: number; height?: number }

const props = withDefaults(defineProps<{
  logos?: Logo[]
  speed?: number         // مدة الدورة بالثواني (كلما زادت كان أبطأ)
  gapPx?: number         // المسافة بين الشعارات
}>(), {
  speed: 22,
  gapPx: 64,
  logos: () => [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Airbnb_Logo_Bélo.svg', alt: 'Airbnb' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/HubSpot_Logo.svg', alt: 'HubSpot' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_Spark.svg', alt: 'Walmart' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/FedEx_Express.svg', alt: 'FedEx' },
  ],
})

/* لماركيه سلس نعرض القائمة مرتين على التوالي */
const duplicated = computed(() => [...props.logos, ...props.logos])
</script>

<template>
  <section class="relative bg-[#F6F9FF]">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <div
        class="group relative overflow-hidden"
        :style="{
          '--gap': `${gapPx}px`,
          '--duration': `${speed}s`
        } as any"
      >
        <!-- تدرّج تلاشي على الجوانب -->
        <div class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F6F9FF] to-transparent"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F6F9FF] to-transparent"></div>

        <!-- مسار الماركيه -->
        <div class="flex w-max animate-marquee items-center"
             :class="'[animation-duration:var(--duration)] group-hover:[animation-play-state:paused]'">
          <template v-for="(logo, i) in duplicated" :key="i">
            <a v-if="logo.href" :href="logo.href" class="mx-[var(--gap)] block opacity-80 transition hover:opacity-100" target="_blank" rel="noopener">
              <img :src="logo.src" :alt="logo.alt || 'logo'" class="h-9 sm:h-10 object-contain" loading="lazy" />
            </a>
            <div v-else class="mx-[var(--gap)] opacity-80 transition hover:opacity-100">
              <img :src="logo.src" :alt="logo.alt || 'logo'" class="h-9 sm:h-10 object-contain" loading="lazy" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* حركة ماركيه لانهائية */
@keyframes marquee {
  to { transform: translateX(-50%); }
}

.animate-marquee {
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 22s; /* تُستبدل بقيمة CSS var */
  will-change: transform;
}

/* احترام تفضيل تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
</style>
