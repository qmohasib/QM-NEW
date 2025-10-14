<script setup lang="ts">
import PricingCard from '@/components/PricingCard.vue'
import { ref } from 'vue'
import threeCircle from '@/assets/icon/partner/three circle.png'
type Plan = {
    name: string
    subtitle: string
    price: string
    note: string
    features: string[]
    featured?: boolean
}

const plans: Plan[] = [
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
    {
        name: 'Premium Package',
        subtitle: 'Choose excellence with our premium plan',
        price: '€2.49/mo',
        note: 'For 36 month term\nRenews at €5.99/mo',
        features: [
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
            '24/7 technical support',
            'Unlimited users',
            'Customizable interface and reports',
            'Integration with external systems (API)',
        ],
    },
]

const hoveredIndex = ref<number | null>(null)
const setHover = (i: number | null) => (hoveredIndex.value = i)
</script>

<template>
    <section class="bg-white relative">
   
    <img :src="threeCircle" class=" z-10 pointer-events-none absolute -top-20 -left-54 h-120 w-120 rounded-full  " alt="">
    
    <div aria-hidden class="  pointer-events-none absolute  right-0 h-80 w-80 rounded-full bg-[#2A5AC1]/10 blur-3xl"></div>
    
  
        <div class="mx-auto max-w-7xl px-4 pt-10 pb-16 relative z-20">
            <!-- العنوان -->
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p class="text-4xl font-extrabold leading-tight text-[#1F2E69]">
                        <span class="block">Choose<span class="text-[#2A5AC1]">_</span></span>
                        <span class="block">your package now</span>
                    </p>
                </div>

                <div class="flex items-center gap-2 rounded-full bg-white/70 p-1 ring-1 ring-gray-200 shadow-sm">
                    <button class="rounded-full px-3 py-1.5 text-sm font-semibold text-[#2A5AC1] bg-[#EEF3FF]">
                        Monthly
                    </button>
                    <button class="rounded-full px-3 py-1.5 text-sm text-gray-500 hover:text-[#2A5AC1]">
                        Platform packages
                    </button>
                </div>
            </div>

            <!-- الشبكة -->
            <section class="bg-white rounded-2xl" >
                <div class="mx-auto max-w-7xl px-4 py-10">
                    <div class="grid gap-6 md:grid-cols-3">
                        <div v-for="(p, idx) in plans" :key="idx">
                            <div @mouseenter="setHover(idx)" @mouseleave="setHover(null)" @focusin="setHover(idx)"
                                @focusout="setHover(null)" class="outline-none" tabindex="0">
                                <PricingCard :plan="p" :active="p.featured || hoveredIndex === idx" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA سفلي (اختياري) -->
            <div class="mt-10 flex items-center justify-end">
                <div class=" flex gap-4 items-center">
                    <button
                        class="inline-flex items-center gap-3 rounded-full bg-[#1F3B86] px-6 py-3 text-white shadow hover:bg-[#182f77]">
                        Browse our packages

                    </button>

                    <div class="grid p-3  place-items-center rounded-full border  border-[#1F3B86] ">
                        <svg viewBox="0 0 20 20" class="h-4 w-4">
                            <path d="M7 4l6 6-6 6" fill="#1F3B86" stroke="#1F3B86" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" class=" text-[#1F3B86]" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
