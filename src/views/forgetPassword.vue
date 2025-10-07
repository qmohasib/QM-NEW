<template>
  <div class="signin-container">
    <div class="signin-form">
      <img :src="small_logo" alt="Small Logo" class="logo" />
      <h2>Forget Password</h2>
      <p class="pass-description">Enter your email address below and we will send
        you a 6-digit code to reset your password.</p>
      <form @submit.prevent="handleLogin" novalidate>
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="example@gmail.com" v-model="email" required />
        <button type="submit" class="btn-login">Send</button>
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

const email = ref("");

// دالة لمعالجة طلب إعادة تعيين كلمة المرور
const handleLogin = () => {
  console.log("Password reset request for:", email.value);
  alert("Reset code sent successfully!");
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
  /* توسيط المحتوى أفقياً وعمودياً في الصفحة */
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* إعداد صورة الشعار الكبير كخلفية (يظهر بالكامل) */
  background-color: #f3f4f6; 
  background-image: url("/src/assets/GM-Huge-logo.png"); 
  background-size: contain; /* لضمان ظهور الشعار بالكامل دون قص */
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
    width: 80px; /* تم إعادة القيمة الافتراضية هنا لتكون 80px */
    height: auto;
    margin: 0 auto 1.5rem;
    display: block;
}

/* تنسيق نص الوصف تحت العنوان */
.pass-description {
    text-align: center;
    color: #333; /* لون قياسي داكن */
    margin-bottom: 2rem;
    font-size: 16px; /* حجم قياسي (تم تعديل الحجم واللون هنا) */
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
  /* لضمان ظهوره فوق الخلفية وتطبيق التوسيط */
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

/* ---------- Footer Text ---------- */
.footer-text {
  text-align: center;
  margin-top: 24px;
  font-size: 16px; /* حجم قياسي (تم تعديله) */
  color: #333; /* لون قياسي داكن (تم تعديله) */
}

/* تنسيق رابط تسجيل الدخول */
.footer-text a {
  color: #1e3a8a;
  font-weight: 700;
  text-decoration: none;
}

.footer-text a:hover {
  text-decoration: underline;
}
</style>