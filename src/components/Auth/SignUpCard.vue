<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const show = ref(false)

const emit = defineEmits<{
  (e:'switch', mode:'signin'|'signup'): void
}>()

</script>

<template>
  <div class="rounded-[28px] bg-white p-8 shadow-[0_25px_70px_rgba(21,38,84,.10)] ring-1 ring-black/5">
    <h1 class="text-center text-3xl font-extrabold text-[#1F3B86]">Create Account</h1>

    <div class="mt-8">
      <label class="mb-2 block text-[18px] font-semibold">Full Name</label>
      <input v-model="name" type="text" placeholder="Your name"
             class="w-full rounded-xl border border-[#1F3B86]/45 px-4 py-3 focus:border-[#1F3B86] focus:ring-2 focus:ring-[#1F3B86]/20"/>
    </div>

    <div class="mt-6">
      <label class="mb-2 block text-[18px] font-semibold">Email</label>
      <input v-model="email" type="email" placeholder="example@gmail.com"
             class="w-full rounded-xl border border-[#1F3B86]/45 px-4 py-3 focus:border-[#1F3B86] focus:ring-2 focus:ring-[#1F3B86]/20"/>
    </div>

    <div class="mt-6">
      <label class="mb-2 block text-[18px] font-semibold">Password</label>
      <div class="relative">
        <input v-model="password" :type="show?'text':'password'" placeholder="**********"
               class="w-full rounded-xl border border-[#1F3B86]/45 px-4 py-3 pr-11 focus:border-[#1F3B86] focus:ring-2 focus:ring-[#1F3B86]/20"/>
        <button type="button" @click="show=!show" class="absolute inset-y-0 right-3 grid w-8 place-items-center text-[#1F3B86]">
          <svg v-if="!show" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 5C6.5 5 2.2 9.2 1 12c1.2 2.8 5.5 7 11 7s9.8-4.2 11-7c-1.2-2.8-5.5-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M2.3 1.7 1 3l3.2 3.2C2.2 7.9 1 9.9 1 12c1.2 2.8 5.5 7 11 7 2 0 3.8-.5 5.3-1.2L21 23l1.3-1.3L2.3 1.7Z"/></svg>
        </button>
      </div>
    </div>

    <button class="mt-6 w-full rounded-xl bg-[#1F3B86] px-5 py-3.5 text-[17px] font-semibold text-white">
      Create account
    </button>

    <div class="my-6 flex items-center gap-4">
      <div class="h-px flex-1 bg-gray-200"></div><span class="text-sm text-gray-400">OR</span><div class="h-px flex-1 bg-gray-200"></div>
    </div>

    <button class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="h-5 w-5" alt="google"/> Continue With Google
    </button>

    <p class="mt-8 text-center text-[15px] text-gray-400">
      Already have an account?
       <button
      type="button"
      class="font-semibold text-[#1F3B86] underline-offset-2  cursor-pointer"
      @click="emit('switch','signin')"
    >
      Sign In
    </button>
    </p>
  </div>
</template>
