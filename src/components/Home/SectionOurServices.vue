<script setup lang="ts">
import icoClick from '@/assets/icon/services/icon (2).svg'                     // (Subscribe ... Free Accountant)
import icoSupport from '@/assets/icon/services/fluent_person-support-28-filled.svg' // (Communicate ...)
import icoGearHand from '@/assets/icon/services/ic_baseline-track-changes.svg'       // (Comprehensive service ...)
import icoAccountant from '@/assets/icon/services/Accountant.svg'                     // (Establishing an expert ...)
import servicespng from '@/assets/icon/services/Service.png'
import headerIco from '@/assets/icon/services/Picture.svg'


type Step = {
  title: string
  subtitle?: string
  variant?: 'solid' | 'soft'
  // تموضع الدِسكتوب كنِسَب داخل لوحة SVG (سنضبطها حسب القمم/القيعان)
  x?: number
  y?: number
  img?:any
}

/* ترتيب الكروت بحسب المطلوب */
const steps: Step[] = [
  {
    // 1) بداية الخط
    title: 'Subscribe to the Lists platform',
    subtitle: 'Free Accountant',
    x: 12, y: 82,
    variant: 'solid',
    img : icoClick
  },
  {
    // 2) القمّة العليا للمسار
    title: 'Communicate and with',
    subtitle: 'accountants at any time.',
    x: 42, y: 25,
    variant: 'solid',
    img : icoSupport
  },
  {
    // 3) القاع (القمّة السفلية)
    title: 'Comprehensive service',
    subtitle: 'in one package',
    x: 80, y: 84,
    variant: 'soft',
    img : servicespng
  },
  {
    // 4) نهاية الخط
    title: 'Establishing an expert virtual',
    subtitle: 'accounting team',
    x: 100, y: 26,
    variant: 'soft',
    img : icoAccountant
  },
]
</script>

