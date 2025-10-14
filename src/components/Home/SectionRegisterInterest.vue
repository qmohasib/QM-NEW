<script setup lang="ts">

import interstingImage from '@/assets/icon/intersting/intersting.jpg'
const onSubmit = (e: Event) => {
  e.preventDefault()
  // نفّذ الإرسال هنا لاحقًا
}
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div class="grid items-start gap-10 lg:grid-cols-2">
        <!-- Left column -->
        <div >
          <h2 class="text-[42px] leading-[1.05]   font-Cairo">
            RIGISTER YOUR
            <span class="block">INTERST</span>
          </h2>

          <div class="mt-10 space-y-8">
            <!-- row: Reports + small image -->
            <div class="flex items-center gap-6">
              <div>
                <p class="text-sm text-gray-500">Reports</p>
                <p class="mt-1 text-2xl font-bold text-gray-900">3,850</p>
              </div>

              <img
                class="h-36 w-36 rounded-lg object-cover"
                :src="interstingImage"
                alt=""
              />
            </div>

            <!-- row: Clients (blue card) + Financial -->
            <div class="flex items-end gap-8">
              <div
                class="rounded-xl bg-blue-900 px-10 py-6 text-white shadow-md"
              >
                <p class="text-sm/5 opacity-90">Clients</p>
                <p class="mt-1 text-2xl font-extrabold">+150</p>
              </div>

              <div class="">
                <p class="text-sm text-gray-500 ">Financial</p>
                <p class="mt-1 text-2xl font-bold text-gray-900">1,2000</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column: form card -->
        <div
          class="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:p-8"
        >
          <form @submit="onSubmit" class="space-y-5">
            <!-- Full Name -->
            <div>
              <label class="mb-1 block text-sm font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="mb-1 block text-sm font-semibold text-gray-800">
                Email,
              </label>
              <input
                type="email"
                placeholder="Enter Your Email address"
                class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
              />
            </div>

            <!-- Phone -->
            <div>
              <label class="mb-1 block text-sm font-semibold text-gray-800">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Your  Phone Number"
                class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="mb-1 block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value="************"
                class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
              />
            </div>

            <!-- Button -->
            <button
              type="submit"
              class="mt-3 w-full rounded-lg bg-blue-900 py-3.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل شيء عبر Tailwind */
</style>
