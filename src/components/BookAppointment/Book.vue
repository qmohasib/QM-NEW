<script setup lang="ts">
const onNext = (e: Event) => {
  e.preventDefault()
  // نفّذ الانتقال للخطوة التالية هنا
}
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <!-- Breadcrumb صغير -->
      <nav class="mb-4 text-xs text-gray-400">
        <span class="hover:underline cursor-default">Home</span>
        <span class="mx-2">›</span>
        <span class="text-gray-500">Book Appointment</span>
      </nav>

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
      <div class="relative mt-10">
        <!-- الخط -->
        <div class="absolute left-0 right-0 top-6 h-0.5 mx-52 bg-blue-200"></div>

        <div class="relative grid grid-cols-3 gap-4">
          <!-- Step 1 (active) -->
          <div class="flex flex-col items-center">
            <div
              class="grid h-12 w-12 place-items-center rounded-full bg-blue-900 text-white shadow"
            >
              <!-- user icon -->
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
                />
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Contact information</p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div
              class="grid h-12 w-12 place-items-center rounded-full bg-gray-200 text-gray-500 shadow"
            >
              <!-- calendar -->
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm13 8H4v10h16V10Z"
                />
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Time& Date</p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div
              class="grid h-12 w-12 place-items-center rounded-full bg-gray-200 text-gray-500 shadow"
            >
              <!-- card/confirm -->
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v10h2V6h16v12H8v2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 22h6v-6H2v6Zm2-2v-2h2v2H4Z"
                />
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Book Now</p>
          </div>
        </div>
      </div>

      <!-- Form card -->
      <div
        class="mt-12 rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        <div class="grid gap-0 sm:grid-cols-[220px_1fr]">
          <!-- Left mini panel -->
          <div
            class="rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none sm:rounded-bl-2xl bg-[#E7F8FF] px-6 py-8"
          >
            <span
              class="inline-flex items-center rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white"
              >The first step</span
            >
            <p class="mt-6 text-sm text-sky-900/80 leading-6">
              Enter your data here (Name, phone, email…)
            </p>
          </div>

          <!-- Right form -->
          <form @submit="onNext" class="px-6 py-8">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <!-- Full Name -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700"
                  >Full Name</label
                >
                <input
                  type="text"
                  placeholder="eg: John Doe"
                  class="w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
                />
              </div>

              <!-- company name (select look) -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700"
                  >company name</label
                >
                <div
                  class="flex items-center rounded-md border border-gray-200 bg-[#F4F7FE] px-3"
                >
                  <input
                    placeholder="Select"
                    class="w-full bg-transparent py-2.5 text-sm text-gray-700 outline-none"
                  />
                  <svg viewBox="0 0 20 20" class="h-4 w-4 text-gray-400">
                    <path
                      fill="currentColor"
                      d="M5.5 7.5 10 12l4.5-4.5"
                    />
                  </svg>
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700"
                  >Email</label
                >
                <input
                  type="email"
                  placeholder="eg: john@email.com"
                  class="w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
                />
              </div>

              <!-- Message -->
              <div class="row-span-2 md:row-span-2">
                <label class="mb-2 block text-sm font-semibold text-gray-700"
                  >Share Your Message</label
                >
                <textarea
                  rows="4"
                  placeholder="Message"
                  class="h-[90px] w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <!-- Phone -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700"
                  >Phone Number</label
                >
                <div
                  class="flex items-center gap-2 rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5"
                >
                  <div
                    class="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm text-gray-700"
                  >
                    <img
                      src="https://flagcdn.com/w20/sa.png"
                      class="h-3 w-4 rounded-sm"
                      alt="SA"
                    />
                    <span class="ml-1">+966</span>
                    <svg viewBox="0 0 20 20" class="ml-1 h-4 w-4 text-gray-400">
                      <path fill="currentColor" d="M5.5 7.5 10 12l4.5-4.5" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="543210987"
                    class="flex-1 bg-transparent text-sm text-gray-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Next button -->
      <div class="mt-6 flex justify-end">
        <button
          class="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#1b3380]"
        >
          Next
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
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل التنسيقات تمت عبر Tailwind */
</style>
