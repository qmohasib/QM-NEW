<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'

type Msg = { id: string; role: 'user' | 'assistant'; text: string; ts: number }

const props = withDefaults(defineProps<{
  brandColor?: string              // اللون الرئيسي
  placeholder?: string             // نص الحقل
  openByDefault?: boolean          // يفتح الويدجت افتراضيًا
  position?: 'br' | 'bl'           // مكان الزر: يمين/يسار
  title?: string                   // عنوان الشات
  zIndex?: number                  // Z-index
}>(), {
  brandColor: '#1F3B86',
  placeholder: 'Type your message…',
  openByDefault: false,
  position: 'br',
  title: 'Assistant',
  zIndex: 60,
})

const open = ref(!!props.openByDefault)
const input = ref('')
const msgs = ref<Msg[]>([
  { id: uuid(), role: 'assistant', text: 'Hi! How can I help you today?', ts: Date.now() }
])
const busy = ref(false)
const panelRef = ref<HTMLElement|null>(null)
const listRef = ref<HTMLElement|null>(null)

function toggle() { open.value = !open.value }
function close() { open.value = false }

function send() {
  const text = input.value.trim()
  if (!text || busy.value) return
  const u: Msg = { id: uuid(), role: 'user', text, ts: Date.now() }
  msgs.value.push(u)
  input.value = ''
  scrollToBottom()

  // رد تجريبي (بدّله لاحقًا باستدعاء API)
  busy.value = true
  setTimeout(() => {
    const a: Msg = {
      id: uuid(),
      role: 'assistant',
      text: `You said: “${u.text}”. How else can I assist?`,
      ts: Date.now()
    }
    msgs.value.push(a)
    busy.value = false
    scrollToBottom()
  }, 650)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}
function onClickOutside(e: MouseEvent) {
  if (!open.value) return
  const t = e.target as Node
  if (panelRef.value && !panelRef.value.contains(t)) {
    // لا تغلق عند الضغط على زر الفاب نفسه
    const fab = document.getElementById('floating-assistant-fab')
    if (fab && fab.contains(t)) return
    close()
  }
}
function scrollToBottom() {
  nextTick(() => {
    if (!listRef.value) return
    listRef.value.scrollTop = listRef.value.scrollHeight
  })
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('mousedown', onClickOutside)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('mousedown', onClickOutside)
})

// كشف إدخال Enter للإرسال + Shift+Enter لسطر جديد
function onTextareaKey(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
</script>

<template>
  <!-- زر عائم -->
  <button
    :id="'floating-assistant-fab'"
    class="fixed bottom-6 rounded-full p-0.5 shadow-xl ring-1 ring-black/5 focus:outline-none focus:ring-4 transition cursor-pointer"
    :class="[position==='br' ? 'right-6' : 'left-6']"
    :style="{ zIndex: props.zIndex }"
    @click="toggle"
    aria-label="Open assistant"
  >
    <span class="relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white"
          :style="{ backgroundColor: props.brandColor }">
      <!-- فقاعة محادثة -->
      <svg viewBox="0 0 24 24" class="h-7 w-7"><path fill="currentColor"
        d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H9l-5 5v-5H5a3 3 0 0 1-3-3V5Z"/></svg>
      <!-- نقطة حالة -->
      <span class="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
    </span>
  </button>

  <!-- لوحة الشات -->
  <div
    ref="panelRef"
    class="fixed bottom-24 w-[360px] max-w-[92vw] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 transition-all"
    :class="[position==='br' ? 'right-6' : 'left-6', open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4']"
    :style="{ zIndex: props.zIndex }"
    role="dialog" aria-modal="true" aria-label="Assistant chat"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="grid h-8 w-8 place-items-center rounded-full text-white" :style="{ backgroundColor: props.brandColor }">
          <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/></svg>
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-800">{{ props.title }}</p>
          <p class="text-[11px] text-gray-400">Online • typically replies in seconds</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button class="grid h-8 w-8 place-items-center rounded-md text-gray-500 hover:bg-gray-50" @click="close" aria-label="Close">
          <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M6.4 4.98 4.98 6.4 10.6 12l-5.6 5.6L6.4 19.98 12 14.4l5.6 5.6 1.42-1.42L13.4 12l5.6-5.6L17.6 4.98 12 10.6 6.4 4.98Z"/></svg>
        </button>
      </div>
    </div>

    <!-- Messages -->
    <div ref="listRef" class="max-h-[360px] min-h-[200px] overflow-y-auto bg-white px-3 py-3">
      <div class="space-y-3">
        <div v-for="m in msgs" :key="m.id" class="flex" :class="m.role==='user' ? 'justify-end' : 'justify-start'">
          <div
            class="max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-5"
            :class="m.role==='user'
              ? 'bg-[var(--bubble-user)] text-white'
              : 'bg-gray-100 text-gray-800'"
            :style="m.role==='user' ? { '--bubble-user': props.brandColor } : {}"
          >
            {{ m.text }}
          </div>
        </div>
        <div v-if="busy" class="flex justify-start">
          <div class="rounded-2xl bg-gray-100 px-3 py-2">
            <span class="inline-flex items-center gap-1">
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500 [animation-delay:0ms]"></span>
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500 [animation-delay:120ms]"></span>
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500 [animation-delay:240ms]"></span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Input -->
    <div class="border-t border-gray-100 bg-white p-3">
      <div class="flex items-end gap-2">
        <textarea
          v-model="input"
          :placeholder="props.placeholder"
          rows="1"
          @keydown="onTextareaKey"
          class="min-h-[40px] max-h-[120px] w-full resize-y rounded-xl border border-gray-200 px-3 py-2 text-[13px] leading-5 outline-none placeholder:text-gray-400 focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
          :style="{ '--brand': props.brandColor }"
        />
        <button
          class="grid h-10 w-10 place-items-center rounded-xl text-white shadow transition hover:opacity-95 disabled:opacity-50"
          :style="{ backgroundColor: props.brandColor }"
          :disabled="!input.trim() || busy"
          @click="send"
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="m2 21 21-9L2 3v7l15 2-15 2v7Z"/></svg>
        </button>
      </div>
      <!-- Quick suggestions -->
      <div class="mt-2 flex flex-wrap gap-2">
        <button
          class="rounded-full border border-gray-200 px-3 py-1 text-[11px] text-gray-600 hover:bg-gray-50"
          @click="input = 'Help me choose a package'; $nextTick(() => send())">
          Help me choose a package</button>
        <button
          class="rounded-full border border-gray-200 px-3 py-1 text-[11px] text-gray-600 hover:bg-gray-50"
          @click="input = 'What are your prices?'; $nextTick(() => send())">
          What are your prices?</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* تحسين سكرول ناعم للرسائل */
div[ref="listRef"] { scroll-behavior: smooth; }
</style>
