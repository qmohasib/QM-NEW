<template>
    <div class="signin-container">
      <div class="signin-form">
        <img :src="small_logo" alt="Small Logo" class="logo" />
        <h2>Check your mail now</h2>
        <p class="pass-description">
          Please check your email inbox and enter the code here that was sent to you.
          <br>
          If you did not receive an email, the code will be resent automatically.
        </p>
  
        <form @submit.prevent="handleVerification" novalidate>
          <input id="OTP"
                 type="text"
                 placeholder="Enter 6-digit code"
                 v-model="otpCode"
                 required
                 maxlength="6"
                 inputmode="numeric" />
  
          <button type="submit" class="btn-login">Verification</button>
  
          <p class="footer-text">
            Already have an account?
            <router-link to="/sign-in">Sign In</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import small_logo from "/src/assets/QM-logo.png";
  import huge_logo from "/src/assets/GM-Huge-logo.png";
  
  // تم تغيير اسم المتغير ليعكس أنه رمز OTP
  const otpCode = ref("");
  
  // دالة لمعالجة التحقق من الـ OTP
  const handleVerification = () => {
    if (otpCode.value.length !== 6) {
      alert("الرجاء إدخال 6 أرقام كاملة.");
      return;
    }
    console.log("OTP verification attempt for:", otpCode.value);
    // هنا سيتم وضع منطق استدعاء API التحقق
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap");
  
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: "Cairo", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  
    background-color: #f3f4f6;
    background-image: url("/src/assets/GM-Huge-logo.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  </style>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  /* تنسيق الشعار الصغير داخل النموذج */
  .signin-form .logo {
      width: 80px;
      height: auto;
      margin: 0 auto 1.5rem;
      display: block;
  }
  
  /* تنسيق نص الوصف تحت العنوان (الحجم واللون القياسي) */
  .pass-description {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
      font-size: 16px;
      line-height: 1.5;
  }
  
  /* ---------- Main Container (صندوق النموذج) ---------- */
  .signin-container {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 480px;
    min-height: auto;
    background: #fff;
    border-radius: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    gap: 2rem;
    overflow: hidden;
    z-index: 1;
    position: relative;
  }
  
  /* ---------- Form Section ---------- */
  .signin-form {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  /* تنسيق عنوان النموذج */
  .signin-form h2 {
    color: #1e3a8a;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  
  /* ---------- Input Fields ---------- */
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
    text-align: center;
    letter-spacing: 5px;
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
  
  /* ---------- Footer Text ---------- */
  .footer-text {
    text-align: center;
    margin-top: 24px;
    font-size: 16px;
    color: #333;
  }
  
  .footer-text a {
    color: #1e3a8a;
    font-weight: 700;
    text-decoration: none;
  }
  
  .footer-text a:hover {
    text-decoration: underline;
  }
  </style>

  