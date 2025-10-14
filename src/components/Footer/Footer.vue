<script setup lang="ts">
import FloatingAssistant  from '@/components/Assistant/FloatingAssistant.vue'
import logo from '@/assets/logoFooter.png'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative bg-[#163B8E] text-white">
    <!-- إطار خفيف مثل الصورة -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 border border-white/15"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- العمود 1: شعار + وصف + Stay in touch + سوشال -->
        <div class="space-y-6">
          <!-- شعار (بدّله بصورتك إن رغبت) -->
          <div class="flex items-center gap-2">
            <img :src="logo" class="h-25 w-50" alt="">
          </div>

          <p class="max-w-sm text-sm text-white/80">
            Leading luxury real estate agency connecting you to
            Dubai &amp; London's most exclusive properties
          </p>

          <div>
            <h3 class="font-serif text-2xl tracking-wide leading-6">
              STAY IN TOUCH<br />WITH US
            </h3>
            <div class="mt-4 flex items-center gap-4 text-white">
              <!-- أيقونات SVG بيضاء -->
              <a href="#" aria-label="Facebook" class="opacity-90 hover:opacity-100">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M22 12.06C22 6.49 17.52 2 11.95 2S2 6.49 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" class="opacity-90 hover:opacity-100">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" class="opacity-90 hover:opacity-100">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M22 5.77a8.2 8.2 0 0 1-2.36.65A4.12 4.12 0 0 0 21.4 4a8.23 8.23 0 0 1-2.61 1A4.11 4.11 0 0 0 11 8.12a11.66 11.66 0 0 1-8.46-4.29 4.12 4.12 0 0 0 1.27 5.49 4.08 4.08 0 0 1-1.86-.51v.05a4.12 4.12 0 0 0 3.29 4 4.16 4.16 0 0 1-1.85.07 4.12 4.12 0 0 0 3.84 2.85A8.25 8.25 0 0 1 2 18.41a11.63 11.63 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.35 8.35 0 0 0 22 5.77Z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="opacity-90 hover:opacity-100">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5ZM3 8.98h4v12H3Zm7 0h3.83v1.64h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.13v6.31h-4v-5.6c0-1.33 0-3.04-1.85-3.04s-2.13 1.45-2.13 2.95v5.69h-3.47Z"/></svg>
              </a>
            </div>
          </div>

          <!-- روابط أسفل يسار -->
          <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <a href="#" class="hover:underline">Privacy Centre</a>
            <span class="h-5 w-px bg-white/30"></span>
            <a href="#" class="hover:underline">Terms and Conditions</a>
          </div>
          <a href="#" class="mt-2 block text-sm text-white/75 hover:underline">
            Cookies Settings
          </a>

          <p class="mt-6 text-sm text-white/80">
            Location:Syria-Damascus
          </p>
        </div>

        <!-- العمود 2: Pages -->
        <div>
          <h4 class="text-lg font-semibold">Pages</h4>
          <ul class="mt-4 space-y-3 text-white/85">
            <li><a href="#" class="hover:underline">Register/Login</a></li>
            <li><a href="#" class="hover:underline">Properties</a></li>
            <li><a href="#" class="hover:underline">For Buyers</a></li>
            <li><a href="#" class="hover:underline">For Sellers</a></li>
            <li><a href="#" class="hover:underline">Featured Collections</a></li>
          </ul>
        </div>

        <!-- العمود 3: Insights -->
        <div>
          <h4 class="text-lg font-semibold">Insights</h4>
          <ul class="mt-4 space-y-3 text-white/85">
            <li><a href="#" class="hover:underline">Market Reports</a></li>
            <li><a href="#" class="hover:underline">Property News</a></li>
            <li><a href="#" class="hover:underline">Dubai vs. London</a></li>
            <li><a href="#" class="hover:underline">Comparison</a></li>
          </ul>
        </div>

        <!-- العمود 4: Concierge + تواصل يمين -->
        <div class="flex flex-col justify-between">
          <div>
            <h4 class="text-lg font-semibold">Concierge</h4>
            <ul class="mt-4 space-y-3 text-white/85">
              <li><a href="#" class="hover:underline">Request a Call</a></li>
              <li><a href="#" class="hover:underline">WhatsApp Us</a></li>
              <li><a href="#" class="hover:underline">Legal &amp; Golden Visa</a></li>
              <li><a href="#" class="hover:underline">Support</a></li>
            </ul>
          </div>

          <!-- معلومات التواصل (أسفل يمين مثل الصورة) -->
          <div class="mt-10 space-y-3 text-white/85">
            <div class="flex items-center gap-3">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
              </span>
              <span>Syria- Damascus</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5l8 5 8-5ZM18 6H6l6 4 6-4Z"/></svg>
              </span>
              <span>info@company.com</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.26 11.5 11.5 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .58 3.6 1 1 0 0 1-.26 1Z"/></svg>
              </span>
              <span>+49 123 456 789 |</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- خط سفلي رفيع -->
    <div class="border-t border-white/15">
      <div class="mx-auto max-w-7xl px-4">
        <p class="py-4 text-center text-xs text-white/80">
          © {{ year }} YourBrandName. All rights reserved
        </p>
      </div>
    </div>

    <FloatingAssistant
    brand-color="#1F3B86"
    title="Qawaem Assistant"
    :open-by-default="false"
    position="br"
    :z-index="70"
  />
  </footer>
</template>

<style scoped>
/* كل التنسيق عبر Tailwind */
</style>
