<template>
    <div class="signin-image">
      <img src="@/assets/log-in-img.svg" alt="Sign In Image" />
    </div>
  
    <div class="signin-container">
      <div class="signin-form">
        <h2>Sign In</h2>
  
        <form @submit.prevent="handleLogin" novalidate>
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="example@gmail.com" v-model="email" required />
  
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="********" v-model="password" required />
  
          <button type="submit" class="btn-login">Sign In</button>
  
          <div class="divider">OR</div>
  
          <button type="button" class="google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Continue With Google
          </button>
  
          <p class="footer-text">
            Don’t have an account?
            <router-link to="/create-account">Create account</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const email = ref("");
  const password = ref("");
  
  const handleLogin = () => {
    console.log("Login attempt:", email.value, password.value);
    alert("Signed in successfully!");
  };
  </script>
  
  <!-- ✅ Global Styles -->
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap");
  
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #f3f4f6;
    font-family: "Cairo", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  
  <!-- ✅ Scoped Component Styles -->
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  /* ---------- Main Container ---------- */
  .signin-container {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 643px;
    min-height: 75vh;
    background: #fff;
    border-radius: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    gap: 2rem;
    overflow: hidden;
  }
  
  /* ---------- Image Section ---------- */
  .signin-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .signin-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: inherit;
  }
  
  /* ---------- Form Section ---------- */
  .signin-form {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .signin-form h2 {
    color: #1e3a8a;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  
  /* ---------- Input Fields ---------- */
  label {
    font-size: 1rem;
    color: #333;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 14px 12px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    margin-bottom: 20px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
    font-family: "Cairo", sans-serif;
  }
  
  input:focus {
    border-color: #59cbef;
    box-shadow: 0 0 0 4px rgba(89, 203, 239, 0.12);
  }
  
  /* ---------- Buttons ---------- */
  .btn-login {
    background-color: #1e3a8a;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 14px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: background-color 0.18s;
  }
  
  .btn-login:hover {
    background-color: #172b68;
  }
  
  .divider {
    text-align: center;
    margin: 22px 0;
    color: #6b7280;
    font-size: 13px;
  }
  
  /* ---------- Google Button ---------- */
  .google-btn {
    width: 100%;
    border: 1px solid #d1d5db;
    background: #fff;
    padding: 12px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.18s;
  }
  
  .google-btn:hover {
    background-color: #f9fafb;
  }
  
  .google-btn img {
    width: 20px;
    height: 20px;
  }
  
  /* ---------- Footer Text ---------- */
  .footer-text {
    text-align: center;
    margin-top: 24px;
    font-size: 14px;
    color: #374151;
  }
  
  .create-link {
    color: #1e3a8a;
    font-weight: 700;
    text-decoration: none;
  }
  
  .create-link:hover {
    text-decoration: underline;
  }
  
  /* ---------- Responsive Layout ---------- */
  @media (min-width: 768px) {
    .signin-container {
      flex-direction: row;
      align-items: stretch;
      padding: 3rem;
      gap: 0;
    }
  
    .signin-image {
      flex: 1;
      border-radius: 2rem 0 0 2rem;
    }
  
    .signin-form {
      flex: 1;
      max-width: none;
      padding: 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .signin-container {
      padding: 4rem;
    }
  
    .signin-form {
      padding: 4rem;
    }
  
    .signin-form h2 {
      font-size: clamp(1.75rem, 2vw, 2.25rem);
    }
  }
  </style>
  