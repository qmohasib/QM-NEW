<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, computed, nextTick } from 'vue'
import oyodo from '@/assets/icon/partner/oyodo.png'
import wafek from '@/assets/icon/partner/wafek.png'
import kfu from '@/assets/icon/partner/kfu.png'
import comminaction from '@/assets/icon/partner/comminecation.png'
import zoho from '@/assets/icon/partner/zoho.png'
import threeCircle from '@/assets/icon/partner/three circle.png'

type Logo = { src: string; alt?: string; label?: string }

interface Props {
  titleLeft?: string
  subtitleLeft?: string
  primaryCtaTo?: string
  sideLogos?: Logo[]
  innerCards?: Logo[]
  autoplayMs?: number
}
const props = withDefaults(defineProps<Props>(), {
  titleLeft: 'Our Partners\nin Success',
  subtitleLeft:
    'We are proud to partner with government agencies, leading companies, and accounting service providers who support our journey.',
  primaryCtaTo: '/',
  autoplayMs: 2600,
  sideLogos: () => [
    { src: wafek, alt: 'Vision 2030' },
    { src: kfu, alt: 'KFU' },
    { src: oyodo, alt: 'OOYOD' },
  ],
  innerCards: () => [
    { src: zoho, alt: 'Zoho', label: 'Books' },
    { src: wafek, alt: 'Wafeq', label: 'wafeq' },
    { src:comminaction, alt: 'Xero', label: 'Xero' },
    { src: kfu, alt: 'QuickBooks', label: 'QuickBooks' },
  ],
})

/* ===== Slider (simple, no libs) ===== */
const topIndex = ref(0)
const bottomIndex = ref(1)
const topTrack = computed(() => props.innerCards.filter((_, i) => i % 2 === 0))
const bottomTrack = computed(() => props.innerCards.filter((_, i) => i % 2 === 1))
let timer: number | null = null

function nextSlides() {
  topIndex.value = (topIndex.value + 1) % Math.max(topTrack.value.length, 1)
  bottomIndex.value = (bottomIndex.value + 1) % Math.max(bottomTrack.value.length, 1)
}
function start() {
  stop()
  timer = window.setInterval(nextSlides, props.autoplayMs)
}
function stop() {
  if (timer !== null) { clearInterval(timer); timer = null }
}

/* ===== Reveal on Scroll ===== */
const inView = ref(false)
onMounted(() => {
  const root = document.getElementById('partners-root')
  if (!root) return
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      inView.value = true
      io.disconnect()
      start()
    }
  }, { threshold: 0.25 })
  io.observe(root)
})
onBeforeUnmount(stop)


const circleEl = ref<HTMLElement | null>(null)
const bob = ref(0)               // قيمة الإزاحة العمودية بالبكسل
const amplitude = 100             // مدى النطّة (px) — عدّلها كما تريد
let raf = 0

function updateBob() {
  if (!circleEl.value) return
  const rect = circleEl.value.getBoundingClientRect()
  const vh = window.innerHeight

  // تقدّم ظهور الدائرة داخل الشاشة (0 خارج - 1 داخل بالكامل تقريبًا)
  const visible = Math.min(1, Math.max(0, 1 - Math.abs(rect.top + rect.height/2 - vh/2) / (vh/2)))
  // نقدّمها أيضاً كموقع نسبي داخل القسم لنعمل "نطّة" دورية
  const section = document.getElementById('partners-root')
  let progress = 0
  if (section) {
    const sRect = section.getBoundingClientRect()
    const total = sRect.height + vh
    const center = Math.min(Math.max(vh - sRect.top, 0), total)
    progress = center / total // 0..1
  }

  // منحنى نطّة لطيف: جيب (sin) مضروب بسعة + يضعف عندما تقل الرؤية
  bob.value = Math.sin(progress * Math.PI * 2) * amplitude * visible
}

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(updateBob)
}

