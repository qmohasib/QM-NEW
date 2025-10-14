<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const show = ref(false)

const emit = defineEmits<{
  (e:'switch', mode:'signin'|'signup'): void
}>()

</script>

<template>
  <div class="rounded-[28px] bg-white p-8 shadow-[0_25px_70px_rgba(21,38,84,.10)] ring-1 ring-black/5">
    <h1 class="text-center text-3xl font-extrabold text-[#1F3B86]">Sign In</h1>
    <p class="mt-2 text-center text-[18px] font-semibold text-gray-300">
      Don’t have an account?
       <button
      type="button"
      class="text-[#1F3B86] underline-offset-2   cursor-pointer"
      @click="emit('switch','signup')"
    >
      Create account
    </button>
    </p>

    <div class="mt-8">
      <label class="mb-2 block text-[20px] font-semibold">Email</label>
      <input v-model="email" type="email" placeholder="example@gmail.com"
             class="w-full rounded-xl border border-[#1F3B86]/45 px-4 py-3 focus:border-[#1F3B86] focus:ring-2 focus:ring-[#1F3B86]/20"/>
    </div>

    <div class="mt-6">
      <label class="mb-2 block text-[20px] font-semibold">Password</label>
      <div class="relative">
        <input v-model="password" :type="show?'text':'password'" placeholder="**********"
               class="w-full rounded-xl border border-[#1F3B86]/45 px-4 py-3 pr-11 focus:border-[#1F3B86] focus:ring-2 focus:ring-[#1F3B86]/20"/>
        <button type="button" @click="show=!show" class="absolute inset-y-0 right-3 grid w-8 place-items-center text-[#1F3B86]">
          <svg v-if="!show" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 5C6.5 5 2.2 9.2 1 12c1.2 2.8 5.5 7 11 7s9.8-4.2 11-7c-1.2-2.8-5.5-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M2.3 1.7 1 3l3.2 3.2C2.2 7.9 1 9.9 1 12c1.2 2.8 5.5 7 11 7 2 0 3.8-.5 5.3-1.2L21 23l1.3-1.3L2.3 1.7Z"/></svg>
        </button>
      </div>
      <RouterLink to="/forgot" class="mt-2 inline-block text-[14px] text-[#1F3B86] underline">Forget password?</RouterLink>
    </div>

    <button class="mt-6 w-full rounded-xl bg-[#1F3B86] px-5 py-3.5 text-[17px] font-semibold text-white">Sign In</button>

    <div class="my-6 flex items-center gap-4">
      <div class="h-px flex-1 bg-gray-200"></div><span class="text-sm text-gray-400">OR</span><div class="h-px flex-1 bg-gray-200"></div>
    </div>

    <button class="mb-3 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="h-5 w-5" alt="google"/> Continue With Google
    </button>

    <button class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <span class="grid h-5 w-5 place-items-center rounded-md bg-[#1F3B86] text-[11px] font-bold text-white">QM</span>
      Continue With Mohasib account
    </button>

    <p class="mx-auto mt-6 max-w-sm text-center text-[12px] text-gray-500">
      By continuing, you agree to our <RouterLink to="/terms" class="font-semibold text-[#1F3B86]">Terms of Use</RouterLink>
      and acknowledge that you have read the <RouterLink to="/privacy" class="font-semibold text-[#1F3B86]">Privacy Policy</RouterLink>.
    </p>
  </div>
</template>
