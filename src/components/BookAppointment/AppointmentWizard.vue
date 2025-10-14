<script setup lang="ts">
import { ref, computed } from 'vue'
import BreadcrumbHeader from '../Auth/BreadcrumbHeader.vue'
/* ---------- Global state ---------- */
type Step = 1 | 2 | 3
const step = ref<Step>(1)

/* بيانات الخطوة 1 */
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

/* تحقق بسيط للانتقال */
const step1Valid = computed(() =>
  form.value.fullName.trim() &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email) &&
  form.value.phone.trim()
)

/* بيانات الخطوة 2 */
const viewDate = ref(new Date())
const selectedDate = ref<Date | null>(null)
const selectedTime = ref<string | null>(null)
const step2Valid = computed(() => !!selectedDate.value && !!selectedTime.value)

/* أزرار التنقل */
function next() {
  if (step.value === 1 && !step1Valid.value) return
  if (step.value === 2 && !step2Valid.value) return
  if (step.value < 3) step.value++
}
function back() {
  if (step.value > 1) step.value--
}

/* أدوات التقويم */
function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1) }
function endOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth() + 1, 0) }
function addMonths(d: Date, m: number) { return new Date(d.getFullYear(), d.getMonth() + m, 1) }
function sameDay(a: Date, b: Date) {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate()
}
const weekDays = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
const monthLabel = computed(() =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(viewDate.value)
)
const weeks = computed(() => {
  const start = startOfMonth(viewDate.value)
  const end = endOfMonth(viewDate.value)
  const gridStart = new Date(start); gridStart.setDate(start.getDate() - start.getDay())
  const gridEnd = new Date(end); gridEnd.setDate(end.getDate() + (6 - end.getDay()))
  const days: { date: Date; inMonth: boolean }[] = []
  const cur = new Date(gridStart)
  while (cur <= gridEnd) { days.push({ date: new Date(cur), inMonth: cur.getMonth() === viewDate.value.getMonth() }); cur.setDate(cur.getDate()+1) }
  const chunks: typeof days[] = []
  for (let i=0;i<days.length;i+=7) chunks.push(days.slice(i,i+7))
  return chunks
})
function prevMonth(){ viewDate.value = addMonths(viewDate.value,-1) }
function nextMonth(){ viewDate.value = addMonths(viewDate.value,1) }
function selectDate(d: Date){ if (d.getMonth()!==viewDate.value.getMonth()) return; selectedDate.value = d }
const times = ['5:30 PM','6:30 PM','7:30 PM','8:30 PM','9:30 PM']
function chooseTime(t:string){ selectedTime.value = t }

/* عرض قيم التأكيد */
const datePill = computed(() =>
  selectedDate.value
    ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(selectedDate.value)
    : ''
)
const timePill = computed(() => selectedTime.value ?? '')
</script>