onMounted(async () => {
  await nextTick()
  updateBob()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <section id="partners-root" class="relative overflow-hidden bg-[#F6F8FC]">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <!-- LEFT -->
        <div :class="['transform transition-all duration-700',
                     inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']">
          <h2 class="whitespace-pre-line text-[34px] font-bold leading-tight text-[#1F2E69] font-Cairo">
            {{ props.titleLeft }}
          </h2>
          <p class="mt-4 max-w-md text-[15px] leading-7 text-gray-500 font-Nunito">
            {{ props.subtitleLeft }}
          </p>

          <div class="mt-8 flex items-center gap-4">
            <RouterLink
              :to="props.primaryCtaTo"
              class="inline-flex items-center rounded-full bg-[#1F3B86] px-6 py-3 text-[15px] font-Cairo text-white shadow hover:bg-[#182f77] focus:outline-none focus:ring-2 focus:ring-[#1F3B86]/30"
            >
              Become a partner
            </RouterLink>
            <RouterLink
              :to="props.primaryCtaTo"
              class="grid h-10 w-10 place-items-center rounded-full bg-white text-[#1F3B86] shadow-md ring-1 ring-black/5 hover:bg-gray-50"
              aria-label="More"
            >
              <svg viewBox="0 0 20 20" class="h-4 w-4">
                <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>

          <!-- side logos -->
          <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <img v-for="(l, i) in props.sideLogos" :key="i" :src="l.src" :alt="l.alt || 'logo'"
                 :class="['h-8 w-auto object-contain opacity-0 transform transition-all duration-700',
                          inView ? 'opacity-90 translate-y-0' : 'translate-y-4']"
                 :style="{ transitionDelay: `${0.15 + i * 0.08}s` }"
            />
          </div>
        </div>

        <!-- RIGHT Circle -->
        <div class="relative mx-auto w-full max-w-[560px]">
          <!-- rings -->
          <svg viewBox="0 0 600 600"
               :class="['absolute -inset-x-10 -top-10 hidden h-[620px] w-[620px] md:block transform transition-all duration-700',
                        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95']"
               fill="none">
            <circle cx="330" cy="300" r="270" stroke="#2A5AC1" stroke-opacity=".18" stroke-width="2"/>
            <circle cx="330" cy="300" r="230" stroke="#2A5AC1" stroke-opacity=".18" stroke-width="2"/>
            <circle cx="330" cy="300" r="190" stroke="#2A5AC1" stroke-opacity=".18" stroke-width="2" stroke-dasharray="6 10"/>
          </svg>


          <!-- blue circle -->
           <div
      ref="circleEl"
      class="relative mx-auto aspect-square w-[92%] rounded-full bg-[radial-gradient(70%_70%_at_30%_30%,#1E4DFF_0%,#0E2AB6_35%,#0D1E7A_80%)] shadow-[0_40px_120px_rgba(29,53,132,0.40)] ring-1 ring-[#1E4DFF]/10 will-change-transform transition-transform duration-150"
      :style="{ transform: `translateY(${bob}px)` }"
    >
            <div class="absolute inset-4 rounded-full bg-white/5 backdrop-blur-[1px]"></div>

            <!-- TOP track -->
            <div class="absolute left-1/2 top-1/3 w-[180px] -translate-x-1/2">
              <transition-group name="fade" tag="div" class="relative h-[64px]">
                <div :key="topIndex"
                     class="absolute inset-0 flex items-center justify-center">
                  <div class="rounded-[14px] bg-white px-4 py-3 shadow-[0_25px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                    <div class="flex items-center gap-3">
                      <img :src="topTrack[topIndex]?.src" :alt="topTrack[topIndex]?.alt || 'partner'"
                           class="h-10 w-auto object-contain"/>
                      <span class="text-[13px] font-semibold text-gray-700">
                        {{ topTrack[topIndex]?.label || topTrack[topIndex]?.alt }}
                      </span>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>

            <!-- BOTTOM track -->
            <div class="absolute left-1/2 top-[58%] w-[200px] -translate-x-1/2">
              <transition-group name="fade" tag="div" class="relative h-[64px]">
                <div :key="bottomIndex"
                     class="absolute inset-0 flex items-center justify-center">
                  <div class="rounded-[14px] bg-white px-4 py-3 shadow-[0_25px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                    <div class="flex items-center gap-3">
                      <img :src="bottomTrack[bottomIndex]?.src" :alt="bottomTrack[bottomIndex]?.alt || 'partner'"
                           class="h-10 w-auto object-contain"/>
                      <span class="text-[13px] font-semibold text-gray-700">
                        {{ bottomTrack[bottomIndex]?.label || bottomTrack[bottomIndex]?.alt }}
                      </span>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>

          <!-- brand -->
          <div :class="['mt-5 text-center text-[22px] font-extrabold tracking-wide text-[#1F2E69] opacity-0 transition-opacity duration-700',
                        inView ? 'opacity-80' : '']">
            OOYOD
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transition-group Fade */
.fade-enter-active, .fade-leave-active { transition: opacity .5s ease, transform .5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(6px); }

@media (prefers-reduced-motion: reduce) {
  [style*="translateY"] { transform: none !important; transition: 3s; }
}
</style>
