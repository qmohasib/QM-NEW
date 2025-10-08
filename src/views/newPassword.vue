<template>
    <div class="signin-container">
      <div class="signin-form">
        <img :src="small_logo" alt="QM Logo" class="logo" />
        
        <h2>Create a new password</h2>
        
        <p class="pass-description">
          The new password must be different from the previous passwords you have used.
        </p>
  
        <form @submit.prevent="handleResetPassword" novalidate>
          <label for="new-password">New Password</label>
          <div class="input-group">
            <input 
              id="new-password" 
              :type="showNewPassword ? 'text' : 'password'" 
              v-model="newPassword" 
              required 
            />
            <span class="toggle-password" @click="showNewPassword = !showNewPassword">
              <i :class="showNewPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </span>
          </div>
  
          <label for="confirm-password">Confirm Password</label>
          <div class="input-group">
            <input 
              id="confirm-password" 
              :type="showConfirmPassword ? 'text' : 'password'" 
              v-model="confirmPassword" 
              required 
            />
            <span class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
              <i :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </span>
          </div>
          
          <p v-if="!passwordsMatch" class="error-text">
            The new password and the view confirmed password do not match.
          </p>
  
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
  import { ref, computed } from "vue";
  import small_logo from "/src/assets/QM-logo.png";
  import huge_logo from "/src/assets/GM-Huge-logo.png";
  // افتراض أنك تستورد FontAwesome/Icons: يجب أن تكون الأيقونات متوفرة (مثل المكتبات الخارجية)
  
  // حالة حقول الإدخال
  const newPassword = ref("");
  const confirmPassword = ref("");
  
  // حالة إظهار/إخفاء كلمة المرور
  const showNewPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  // المنطق المحتسب للتحقق من تطابق كلمتي المرور
  const passwordsMatch = computed(() => {
    // لا تعرض الخطأ إلا إذا كان هناك إدخال في كلا الحقلين وتم الضغط على زر الإرسال أو تغيرت القيمة
    if (confirmPassword.value.length > 0 && newPassword.value !== confirmPassword.value) {
      return false;
    }
    return true;
  });
  
  // دالة لمعالجة إرسال النموذج
  const handleResetPassword = () => {
    if (!passwordsMatch.value) {
      alert("كلمتا المرور غير متطابقتين.");
      return;
    }
    
    if (newPassword.value.length < 8) { // مثال على تحقق بسيط
      alert("كلمة المرور يجب أن لا تقل عن 8 أحرف.");
      return;
    }
  
    console.log("Password reset attempt with new password:", newPassword.value);
    // هنا سيتم وضع منطق استدعاء API لتعيين كلمة المرور الجديدة
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
    /* (تم إبقاء الخلفية كما طلبت سابقاً) */
    background-image: url("/src/assets/GM-Huge-logo.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  </style>
  
  <style scoped>
  /* إضافة الأيقونات: افتراض أن FontAwesome أو ما شابه متاح */
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
  
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
  
  /* تنسيق نص الوصف تحت العنوان */
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
  
  /* ---------- Input Fields and Grouping (لأيقونة العين) ---------- */
  label {
    font-size: 1rem;
    color: #333;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }
  
  /* حاوية للـ input والأيقونة */
  .input-group {
      position: relative;
      margin-bottom: 20px;
  }
  
  /* تعديل الـ input ليتناسب مع أيقونة العين */
  .input-group input {
    width: 100%;
    padding: 14px 40px 14px 12px; /* زيادة المساحة على اليمين للأيقونة */
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 15px;
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
    font-family: "Cairo", sans-serif;
    margin-bottom: 0; /* إزالة الـ margin-bottom من الـ input نفسه */
  }
  
  .input-group input:focus {
    border-color: #59cbef;
    box-shadow: 0 0 0 4px rgba(89, 203, 239, 0.12);
  }
  
  /* أيقونة إظهار كلمة المرور (مطابقة للتصميم) */
  .toggle-password {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      cursor: pointer;
      color: #1e3a8a; /* لون الأيقونة */
  }
  
  /* تنسيق رسالة الخطأ (مطابقة للتصميم) */
  .error-text {
      color: #f73d32; /* لون أحمر */
      font-size: 12px;
      margin-top: -15px; /* رفعها للأعلى لتكون قريبة من حقل الإدخال */
      margin-bottom: 20px;
      text-align: left;
      font-weight: 400;
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