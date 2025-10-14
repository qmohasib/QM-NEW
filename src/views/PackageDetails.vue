<script setup lang="ts">
import Footer from '@/components/Footer/Footer.vue';
import { ref } from 'vue'

/* بيانات الخطة (يمكنك تمريرها من API أو props لاحقًا) */
const plan = {
  name: 'Premium Package',
  subtitle: 'Best suited for large companies',
  description:
    "This Package is specifically designed for medium-sized businesses that require accurate management of their accounting books and comprehensive monitoring of their financial reports. The service includes bookkeeping, preparation and issuance of financial statements, tax returns.",
  priceLabel: '€1,000 riyals',
  cta: 'Get Started',
  features: [
    '24/7 technical support',
    'Unlimited users',
    'Customizable interface and reports',
    'Integration with external systems (API)',
    'Integration with external systems (API)',
  ],
}

/* إحصاءات */
const stats = [
  { icon: 'building', value: '10,000+', label: 'Companies', sub: 'are using this plan' },
  { icon: 'user', value: '5,000+', label: 'Subscriptions', sub: 'In the past 6 month' },
  { icon: 'star', value: '92%', label: 'of users rated', sub: 'this plan as excellent' },
]

/* أسئلة متكررة */
type Faq = { q: string; a: string }
const faqs = ref<Faq[]>([
  {
    q: "What's your pricing model?",
    a: 'Join hundreds of companies who have chosen the ease and clarity of managing their accounts. Get comprehensive accounting support to help you focus on growing your business.',
  },
  { q: 'What platforms does your Unified API integrate with?', a: 'We integrate with common ERP/accounting suites and can extend via webhooks.' },
  { q: 'Is there a free trial? Can I try out the product before I buy?', a: 'Yes, we offer a limited trial so you can evaluate the essential workflows.' },
  { q: "What's different about Rutter?", a: 'Cleaner UX, robust reporting, and localized compliance tools.' },
])
const open = ref<number>(0)
const toggle = (i: number) => (open.value = open.value === i ? -1 : i)
</script>

<template>
  <section class="bg-white">
    <!-- HERO: وصف الخطة + كارت السعر -->
    <div class="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div class="grid gap-10 lg:grid-cols-[1fr_360px]">
        <!-- Left: النص -->
        <div>
          <div class="flex items-center gap-3">
            <span class="h-10 w-1 rounded bg-[#59CBEF]"></span>
            <h1 class="text-3xl font-extrabold text-[#1F3B86] font-Cairo">{{ plan.name }}</h1>
          </div>

          <h2 class="mt-2 mx-5 text-[#59CBEF] font-semibold font-Nunito"> {{ plan.subtitle }} </h2>

          <p class="mt-4 max-w-2xl text-[15px] leading-7 text-gray-600 font-Nunito">
            {{ plan.description }}
          </p>

          <h3 class="mt-6 text-[17px] font-bold text-gray-900">what’s included?</h3>

          <ul class="mt-4 space-y-3">
            <li v-for="(f, i) in plan.features" :key="i" class="flex items-start gap-3 text-gray-700">
              <svg viewBox="0 0 20 20" class="mt-0.5 h-5 w-5 text-emerald-500">
                <path fill="currentColor" d="M8.6 13.2 5.4 10l1.4-1.4L8.6 10.4l4.6-4.6L14.6 7.2 8.6 13.2Z"/>
              </svg>
              <span class="text-[15px]">{{ f }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: كارت السعر -->
        <aside class="rounded-2xl bg-[#1E3C8E] p-6 text-white shadow-md">
          <h3 class="text-xl font-Cairo font-bold">Get Your Plan Today</h3>
          <p class="mt-2 text-sm text-white/90 font-Nunito">
            Join the hundreds of companies who have chosen the ease and clarity of managing their accounts.
          </p>

          <div class="mt-6 text-2xl ">
            {{ plan.priceLabel }}
          </div>

          <button
            class=" mt-5 inline-flex w-full   justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3C8E] hover:bg-white/90"
          >
            {{ plan.cta }}
            <svg viewBox="0 0 20 20" class="h-4 w-4">
              <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </aside>
      </div>
    </div>

    <!-- STATS BAR -->
    <div class="border-y border-gray-100 bg-[#F6F9FF]">
      <div class="mx-auto max-w-6xl px-4 py-10">
        <div class="grid gap-8 sm:grid-cols-3">
          <div v-for="(s, i) in stats" :key="i" class="flex items-start gap-3">
            <span class="grid h-8 w-8 place-items-center rounded-full bg-white text-[#1E3C8E] shadow">
              <!-- icons -->
              <svg v-if="s.icon==='building'" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M3 21V3h8v18H3Zm12 0V7h6v14h-6ZM7 7h2v2H7V7Zm0 4h2v2H7v-2Zm0 4h2v2H7v-2Zm8-6h2v2h-2V9Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z"/></svg>
              <svg v-else-if="s.icon==='user'" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/></svg>
              <svg v-else viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z"/></svg>
            </span>
            <div>
              <p class="text-[22px] font-extrabold text-[#1E3C8E]">{{ s.value }}</p>
              <p class="text-sm font-semibold text-[#1E3C8E]">{{ s.label }}</p>
              <p class="text-xs text-gray-500">{{ s.sub }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div class="grid gap-10 lg:grid-cols-2">
        <!-- Left title block -->
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">
            Have questions?<br />We've got answers.
          </h2>
        </div>

        <!-- Right accordion -->
        <div>
          <div
            v-for="(f, i) in faqs"
            :key="i"
            class="border-b border-gray-200 py-4"
          >
            <button
              class="flex w-full items-center justify-between gap-4 text-left"
              @click="toggle(i)"
              :aria-expanded="open === i"
            >
              <span class="text-[17px] font-medium text-gray-800">{{ f.q }}</span>
              <span class="grid h-6 w-6 place-items-center rounded-full border border-gray-300 text-gray-700">
                <!-- minus/plus -->
                <svg v-if="open===i" viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path d="M4 10h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg v-else viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
            </button>

            <div v-show="open===i" class="mt-3 text-[15px] leading-7 text-gray-600">
              {{ f.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
/* كل شيء عبر Tailwind */
</style>
