<script setup lang="ts">

import blog1 from '@/assets/icon/blog/blog1.png'

type Blog = {
  id: number
  tag: string
  title: string
  image: string
  href?: string
}

// بيانات تجريبية (بدّل الصور بالنطاق عندك)
const featuredText: Blog = {
  id: 1,
  tag: 'BEST PRACTICES',
  title:
    'In design active temper be uneasy. Thirty for remove plenty regard.',
  image: blog1,
}

const featuredImage: Blog = {
  id: 2,
  tag: 'BEST PRACTICES',
  title: '—', // هذه بطاقة صورة فقط
  image:blog1,
}

const gridCards: Blog[] = [
  {
    id: 3,
    tag: 'BEST PRACTICES',
    title: 'Partiality on or continuing particular principles as.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    tag: 'BEST PRACTICES',
    title: 'Village did removed enjoyed explain Village did removed enjoyed explain',
    image: blog1,
  },
  {
    id: 5,
    tag: 'BEST PRACTICES',
    title:
      'Wise busy past both park when an ye no. Nay likely her length.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
]
</script>

<template>
  <section class="relative bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <!-- Header -->
      <div class="flex items-start justify-between gap-4">
        <div>
          <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl font-Cairo">
            Recent Blogs
          </h2>
          <p class="mt-2 max-w-2xl text-gray-500 font-Nunito">
            Explore the latest articles and tips to help you grow your
            business and make better financial decisions.
          </p>
        </div>

        <!-- Nav buttons (شكل فقط) -->
        <div class="mt-1 hidden gap-2 sm:flex">
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
            aria-label="Previous"
          >
            <!-- left -->
            <svg viewBox="0 0 20 20" class="h-4 w-4">
              <path
                d="M12 5l-5 5 5 5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
            aria-label="Next"
          >
            <!-- right -->
            <svg viewBox="0 0 20 20" class="h-4 w-4">
              <path
                d="M8 5l5 5-5 5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Grid -->
      <div class="mt-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
        <!-- Featured text card (يسار) -->
        <article
          class="order-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-7"
        >
          <p
            class="text-[11px] font-extrabold tracking-widest text-blue-900 font-Cairo"
          >
            {{ featuredText.tag }}
          </p>
          <h3
            class="mt-3 text-xl font-semibold leading-7 text-gray-900 sm:text-2xl font-Cairo"
          >
            {{ featuredText.title }}
          </h3>

          <button
            class="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800"
          >
            Read More
            <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
              <path
                d="M7 4l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </article>

        <!-- Featured image (يمين) -->
        <article
          class="order-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-5"
        >
          <img
            :src="featuredImage.image"
            alt=""
            class="h-full w-full object-cover"
          />
        </article>

        <!-- 3 بطاقات تحت -->
        <article
          v-for="(card, i) in gridCards"
          :key="card.id"
          class="order-3 rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-4"
        >
          <div class="p-5 h-36">
            <p
              class="text-[11px] font-extrabold tracking-widest text-blue-900"
            >
              {{ card.tag }}
            </p>
            <h3 class="mt-2 text-[17px] font-semibold text-gray-900">
              {{ card.title }}
            </h3>

            <a
              href="#"
              class="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:underline"
            >
              Read More
              <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                <path
                  d="M7 4l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div class="mt-3 overflow-hidden rounded-b-xl">
            <img :src="card.image" alt="" class="h-40 w-full object-cover" />
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-8 flex justify-end">
        <a
          href="#"
          class="inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
        >
          See Our Blogs
          <svg viewBox="0 0 20 20" class="h-4 w-4">
            <path
              d="M7 4l6 6-6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل التنسيقات تمت عبر Tailwind */
</style>
