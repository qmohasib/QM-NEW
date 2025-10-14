<script setup lang="ts">
type Testimonial = {
  name: string
  title: string
  quote: string
  rating: number
  avatarBg: string  // لون خلفية الأفاتار (بديل مؤقت لصورة)
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Abd Arahem Monther',
    title: 'Good Service',
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-sky-400 to-blue-700',
    initials: 'AM',
  },
  {
    name: 'Abd Arahem Monther',
    title: 'Good Service',
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-sky-400 to-blue-700',
    initials: 'AM',
  },
  {
    name: 'Abd Arahem Monther',
    title: 'Good Service',
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-sky-400 to-blue-700',
    initials: 'AM',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white border-b border-b-gray-300" >
    <div class="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
      <!-- Heading -->
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold font-Cairo tracking-tight text-blue-900 sm:text-4xl">
          Our Happy Customers
        </h2>
        <p class="mt-4 text-gray-500 font-Nunito">
          "Our customers' happiness is the secret to our success, and we pride ourselves on
          providing services that exceed their expectations every time."
        </p>
      </div>

      <!-- Cards -->
      <div
        class="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
      >
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="group relative flex flex-col"
        >
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow group-hover:shadow-md"
          >
            <!-- Stars -->
            <div class="flex items-center gap-1">
              <svg
                v-for="n in t.rating"
                :key="n"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="h-5 w-5 fill-yellow-400"
                aria-hidden="true"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0L6.115 16.28c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.48 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <!-- Title + verified -->
            <div class="mt-3 flex items-center gap-2">
              <p class="font-semibold text-gray-800 font-Cairo">{{ t.title }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="10" class="fill-emerald-500" />
                <path
                  d="M14.5 7.5l-5.2 5.2L5.5 9.9"
                  class="stroke-white"
                  stroke-width="1.8"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <!-- Quote -->
            <p class="mt-3 text-sm leading-6 text-gray-500 font-Nunito">
              "{{ t.quote }}"
            </p>
          </div>

          <!-- Avatar + Name -->
          <div class="mt-6 flex flex-col items-center">
            <!-- استبدل الديف التالية بصورة لو تحب -->
            <!-- <img :src="yourAvatar" class="h-12 w-12 rounded-full object-cover" alt="" /> -->
            <div
              class="grid h-12 w-12 place-items-center rounded-full text-white"
              :class="t.avatarBg"
            >
              <span class="text-sm font-bold">{{ t.initials }}</span>
            </div>
            <p class="mt-3 text-sm font-semibold text-gray-800">
              {{ t.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- خلفيات ديكورية خفيفة مثل المعروض بالصورة -->
    <div aria-hidden="true">
      <div
        class="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-blue-900/20"
      />
      <div
        class="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full bg-blue-600/10"
      />
    </div>
  </section>
</template>

<style scoped>
/* لا شيء إضافي مطلوب؛ كل شيء عبر Tailwind. */
</style>
