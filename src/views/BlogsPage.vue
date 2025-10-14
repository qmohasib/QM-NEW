<script setup lang="ts">
import BreadcrumbHeader from '@/components/Auth/BreadcrumbHeader.vue'
import Footer from '@/components/Footer/Footer.vue'
import { ref, computed } from 'vue'

type Post = {
  id: number
  title: string
  category: 'Business' | 'Finance' | 'Management'
  date: string // ISO or label
  image: string
}

const categories = ['All', 'Business', 'Finance', 'Management'] as const
const selectedCategory = ref<typeof categories[number]>('All')

const allPosts = ref<Post[]>([
  {
    id: 1,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Finance',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Management',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Finance',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Management',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1533044305367-5f18f4e6f716?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'How to choose the right accounting package for your startup?',
    category: 'Business',
    date: 'Oct 28, 2025',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  },
])

/* Featured (يسار) */
const featured = computed(() => allPosts.value[0])

/* فلترة + ترقيم صفحات */
const page = ref(1)
const pageSize = 6

const filtered = computed(() =>
  selectedCategory.value === 'All'
    ? allPosts.value
    : allPosts.value.filter((p) => p.category === selectedCategory.value)
)

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const paginated = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

function setCategory(cat: typeof categories[number]) {
  selectedCategory.value = cat
  page.value = 1
}

function prev() {
  if (page.value > 1) page.value--
}
function next() {
  if (page.value < totalPages.value) page.value++
}
</script>

<template>
  <section class="bg-white">
    <!-- Breadcrumb + title -->
    <BreadcrumbHeader :items="[
      { label: 'Home', to: '/', icon: true },
      { label: 'Blogs' }
    ]" title="Blogs" bg-class="bg-[#F6F9FF]" border-class="border-gray-100" title-align="center"
      :uppercase-title="false" separator="›" />

    <div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <!-- Hero row -->
      <div class="grid gap-6 lg:grid-cols-3">
        <!-- Featured card (col-span-2) -->
        <article class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:col-span-2 scale-105">
          <img :src="featured.image" class="h-40 w-full object-cover" alt="" />
          <div class="p-5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center rounded-full bg-blue-900 px-2.5 py-1 text-[11px] font-semibold text-white">The
                  Best Blog</span>
              </div>
              <a href="#" class="text-xs font-semibold text-blue-900">Read More</a>
            </div>
            <h3 class="mt-3 text-[18px] font-semibold text-gray-900">
              {{ featured.title }}
            </h3>
            <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>Business</span>
              <span>Oct 28,2025</span>
            </div>
          </div>

          
        </article>

        <!-- Newsletter card -->
        <aside class="rounded-2xl bg-[#163B8E] p-5 text-white shadow-sm scale-95">
          <h3 class="text-lg font-semibold">Subscribe to our news letter</h3>
          <p class="mt-2 text-sm text-white/85">
            Enter your email to get the latest articles.
          </p>
          <div class="mt-4 flex items-center gap-2">
            <input type="email" placeholder="Enter Your email"
              class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 outline-none focus:bg-white/20" />
            <button class="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#163B8E]">
              Subscribe
            </button>
          </div>
        </aside>
      </div>

      <!-- Latest articles title -->
      <div  class=" flex justify-between items-center">
      
      <div class="mt-10 flex items-center gap-3">
        <span class="h-10 w-1 rounded bg-[#59CBEF]"></span>
        <h2 class="text-xl font-bold text-blue-900 font-Cairo">Latest articles</h2>
      </div>

      <!-- Filters -->
      <div class="mt-4 flex flex-wrap items-center gap-2">
        <button v-for="cat in categories" :key="cat" @click="setCategory(cat)"
          class="rounded-full border px-4 py-1.5 text-xs font-semibold transition" :class="selectedCategory === cat
              ? 'border-transparent bg-blue-900 text-white'
              : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            ">
          {{ cat }}
        </button>
      </div>
      </div>

      <!-- Grid of posts -->
      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="p in paginated" :key="p.id"
          class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img :src="p.image" class="h-40 w-full object-cover" alt="" />
          <div class="p-4">
            <h3 class="line-clamp-2 text-[17px] font-semibold text-gray-900">
              {{ p.title }}
            </h3>
            <div class="mt-3 flex items-center justify-between">
              <span class="rounded-full bg-[#1E3A8A] px-2.5 py-1 text-[11px] font-semibold text-white">{{ p.category
                }}</span>
              <span class="text-xs text-gray-500">{{ p.date }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div class="mt-8 flex items-center justify-center gap-3">
        <button @click="prev" :disabled="page === 1"
          class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 disabled:cursor-not-allowed disabled:opacity-50">
          Previous
        </button>
        <button @click="next" :disabled="page === totalPages"
          class="rounded-full bg-[#67D2D5] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
/* كله عبر Tailwind. استخدمت line-clamp لو متاح (أضِف plugin إن احتجته). */
</style>
