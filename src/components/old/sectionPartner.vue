<script setup>
import oyodo from '@/assets/icon/partner/oyodo.png'
import wafek from '@/assets/icon/partner/wafek.png'
import kfu from '@/assets/icon/partner/kfu.png'
import comminaction from '@/assets/icon/partner/comminecation.png'
import zoho from '@/assets/icon/partner/zoho.png'
import threeCircle from '@/assets/icon/partner/three circle.png'
</script>

<template>
  <section class="relative overflow-hidden bg-gray-100">
    <!-- scaling wrapper centers the canvas -->
    <div class="mx-auto flex justify-center">
      <!-- DESKTOP canvas: exact shape; we’ll scale this on smaller screens -->
      <div class="hero-canvas relative">
        <!-- decorative background rings/bubbles (percent-based) -->
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute rounded-full border border-blue-900"
               style="width:55%;padding-top:55%;right:-10%;top:-15%;"></div>
          <div class="absolute rounded-full bg-blue-600 opacity-100"
               style="width:48%;padding-top:48%;right:-6%;top:-10%;"></div>
          <div class="absolute rounded-full bg-blue-700/40 blur-sm"
               style="width:41%;padding-top:41%;right:0%;top:-3%;"></div>

          <img :src="threeCircle" alt=""
               class="absolute -left-[25%] top-[5%] w-[60%] max-w-none opacity-80" />
        </div>

        <div class="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 py-16 lg:py-24">
            <!-- Left: Heading + Text + CTA -->
            <div class="flex flex-col justify-center">
              <h2 class="text-blue-900 font-bold font-['Cairo'] leading-tight text-4xl sm:text-5xl">
                Our Partners <br class="hidden sm:block" /> in Success
              </h2>

              <p class="mt-6 text-gray-500 font-['Nunito'] max-w-prose">
                We are proud to partner with government agencies, leading companies, and accounting
                service providers who support our journey.
              </p>

              <div class="mt-8 flex items-center gap-4">
                <button type="button"
                        class="inline-flex items-center rounded-full bg-blue-900 px-18 py-6 text-white text-lg font-bold font-['Cairo'] shadow-sm ring-1 ring-white/10 backdrop-blur">
                  Become a partner
                </button>

                <div class="grid place-items-center h-14 w-14 rounded-full bg-white shadow ring-2 ring-blue-900"
                     aria-hidden="true">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6.7101 12.2102L11.7101 7.21019C11.8011 7.11508 11.8725 7.00294 11.9201 6.88019C12.0201 6.63672 12.0201 6.36365 11.9201 6.12019C11.8725 5.99743 11.8011 5.88529 11.7101 5.79019L6.7101 0.790185C6.61687 0.696947 6.50618 0.622986 6.38435 0.572526C6.26253 0.522066 6.13196 0.496094 6.0001 0.496094C5.7338 0.496094 5.47841 0.601882 5.2901 0.790185C5.1018 0.978489 4.99601 1.23388 4.99601 1.50019C4.99601 1.76649 5.1018 2.02188 5.2901 2.21019L8.5901 5.50019L1.0001 5.50019C0.734887 5.50019 0.480533 5.60554 0.292996 5.79308C0.10546 5.98062 0.000103951 6.23497 0.000103951 6.50019C0.000103951 6.7654 0.10546 7.01976 0.292996 7.20729C0.480533 7.39483 0.734887 7.50019 1.0001 7.50019L8.5901 7.50019L5.2901 10.7902C5.19637 10.8831 5.12198 10.9937 5.07121 11.1156C5.02044 11.2375 4.99431 11.3682 4.99431 11.5002C4.99431 11.6322 5.02044 11.7629 5.07121 11.8848C5.12198 12.0066 5.19637 12.1172 5.2901 12.2102C5.38307 12.3039 5.49367 12.3783 5.61553 12.4291C5.73739 12.4798 5.86809 12.506 6.0001 12.506C6.13212 12.506 6.26282 12.4798 6.38468 12.4291C6.50654 12.3783 6.61714 12.3039 6.7101 12.2102Z" fill="#1E3A8A"/>
      </svg>
                </div>
              </div>
            </div>

            <!-- Right: floating partner cards (same desktop positions) -->
            <div class="relative min-h-[640px]">
              <!-- card 1 -->
              <div class="absolute bg-gray-100 rounded-2xl p-3"
                   style="left:-25%;top:0%;width:38%;">
                <img :src="comminaction" alt="Communication" class="w-full h-auto rounded-xl" />
              </div>

              <!-- card 2 -->
              <div class="absolute bg-gray-100 rounded-2xl p-3"
                   style="left:-30%;top:35%;width:44%;">
                <img :src="kfu" alt="KFU" class="w-full h-auto rounded-xl" />
              </div>

              <!-- card 3 -->
              <div class="absolute bg-gray-100 rounded-2xl p-2"
                   style="left:10%;top:70%;width:34%;">
                <img :src="oyodo" alt="Oyodo" class="w-full h-auto rounded-xl" />
              </div>

              <!-- card 4 -->
              <div class="absolute bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-3"
                   style="left:58%;top:0%;width:36%;">
                <img :src="zoho" alt="Zoho" class="w-full h-auto" />
              </div>

              <!-- card 5 -->
              <div class="absolute bg-white rounded-2xl ring-1 ring-gray-200 p-3"
                   style="left:40%;top:38%;width:36%;">
                <img :src="wafek" alt="Wafek" class="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div> <!-- /hero-canvas -->
    </div>
  </section>
</template>

<style scoped>
/* ===== Desktop reference size (exact shape) =====
   Set this to your real desktop comp size. */
.hero-canvas{
  --canvas-w: 1280px;  /* width that your desktop layout was designed for */
  --canvas-h: 760px;   /* approximate height of the section */

  width: var(--canvas-w);
  min-height: var(--canvas-h);
}

/* ===== Responsive scaling (identical shape on smaller screens) ===== */
@media (max-width: 1280px) {
  .hero-canvas{
    --scale-x: calc(100vw / var(--canvas-w));
    /* If you also want to respect viewport height, include this: */
    --scale-y: calc(100dvh / var(--canvas-h));
    /* Use the smaller so it never overflows either axis */
    --scale: min(var(--scale-x), var(--scale-y));
    transform: scale(var(--scale));
    transform-origin: top left;
  }

  /* Reserve visual height so nothing gets clipped after scaling */
  section{
    min-height: calc(var(--canvas-h) * var(--scale, 1));
  }
}

/* Optional: tiny phone safety cap
@media (max-width: 360px){
  .hero-canvas{ --scale: min(var(--scale), 0.85); }
}
*/
</style>