<template>
  <section class="bg-white">
   <!-- Breadcrumb -->
       <BreadcrumbHeader :items="[
      { label: 'Home', to: '/', icon: true },
      { label: 'Book' }
    ]" title="Book" bg-class="bg-[#F6F9FF]" border-class="border-gray-100" title-align="center"
      :uppercase-title="false" separator="›" />
      
    <div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
     

      <!-- Heading -->
      <header>
        <h1 class="text-3xl font-extrabold text-blue-900 sm:text-4xl">Book Your Appointment Now</h1>
        <p class="mt-2 max-w-2xl text-gray-500">Choose the appropriate service and select a time that suits you.</p>
      </header>

      <!-- Stepper -->
      <div class="relative mt-8">
        <div class="absolute left-0 right-0 top-6 h-0.5 bg-blue-200 lg:mx-52 md:mx-36 mx-12"></div>
        <div class="relative grid grid-cols-3 gap-4">
          <!-- step 1 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full shadow"
                 :class="step===1 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm" :class="step===1 ? 'text-blue-900' : 'text-gray-500'">Contact information</p>
          </div>
          <!-- step 2 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full shadow"
                 :class="step===2 ? 'bg-sky-400 text-white' : 'bg-gray-200 text-gray-500'">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm13 8H4v10h16V10Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm" :class="step===2 ? 'text-sky-500' : 'text-gray-500'">Time& Date</p>
          </div>
          <!-- step 3 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full shadow"
                 :class="step===3 ? 'bg-sky-400 text-white' : 'bg-gray-200 text-gray-500'">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v10h2V6h16v12H8v2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm" :class="step===3 ? 'text-sky-500' : 'text-gray-500'">Book Now</p>
          </div>
        </div>
      </div>

      <!-- STEP 1 -->
      <div v-if="step===1" class="mt-10 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div class="grid gap-0 sm:grid-cols-[220px_1fr]">
          <div class="rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none sm:rounded-bl-2xl bg-[#E7F8FF] px-6 py-8">
            <span class="inline-flex items-center rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">The first step</span>
            <p class="mt-6 text-sm text-sky-900/80 leading-6">Enter your data here (Name, phone, email…)</p>
          </div>

          <form class="px-6 py-8" @submit.prevent="next">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">Full Name</label>
                <input v-model="form.fullName" type="text" placeholder="eg: John Doe"
                       class="w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm focus:border-blue-500 outline-none"/>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">company name</label>
                <div class="flex items-center rounded-md border border-gray-200 bg-[#F4F7FE] px-3">
                  <input v-model="form.company" placeholder="Select" class="w-full bg-transparent py-2.5 text-sm outline-none"/>
                  <svg viewBox="0 0 20 20" class="h-4 w-4 text-gray-400"><path fill="currentColor" d="M5.5 7.5 10 12l4.5-4.5"/></svg>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">Email</label>
                <input v-model="form.email" type="email" placeholder="eg: john@email.com"
                       class="w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm focus:border-blue-500 outline-none"/>
              </div>
              <div class="md:row-span-2">
                <label class="mb-2 block text-sm font-semibold text-gray-700">Share Your Message</label>
                <textarea v-model="form.message" rows="4" placeholder="Message"
                          class="h-[90px] w-full rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5 text-sm focus:border-blue-500 outline-none"></textarea>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">Phone Number</label>
                <div class="flex items-center gap-2 rounded-md border border-gray-200 bg-[#F4F7FE] px-3 py-2.5">
                  <div class="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm text-gray-700">
                    <img src="https://flagcdn.com/w20/sa.png" class="h-3 w-4 rounded-sm" alt="SA"/><span class="ml-1">+966</span>
                    <svg viewBox="0 0 20 20" class="ml-1 h-4 w-4 text-gray-400"><path fill="currentColor" d="M5.5 7.5 10 12l4.5-4.5"/></svg>
                  </div>
                  <input v-model="form.phone" type="tel" placeholder="543210987" class="flex-1 bg-transparent text-sm text-gray-500 outline-none"/>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <span></span>
              <button type="submit"
                class="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#1b3380]"
                :class="!step1Valid && 'opacity-60 cursor-not-allowed'">
                Next <svg viewBox="0 0 20 20" class="h-4 w-4"><path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- STEP 2 -->
      <div v-else-if="step===2" class="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <div class="grid gap-6 lg:grid-cols-[1fr_1px_280px]">
          <div>
            <div class="mb-6 flex items-center gap-4">
              <span class="inline-flex items-center rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">Time &amp; Date</span>
              <h3 class="text-lg font-semibold text-gray-800">Choose Your suit Time</h3>
            </div>

            <!-- Calendar header -->
            <div class="mb-4 flex items-center justify-between">
              <button class="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-500" @click="prevMonth">
                <svg viewBox="0 0 20 20" class="h-4 w-4"><path d="M12 5l-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="text-sm font-semibold text-gray-800">{{ monthLabel }}</div>
              <button class="grid h-7 w-7 place-items-center rounded-full bg-gray-800 text-white" @click="nextMonth">
                <svg viewBox="0 0 20 20" class="h-4 w-4"><path d="M8 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>

            <div class="grid grid-cols-7 text-center text-[11px] text-gray-400 mb-2">
              <span v-for="d in weekDays" :key="d">{{ d }}</span>
            </div>

            <div class="space-y-2">
              <div v-for="(week, wi) in weeks" :key="wi" class="grid grid-cols-7 gap-y-2 text-center">
                <button
                  v-for="day in week"
                  :key="day.date.toDateString()"
                  type="button"
                  class="mx-auto grid h-8 w-8 place-items-center rounded-full text-sm"
                  :class="[
                    day.inMonth ? 'text-gray-700' : 'text-gray-300 pointer-events-none',
                    selectedDate && sameDay(day.date, selectedDate) ? 'bg-sky-500 text-white' : (day.inMonth ? 'bg-gray-100' : ''),
                  ]"
                  @click="selectDate(day.date)"
                >
                  {{ day.date.getDate() }}
                </button>
              </div>
            </div>
          </div>

          <div class="hidden lg:block border-l border-dashed border-gray-200"></div>

          <aside class="lg:pl-6">
            <p class="mb-3 text-sm text-gray-500">
              {{
                selectedDate
                  ? new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(selectedDate)
                  : 'Select a date'
              }}
            </p>
            <div class="space-y-3">
              <button
                v-for="t in times" :key="t" type="button"
                class="w-full rounded-md border px-4 py-2 text-sm"
                :class="selectedTime === t ? 'border-sky-500 text-sky-700 bg-sky-50' : 'border-gray-200 bg-white text-gray-600'"
                @click="chooseTime(t)"
              >
                {{ t }}
              </button>
            </div>
          </aside>
        </div>

        <div class="mt-6 flex justify-between">
          <button @click="back" class="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            ‹ Back
          </button>
          <button @click="next"
            class="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#1b3380]"
            :class="!step2Valid && 'opacity-60 cursor-not-allowed'">
            Next <svg viewBox="0 0 20 20" class="h-4 w-4"><path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <!-- STEP 3 -->
      <div v-else class="mt-10 flex justify-center">
        <div class="w-full max-w-3xl rounded-[32px] border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
          <div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400 text-white">
            <svg viewBox="0 0 24 24" class="h-8 w-8"><path fill="currentColor" d="M9.5 16.2 5.8 12.5l1.4-1.4 2.3 2.3 6.3-6.3 1.4 1.4-7.7 7.7Z"/></svg>
          </div>

          <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-900 text-white">
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5"><path fill="currentColor" d="M6 2h2v2h4V2h2v2h2v14H4V4h2V2Zm10 6H4v8h12V8Z"/></svg>
              </span>
              {{ datePill }}
            </div>
            <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
                <svg viewBox="0 0 20 20" class="h-3.5 w-3.5"><path fill="currentColor" d="M10 2a8 8 0 1 0 .001 16.001A8 8 0 0 0 10 2Zm1 8V5H9v7h6v-2h-4Z"/></svg>
              </span>
              {{ timePill }}
            </div>
          </div>

          <p class="mx-auto mt-6 max-w-md text-sm leading-6 text-gray-600">
            All your data has been entered. The meeting link will be sent to your email.
          </p>

          <div class="mt-5 flex items-center justify-center gap-3">
            <button @click="back" class="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">Back</button>
            <button class="rounded-md bg-[#193A8A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#17337b]">Thanks for visiting</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل شيء عبر Tailwind */
</style>
