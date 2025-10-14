<script setup lang="ts">
import Footer from '@/components/Footer/Footer.vue'
import { computed } from 'vue'

type Post = {
  id: number
  title: string
  category: string
  date: string        // ISO أو label
  coverImage: string
  contentHtml: string // المحتوى سيُعرض عبر v-html
}

type Related = {
  id: number
  title: string
  date: string
  category: string
  image: string
}

// ====== Props (مرّرها من API أو Router) ======
const props = withDefaults(defineProps<{
  post?: Post
  related?: Related[]
}>(), {
  post: () => ({
    id: 1,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: '2025-10-28',
    coverImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    // ⬇️ مثال: هذا النص مجرد ديمو — في مشروعك سيأتي HTML من الـ CMS/الـ API
    contentHtml: `
      <p>Managing accounts and financial obligations is one of the biggest challenges facing startups. With limited resources at the start of a project, choosing the right accounting becomes a pivotal step that helps you manage expenses, adhere to regulations, and make more informed financial decisions.</p>

      <h2>Assess the size of your financial activity</h2>
      <p>Before choosing any package, determine your average monthly expenses.</p>
      <p>Startups often start with modest operating expenses (10,000–30,000 SAR per month).</p>
      <p>If your expenses are very limited, start with a basic package that covers only bookkeeping and electronic invoicing.</p>

      <h2>Know Your Current Needs</h2>
      <ul>
        <li>Do you only need to record invoices and expenses?</li>
        <li>Or do you also need to prepare periodic financial reports and tax returns?</li>
        <li>The broader the package, the higher the investment but the lower the accounting risk.</li>
      </ul>

      <figure>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" alt="Analytics" />
      </figure>

      <p>Managing accounts and financial obligations is one of the biggest challenges facing startups. With limited resources at the start of a project, choosing the right accounting becomes a pivotal step that helps you manage expenses, adhere to regulations, and make more informed financial decisions.</p>

      <p>Managing accounts and financial obligations is one of the biggest challenges facing startups. With limited resources at the start of a project, choosing the right accounting becomes a pivotal step that helps you manage expenses, adhere to regulations, and make more informed financial decisions.</p>
    `,
  }),
  related: () => ([
    {
      id: 2,
      title: 'How to choose the right accounting package for your startup?',
      date: 'Oct28,2025',
      category: 'Business',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'How to choose the right accounting package for your startup?',
      date: 'Oct28,2025',
      category: 'Business',
      image:
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'How to choose the right accounting package for your startup?',
      date: 'Oct28,2025',
      category: 'Business',
      image:
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop',
    },
  ]),
})

const dateLabel = computed(() =>
  // صيغة قريبة من اللقطة (Oct28,2025)
  new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' })
    .format(new Date(props.post.date))
    .replace(' ', '')
)
</script>

<template>
  <section class="bg-white">
    <!-- Breadcrumb bar -->
    <div class="border-b border-gray-100 bg-[#F6F9FF]">
      <div class="mx-auto max-w-5xl px-4 py-4">
        <nav class="text-xs text-gray-500">
          <span class="inline-flex items-center gap-1">
            <svg viewBox="0 0 20 20" class="h-3.5 w-3.5 text-gray-400">
              <path fill="currentColor" d="M10 2 2 8v10h5v-5h6v5h5V8z" />
            </svg>
            Home
          </span>
          <span class="mx-2 text-gray-300">›</span>
          <span class="text-[#2A5AC1]">Blogs</span>
        </nav>
      </div>
    </div>

    <div class="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <!-- Category + date pills -->
      <div class="flex items-center justify-center gap-3">
        <span class="rounded-full bg-[#163B8E] px-3 py-1 text-xs font-semibold text-white">
          {{ post.category }}
        </span>
        <span class="text-xs text-gray-500">{{ dateLabel }}</span>
      </div>

      <!-- Title -->
      <h1 class="mx-auto mt-3 max-w-3xl text-center text-2xl font-extrabold text-gray-900 sm:text-[28px]">
        {{ post.title }}
      </h1>

      <!-- Hero image + الديكور الأزرق -->
      <div class="relative mt-6">
        <div class="absolute left-0 right-0 top-1/2 -z-10 h-16 -translate-y-1/2 bg-[#1f3b86]"></div>
        <img
          :src="post.coverImage"
          alt=""
          class="mx-auto block w-full max-w-4xl rounded-2xl object-cover"
        />
      </div>

      <!-- Article content (v-html) -->
      <article class="mx-auto mt-10 max-w-3xl">
        <!-- ⚠️ المحتوى يُعرض ديناميكيًا -->
        <div class="article-content" v-html="post.contentHtml" />
      </article>

      <!-- Latest articles -->
      <div class="mx-auto mt-14 max-w-5xl">
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="h-1.5 w-10 rounded bg-[#2A5AC1]"></span>
            <h2 class="text-xl font-extrabold text-[#163B8E]">Latest articles</h2>
          </div>

          <div class="hidden items-center gap-2 sm:flex">
            <button class="grid h-8 w-8 place-items-center rounded-full border border-gray-300 bg-white">
              <svg viewBox="0 0 20 20" class="h-4 w-4 text-gray-700">
                <path d="M12 5l-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="grid h-8 w-8 place-items-center rounded-full border border-gray-300 bg-white">
              <svg viewBox="0 0 20 20" class="h-4 w-4 text-gray-700">
                <path d="M8 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="r in related"
            :key="r.id"
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <img :src="r.image" class="h-40 w-full object-cover" alt="" />
            <div class="p-4">
              <h3 class="line-clamp-2 text-[16px] font-semibold text-gray-900">
                {{ r.title }}
              </h3>
              <div class="mt-3 flex items-center justify-between">
                <span class="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">{{ r.category }}</span>
                <span class="text-xs text-gray-500">{{ r.date }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
/* ====== تنسيق العناصر داخل v-html (بدون typography plugin) ======
   نستخدم :deep حتى تعمل على عناصر الـ HTML المحقونة.
*/
.article-content :deep(h2) {
  margin-top: 2.25rem; /* mt-9 */
  margin-bottom: 1rem; /* mb-4 */
  font-size: 1.5rem;   /* text-2xl */
  line-height: 1.33;
  font-weight: 800;    /* font-extrabold */
  color: #163B8E;      /* أزرق العناوين */
}
.article-content :deep(p) {
  margin-top: 1rem;    /* mt-4 */
  margin-bottom: 1rem; /* mb-4 */
  color: #374151;      /* text-gray-700 */
  line-height: 1.75;   /* leading-7 */
  font-size: 1rem;     /* text-base */
}
.article-content :deep(ul) {
  margin: 0.75rem 0 1rem 1.25rem;
  list-style: disc;
  color: #374151;
}
.article-content :deep(li) {
  margin: 0.4rem 0;
}
.article-content :deep(figure),
.article-content :deep(img) {
  display: block;
  margin: 1.25rem auto;      /* my-5 */
  border-radius: 0.75rem;    /* rounded-xl */
  max-width: 100%;
  height: auto;
}
.article-content :deep(blockquote) {
  border-left: 4px solid #2A5AC1;
  padding-left: 1rem;
  color: #374151;
  margin: 1rem 0;
}
/* حاشية للصورة الكبيرة في الأعلى */
</style>
