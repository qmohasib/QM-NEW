<script setup lang="ts">
import { ref, computed } from 'vue'

/** --- Stepper state (للعرض فقط هنا) --- */
var activeStep = 1 // 1=Contact, 2=Time&Date, 3=Book Now

/** --- Calendar state --- */
const viewDate = ref(new Date()) // الشهر المعروض
const selectedDate = ref<Date | null>(null)
const weekDays = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'] // كما بالصورة

const monthLabel = computed(() =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(
    viewDate.value
  )
)

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}
function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0)
}
function addMonths(d: Date, m: number) {
  return new Date(d.getFullYear(), d.getMonth() + m, 1)
}

/** مصفوفة الأسابيع (كل أسبوع = 7 أيام) */
const weeks = computed(() => {
  const start = startOfMonth(viewDate.value)
  const end = endOfMonth(viewDate.value)

  // بداية الشبكة (الأحد في عمود 0)
  const gridStart = new Date(start)
  gridStart.setDate(start.getDate() - start.getDay())

  // نهاية الشبكة
  const gridEnd = new Date(end)
  gridEnd.setDate(end.getDate() + (6 - end.getDay()))

  const days: { date: Date; inMonth: boolean }[] = []
  const cur = new Date(gridStart)
  while (cur <= gridEnd) {
    days.push({ date: new Date(cur), inMonth: cur.getMonth() === viewDate.value.getMonth() })
    cur.setDate(cur.getDate() + 1)
  }

  // قسّم إلى أسابيع
  const chunks: typeof days[] = []
  for (let i = 0; i < days.length; i += 7) chunks.push(days.slice(i, i + 7))
  return chunks
})

function prevMonth() {
  viewDate.value = addMonths(viewDate.value, -1)
}
function nextMonth() {
  viewDate.value = addMonths(viewDate.value, 1)
}
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function selectDate(d: Date) {
  // لا تسمح بتحديد أيام خارج الشهر (مثل اللقطة — باهتة وغير قابلة)
  if (d.getMonth() !== viewDate.value.getMonth()) return
  selectedDate.value = d
}

/** --- Times list --- */
const times = ['5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM', '9:30 PM']
const selectedTime = ref<string | null>(null)
function chooseTime(t: string) {
  selectedTime.value = t
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
            <div
              class="grid h-12 w-12 place-items-center rounded-full shadow"
              :class="activeStep === 1 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Contact information</p>
          </div>

          <!-- Step 2 (active - سماوي) -->
          <div class="flex flex-col items-center">
            <div
              class="grid h-12 w-12 place-items-center rounded-full shadow bg-sky-400 text-white"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm13 8H4v10h16V10Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-sky-500">Time& Date</p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-gray-200 text-gray-500 shadow">
              <svg viewBox="0 0 24 24" class="h-6 w-6">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v10h2V6h16v12H8v2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 22h6v-6H2v6Zm2-2v-2h2v2H4Z"/>
              </svg>
            </div>
            <p class="mt-2 text-sm text-gray-500">Book Now</p>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <div class="grid gap-6 lg:grid-cols-[1fr_1px_280px]">
          <!-- Left side: header + calendar -->
          <div>
            <div class="mb-6 flex items-center gap-4">
              <span class="inline-flex items-center rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                Time &amp; Date
              </span>
              <h3 class="text-lg font-semibold text-gray-800">Choose Your suit Time</h3>
            </div>

            <!-- Calendar header -->
            <div class="mb-4 flex items-center justify-between">
              <button
                class="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-500"
                @click="prevMonth"
                aria-label="Previous month"
              >
                <svg viewBox="0 0 20 20" class="h-4 w-4">
                  <path d="M12 5l-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="text-sm font-semibold text-gray-800">
                {{ monthLabel }}
              </div>
              <button
                class="grid h-7 w-7 place-items-center rounded-full bg-gray-800 text-white"
                @click="nextMonth"
                aria-label="Next month"
              >
                <svg viewBox="0 0 20 20" class="h-4 w-4">
                  <path d="M8 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Week headers -->
            <div class="grid grid-cols-7 text-center text-[11px] text-gray-400 mb-2">
              <span v-for="d in weekDays" :key="d">{{ d }}</span>
            </div>

            <!-- Weeks -->
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

          <!-- Vertical divider (منقط خفيف مثل اللقطة) -->
          <div class="hidden lg:block border-l border-dashed border-gray-200"></div>

          <!-- Right side: times -->
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
                v-for="t in times"
                :key="t"
                type="button"
                class="w-full rounded-md border px-4 py-2 text-sm text-gray-600"
                :class="selectedTime === t ? 'border-sky-500 text-sky-700 bg-sky-50' : 'border-gray-200 bg-white'"
                @click="chooseTime(t)"
              >
                {{ t }}
              </button>
            </div>
          </aside>
        </div>
      </div>

      <!-- Next button -->
      <div class="mt-6 flex justify-end">
        <button
          class="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#1b3380]"
        >
          Next
          <svg viewBox="0 0 20 20" class="h-4 w-4">
            <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* كل التنسيق عبر Tailwind */
</style>
