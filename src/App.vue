<template>
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
    <!-- Left Section (Image) -->
    <div class="hidden md:flex w-1/2 justify-center items-center">
      <!-- Add your image here -->
      <div
        class="w-3/4 h-3/4 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-xl font-semibold"
      >
        Image Here
      </div>
    </div>
    <!-- Right Section (Form) -->
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full md:w-1/2 max-w-md">
      <h2 class="text-2xl font-bold text-[#1E3A8A] text-center mb-6">Create Account</h2>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-gray-700 mb-1">Full Name</label>
          <input
            v-model="form.fullName"
            type="text"
            placeholder="Enter your name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59CBEF]"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@gmail.com"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59CBEF]"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Password</label>
          <div class="relative">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="********"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59CBEF]"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 text-gray-500 hover:text-[#1E3A8A]"
            >
              <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-[#1E3A8A] text-white py-2 rounded-lg font-semibold hover:bg-[#1c3681] transition"
        >
          Create account
        </button>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-3 text-gray-500">OR</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          class="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 mr-2" />
          Continue With Google
        </button>

        <p class="text-center text-gray-600 mt-4">
          Already have an account?
          <a href="/login" class="text-[#1E3A8A] font-semibold hover:underline">Sign In</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullName: '',
  email: '',
  password: ''
})

const showPassword = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
