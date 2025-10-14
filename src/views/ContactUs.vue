<script setup lang="ts">
import BreadcrumbHeader from '@/components/Auth/BreadcrumbHeader.vue';
import Footer from '@/components/Footer/Footer.vue';

const onSubmit = (e: Event) => {
  e.preventDefault()
  // ضع منطق الإرسال هنا
}
</script>

<template>
  <section class="bg-white">
    <!-- Header -->
    <BreadcrumbHeader :items="[
      { label: 'Home', to: '/', icon: true },
      { label: 'Contact Us' }
    ]" title="Contact US" bg-class="bg-[#F6F9FF]" border-class="border-gray-100" title-align="center"
      :uppercase-title="false" separator="›" />

    <!-- Content -->
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div class="mb-10">
        <div class="flex items-center gap-4">
          <span class="h-1.5 w-12 rounded bg-[#2A5AC1]"></span>
          <h2 class="text-3xl  font-Cairo font-bold text-blue-900">Get in Touch with Us</h2>
        </div>
        <p class="mt-2 lg:mx-18  text-gray-500">
          We're here to help — contact us via any method that suits you.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1fr_360px]">
        <!-- Form -->
        <form @submit="onSubmit" class="space-y-5">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-[#2A5AC1]">*</span>
              </label>
              <input type="text" placeholder="ex.tawheed malkat"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2A5AC1]" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email <span class="text-[#2A5AC1]">*</span>
              </label>
              <input type="email" placeholder="example@gmail.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2A5AC1]" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Phone <span class="text-[#2A5AC1]">*</span>
              </label>
              <div class="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                <div class="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-sm text-gray-700">
                  (+966)
                </div>
                <input type="tel" placeholder="981982883" class="flex-1 bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Company Name <span class="text-[#2A5AC1]">*</span>
              </label>
              <input type="text" placeholder="Rtrateet"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2A5AC1]" />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Message <span class="text-[#2A5AC1]">*</span>
            </label>
            <textarea rows="6" placeholder="Write here..."
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2A5AC1]"></textarea>
          </div>

          <div class="mt-1 flex items-center gap-3">
            <button type="submit"
              class="rounded-xl bg-[#2A5AC1] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#244fae]">
              Send Now
            </button>
            <button type="button"
              class="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white shadow-sm">
              <svg viewBox="0 0 20 20" class="h-4 w-4 text-[#2A5AC1]">
                <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </form>

        <!-- Info Card -->
        <aside class="rounded-[24px] bg-[#133981] px-6 py-7 text-white shadow-md">
          <h3 class="text-lg font-semibold">Address</h3>
          <p class="mt-2 text-sm text-white/90">
            Kingdom of Saudi Arabia<br />
            123 Street-Building 10sraetv2
          </p>

          <h3 class="mt-6 text-lg font-semibold">Contact</h3>
          <p class="mt-2 text-sm text-white/90">
            +966-09288271<br />
            +0118267378
          </p>

          <h3 class="mt-6 text-lg font-semibold">Open Time</h3>
          <p class="mt-2 text-sm text-white/90">
            Monday-Friday: 10:00Am-4:00Pm
          </p>

          <h3 class="mt-6 text-lg font-semibold">Stay Connected</h3>
          <div class="mt-3 flex items-center gap-3">
            <a href="#" class="grid h-8 w-8 place-items-center rounded-full bg-white text-[#133981]">
              <i class="pi pi-facebook "></i>
            </a>
            <a href="#" class="grid h-8 w-8 place-items-center rounded-full bg-white text-[#133981]">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="grid h-8 w-8 place-items-center rounded-full bg-white text-[#133981]">
              <i class="pi pi-whatsapp"></i>
            </a>
            <a href="#" class="grid h-8 w-8 place-items-center rounded-full bg-white text-[#133981]">
              <i class="pi pi-twitter"></i>
            </a>
          </div>
        </aside>
      </div>
    </div>

    <!-- 🌍 Map Section -->
    <div class="mt-16 mb-16">
      <div class="mx-auto max-w-7xl px-4">
        <h2 class="mb-4 text-2xl font-semibold text-blue-900">Find Us on Map</h2>
      </div>
      <div class="mx-auto max-w-7xl rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <iframe class="w-full h-[400px] sm:h-[500px]" style="border:0;" allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.095087434235!2d46.675295315002364!3d24.71355198411888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f041d1e6e12b5%3A0x869a5d5b4973a51f!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1702323234567"></iframe>
      </div>
    </div>

    <Footer />
  </section>


</template>

<style scoped>
/* كل التنسيقات تمت عبر Tailwind */
</style>