<template>
  <section class="bg-white  " id="services">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:py-12">
      <!-- Header -->
      <div class="mb-6 flex items-center gap-3">
        <div class=" relative w-15 h-15   mx-2 ">


          <img :src="headerIco" alt="" class=" max-w-7xl  -ms-10 -mt-8 ">
        </div>
        <h2 class="text-3xl font-Cairo font-extrabold text-[#163B8E]">Our Services</h2>
      </div>
      <p class="max-w-2xl ms-20 text-lg leading-7 text-gray-400 font-Nunito">
        We provide smart and simple accounting solutions that help you
        manage your business with
        <span class="relative inline-block top-1 w-32 h-[1.75rem] overflow-hidden align-baseline ms-1">
          <span class="absolute left-0  text-blue-900 text-2xl font-bold font-Nunito animate-word-rotate">
            Smart<br />
            smooth<br />
            successful<br />
          </span>
        </span>
      </p>


      <!-- =================== Desktop / Tablet (>= md) =================== -->
      <div class="relative mt-10 hidden md:block">
        <div class="relative mx-auto aspect-[1200/420] w-full max-w-[1150px] overflow-x-clip">
          <!-- مسار أكثر انحناء -->
          <svg viewBox="0 0 1200 420" class="absolute inset-0 h-full w-full " fill="none">
            <!-- ظل عريض -->
            <path d="M70 330 C 220 120, 420 60, 560 120 C 700 180, 800 380, 960 300 C 1080 235, 1120 200, 1130 120"
              stroke="#1f3b86" stroke-opacity="0.08" stroke-width="18" stroke-linecap="round" />
            <!-- خط منقّط متحرّك -->
            <path d="M70 330 C 220 120, 420 60, 560 120 C 700 180, 800 380, 960 300 C 1080 235, 1120 200, 1130 120"
              class="dash-path" stroke="#1f3b86" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 14" />
          </svg>

          <!-- الكروت فوق نقاط محددة (بداية/قمّة/قاع/نهاية) مع entrance animation -->
          <div v-for="(s, i) in steps" :key="'d' + i" class="absolute -translate-x-1/2 -translate-y-1/2 "
            :style="{ left: (s.x || 0) + '%', top: (s.y || 0) + '%' }">
            <div class="reveal " :style="{ '--delay': `${i * 0.12}s` }">
              <div :class="[
                'grid h-24 w-24 place-items-center rounded-2xl shadow ',
                s.variant === 'solid' ? 'bg-[#0d2fd6] text-white' : 'bg-[#F4F7FF] text-[#0d2fd6]'
              ]">
                <!-- أيقونة بسيطة -->
                <!-- <svg viewBox="0 0 24 24" class="h-9 w-9">
                  <path v-if="s.variant === 'solid'" fill="currentColor"
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  <path v-else fill="currentColor"
                    d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
                </svg> -->

                <img :src="s.img" alt="" class="h-9 w-9">
              </div>
              <p
                class="pointer-events-none mt-3 w-[240px] -translate-x-[60px] text-center text-[15px] font-medium leading-5 text-[#163B8E]">
                {{ s.title }}<br />
                <span v-if="s.subtitle" class="font-normal text-[#173E8A]/80">{{ s.subtitle }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- =================== Mobile (< md) =================== -->
      <div class="relative mt-10 md:hidden  h-250 overflow-clip ">
        <div class="relative mx-auto w-full max-w-sm ">
          <!-- مسار عمودي فيه هضبتان عريضتان -->
          <svg viewBox="0 0 360 780" class="absolute inset-0 h-[780px] w-full" fill="none">
            <!-- ظل -->
            <path d="M180 80
           C  60 180, 300 200, 200 300  
           C 100 400, 320 480, 180 600   
           C 80 680, 260 740, 180 760" stroke="#1f3b86" stroke-opacity="0.08" stroke-width="18"
              stroke-linecap="round" />
            <!-- الخط المنقط المتحرك -->
            <path d="M180 80
           C  60 180, 300 200, 200 300
           C 100 400, 320 480, 180 600
           C 80 680, 260 740, 180 760" class="dash-path" stroke="#1f3b86" stroke-width="6" stroke-linecap="round"
              stroke-dasharray="2 14" />
          </svg>

          <!-- الكروت -->
          <!-- 1) البداية -->
          <div class="absolute left-[75%] top-[40px] -translate-x-1/2">
            <div class="reveal" style="--delay:0s">
              <div class="grid h-24 w-24 place-items-center rounded-2xl bg-[#0d2fd6] text-white shadow">
               

                <img :src="icoClick" class="h-9 w-9" alt="">
              </div>
              <p class="mt-3 w-56 text-center text-[15px] font-medium leading-5 text-[#163B8E]">
                Subscribe to the Lists<br />Free Accountant
              </p>
            </div>
          </div>

          <div class="absolute left-[45%] top-[300px] -translate-x-1/2 ">
            <div class="reveal  " style="--delay:.12s">
              
                <div class="grid h-26 w-26 place-items-center rounded-2xl bg-[#0d2fd6] text-white">
                  

                  <img :src="icoSupport" class="w-9 h-9" alt="">
                </div>
              
              <p class="mt-2 w-60 text-start -ms-30 text-[15px] leading-5 text-[#163B8E]">
                Communicate and with<br />accountants at any time.
              </p>
            </div>
          </div>

          <!-- 3) الهضبة الثانية -->
          <div class="absolute left-[85%] top-[520px] -translate-x-1/2 ">
            <div class="reveal" style="--delay:.24s">
              
                <div class="grid h-24 w-24 place-items-center rounded-2xl bg-[#EEF3FF] text-[#0d2fd6]">
                

                  <img :src="servicespng" class="h-9 w-9" alt="">
                </div>
              
              <p class="mt-2 w-60 text-start text-[15px] leading-5 text-[#163B8E]">
                Comprehensive service<br />in one package
              </p>
            </div>
          </div>

          <!-- 4) النهاية -->
          <div class="absolute left-[60%] top-[750px] -translate-x-1/2">
            <div class="reveal" style="--delay:.36s">
             
                <div class="grid h-24 w-24 place-items-center rounded-2xl bg-[#EEF3FF] text-[#0d2fd6]">
                

                  <img :src="icoAccountant" class="w-9 h-9" alt="">
                </div>
              
              <p class="mt-2 w-60 text-start text-[15px] leading-5 text-[#163B8E]">
                Establishing an expert virtual<br />accounting team
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<style scoped>
@keyframes word-rotate {
  0% {
    transform: translateY(1%);
  }

  30% {
    transform: translateY(1%);
  }

  33% {
    transform: translateY(-32%);
  }

  63% {
    transform: translateY(-32%);
  }

  66% {
    transform: translateY(-65%);
  }

  96% {
    transform: translateY(-65%);
  }

  100% {
    transform: translateY(1%);
  }
}

/* حركة الخط المنقّط */
@keyframes dashMove {
  to {
    stroke-dashoffset: -220;
  }
}

.dash-path {
  stroke-dashoffset: 0;
  animation: dashMove 2.2s linear infinite;
}

/* Entrance لكل كرت مع stagger عبر --delay */
@keyframes revealUp {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(.98);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.reveal {
  opacity: 0;
  animation: revealUp .6s cubic-bezier(.2, .65, .2, 1) forwards;
  animation-delay: var(--delay, 0s);
}

/* احترام تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  .dash-path {
    animation: none;
  }

  .reveal {
    animation: none;
    opacity: 1;
    transform: none;
  }
}



.animate-word-rotate {
  animation: word-rotate 6s ease-in-out infinite;
}
</style>
