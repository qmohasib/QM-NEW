<script setup lang="ts">
import { ref } from 'vue'

type Faq = { q: string; a: string }

const faqs: Faq[] = [
  {
    q: 'Do you offer fully customized solutions?',
    a: "We blend creativity, technology, and strategy to deliver solutions that perfectly reflect your brand's vision.",
  },
  { q: 'Do I need prior accounting experience?', a: 'No. Our team guides you through each step with clear instructions.' },
  { q: 'Do I need prior accounting experience?', a: 'Basics are enough; we provide templates and best practices.' },
  { q: 'Do I need prior accounting experience?', a: 'We also have onboarding sessions for beginners.' },
]

const open = ref<number>(0) // العنصر المفتوح
const toggle = (i: number) => (open.value = open.value === i ? -1 : i)
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Heading + mini form -->
        <div>
          <h2 class="text-3xl font-extrabold leading-tight  sm:text-4xl font-Cairo">
            Frequently Asked
            <span class="block text-4xl sm:text-5xl text-blue-900">Questions</span>
          </h2>

          <p class="mt-5 max-w-md text-gray-500 font-Nunito">
            Visit Our Frequently Asked Questions to find helpful information
          </p>

          <div
            class="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p class="text-gray-700 font-medium">
              can't Locate your answer what you need?
            </p>
            <p class="mt-1 text-sm text-gray-500">
              We are here to help you with any question you have
            </p>

            <label class="mt-6 block text-sm font-semibold text-gray-800">
              Ask Your Question
            </label>
            <input
              type="text"
              placeholder="write Here.."
              class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
            />

            <button
              type="button"
              class="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 active:scale-[.98]"
            >
              Sent Now
            </button>
          </div>
        </div>

        <!-- Right: Accordion -->
        <div>
          <!-- Top item (open by default) styled كالعينة -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <button
              class="flex w-full items-start gap-4 text-left"
              @click="toggle(0)"
              :aria-expanded="open === 0"
            >
              <span
                class="mt-1 grid h-8 w-8 place-items-center rounded-full bg-blue-900 text-white"
              >
                <!-- minus / plus -->
                <svg
                  v-if="open === 0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="h-4 w-4"
                >
                  <path d="M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="h-4 w-4"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </span>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-blue-900">
                  {{ faqs[0].q }}
                </h3>
                <p
                  v-show="open === 0"
                  class="mt-2 text-sm leading-6 text-gray-600"
                >
                  {{ faqs[0].a }}
                </p>
              </div>
            </button>
          </div>

          <!-- Divider to mimic thin top shadow line -->
          <div class="my-4 h-px rounded bg-gray-100/80"></div>

          <!-- Rest of items -->
          <div class="space-y-4">
            <div
              v-for="(item, i) in faqs.slice(1)"
              :key="i"
              class="rounded-xl bg-gray-100 px-5 py-4 transition hover:bg-gray-100/90"
            >
              <button
                class="flex w-full items-center justify-between gap-4 text-left"
                @click="toggle(i + 1)"
                :aria-expanded="open === i + 1"
              >
                <div class="flex items-center gap-4">
                  <span
                    class="grid h-7 w-7 place-items-center rounded-full bg-blue-900 text-white"
                  >
                    <svg
                      v-if="open === i + 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="h-4 w-4"
                    >
                      <path d="M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="h-4 w-4"
                    >
                      <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </span>
                  <h3 class="text-base font-semibold text-blue-900">
                    {{ item.q }}
                  </h3>
                </div>
              </button>
              <p
                v-show="open === i + 1"
                class="mt-2 pl-11 text-sm leading-6 text-gray-600"
              >
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل التنسيق عبر Tailwind؛ لا حاجة لإضافات هنا. */
</style>
