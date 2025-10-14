<script setup lang="ts">
import { onMounted, ref } from 'vue'
import imagemain from '@/assets/icon/HomeVision/backgroundVision.png'
interface Stat {
  value: number        // القيمة الرقمية الأساسية
  suffix?: string      // مثل + أو k أو Million
  label: string        // العنوان المختصر (مثلاً Downloads per day)
  caption?: string     // الوصف الصغير أسفل العنوان
}

interface Props {
  bg?: string
  title?: string
  subtitle?: string
  leftTitle?: string
  leftBody?: string
  stats?: Stat[]
}
const props = withDefaults(defineProps<Props>(), {
  bg: imagemain,
  title: 'Our Vision',
  subtitle:
    'Our services are designed to suit entrepreneurs, startups, and large enterprises alike.',
  leftTitle: 'Our 18 years of achievements',
  leftBody: 'With our super powers we have reached this',
  stats: () => ([
    { value: 10000, suffix: '+', label: '10,000+', caption: 'Downloads per day' },
    { value: 2000000, label: '2 Million', caption: 'Users' },
    { value: 500, suffix: '+', label: '500+', caption: 'Clients' },
    { value: 140, label: '140', caption: 'Countries' },
  ]),
})

/* ====== Count-up logic ====== */
const animatedValues = ref<number[]>(props.stats.map(() => 0))
const observed = ref(false)

function formatLabel(stat: Stat, current: number) {
  // إذا تم تمرير label جاهزة (مثل "2 Million") نعرضها كما هي عند اكتمال العَدّ
  if (stat.label && observed.value) return stat.label
  // غير ذلك: نكتب رقم متزايد + suffix (مثل +)
  const base = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(current)
  return stat.suffix ? `${base}${stat.suffix}` : base
}

function animateCount() {
  if (observed.value) return
  observed.value = true
  props.stats.forEach((s, i) => {
    const target = s.value
    const duration = 1200 + i * 200 // فرق بسيط بين العناصر
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      animatedValues.value[i] = Math.round(target * eased)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
}

onMounted(() => {
  const el = document.getElementById('vision-stats-root')
  if (!el) return
  const io = new IntersectionObserver(
    ([entry]) => entry.isIntersecting && (animateCount(), io.disconnect()),
    { threshold: 0.25 }
  )
  io.observe(el)
})
</script>

<template>
  <section id="vision-stats-root" class="relative">
    <!-- Background image + blur + overlay -->
    <div class="absolute inset-0 ">
      <img :src="props.bg" alt="" class="h-full w-full object-cover scale-100  blur-xs  " />
      <div class="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/35"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-26">
      <!-- Title + subtitle centered -->
      <div class="text-center text-white">
        <h2 class="text-2xl font-bold sm:text-[38px] font-Cairo">{{ props.title }}</h2>
        <p class=" font-Nunito mx-auto mt-2 max-w-3xl text-sm text-white/90 sm:text-[15px]">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- Content -->
      <div class="mt-8 grid items-start gap-10 text-white md:grid-cols-12 ">
        <!-- Left block -->
        <div class="md:col-span-5">
          <h3 class="text-2xl font-bold leading-snug sm:text-[26px] font-Cairo">
            {{ props.leftTitle }}
          </h3>
          <p class="mt-3 text-sm text-white/85 font-Nunito">
            {{ props.leftBody }}
          </p>
        </div>

        <!-- Stats -->
        <div class="md:col-span-7">
          <div class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <!-- each stat -->
            <div
              v-for="(s, i) in props.stats"
              :key="i"
              class="flex items-start gap-3"
            >
              <!-- tiny turquoise icon -->
              <div class="mt-1 grid h-6 w-6 place-items-center rounded-md bg-gradient-to-b from-cyan-400 to-cyan-600 shadow-sm">
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-white">
                  <path fill="currentColor" d="M7 17h2V7H7v10Zm4 0h2V3h-2v14Zm4 0h2V11h-2v6Z"/>
                </svg>
              </div>

              <div>
                <div class="text-[30px]  leading-6 font-Cairo">
                  {{ formatLabel(s, animatedValues[i]) }}
                </div>
                <p class="text-xs text-white/80 font-Nunito mt-1">
                  {{ s.caption }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* لا حاجة لستايل إضافي — Tailwind يغطي كل شيء */
</style>
