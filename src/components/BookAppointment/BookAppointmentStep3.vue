<script setup lang="ts">
interface Props {
  dateLabel?: string
  timeLabel?: string
}
const props = withDefaults(defineProps<Props>(), {
  dateLabel: '18 Sept, 2023',
  timeLabel: '5:30 PM – 5:55 PM',
})

const backHome = () => {
  // ضع التنقّل أو إغلاق المودال هنا
}
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <!-- Heading -->
      <header>
        <h1 class="text-3xl font-extrabold text-blue-900 sm:text-4xl">
          Book Your Appointment Now
        </h1>
        <p class="mt-2 max-w-2xl text-gray-500">
          Choose the appropriate service and select a time that suits you.
        </p>
      </header>

      <!-- Steps -->
      <div class="relative mt-8">
        <div class="absolute left-0 right-0 top-6 h-0.5 bg-blue-200"></div>
        <div class="relative grid grid-cols-3 gap-4">
          <!-- Step 1 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-blue-900 text-white shadow">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Contact information</p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-blue-900 text-white shadow">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm13 8H4v10h16V10Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Time& Date</p>
          </div>

          <!-- Step 3 (active) -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-sky-400 text-white shadow">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v10h2V6h16v12H8v2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-sky-500">Book Now</p>
          </div>
        </div>
      </div>

      <!-- Confirmation Card -->
      <div class="mt-10 flex justify-center">
        <div
          class="w-full max-w-3xl rounded-[32px] border border-gray-200 bg-white px-8 py-12 text-center shadow-sm"
        >
          <!-- success icon -->
          <div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400 text-white">
            <svg viewBox="0 0 24 24" class="h-8 w-8">
              <path fill="currentColor" d="M9.5 16.2 5.8 12.5l1.4-1.4 2.3 2.3 6.3-6.3 1.4 1.4-7.7 7.7Z"/>
            </svg>
          </div>

          <!-- date & time pills -->
          <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
            >
              <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-900 text-white">
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path fill="currentColor" d="M6 2h2v2h4V2h2v2h2v14H4V4h2V2Zm10 6H4v8h12V8Z"/>
                </svg>
              </span>
              {{ props.dateLabel }}
            </div>

            <div
              class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
            >
              <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5">
                  <path fill="currentColor" d="M10 2a8 8 0 1 0 .001 16.001A8 8 0 0 0 10 2Zm1 8V5H9v7h6v-2h-4Z"/>
                </svg>
              </span>
              {{ props.timeLabel }}
            </div>
          </div>

          <!-- message -->
          <p class="mx-auto mt-6 max-w-md text-sm leading-6 text-gray-600">
            All your data has been entered. The meeting
            link will be sent to your email.
          </p>

          <!-- button -->
          <button
            class="mx-auto mt-5 inline-flex items-center justify-center rounded-md bg-[#193A8A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#17337b]"
            @click="backHome"
          >
            Thanks for visiting
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل التنسيق عبر Tailwind */
</style>
