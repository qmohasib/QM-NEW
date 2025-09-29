<script setup lang="ts">
import { useAppStore } from "@/stores/app.store";
import { useI18n } from "vue-i18n";
import Button from "primevue/button";
import { useCookies } from "@/composables/useCookies";

const app = useAppStore();
const { t, locale } = useI18n();
const cookies = useCookies();

function toggleLang() {
  locale.value = locale.value === "en" ? "ar" : "en";
  app.setLocale(locale.value);
  cookies.set("locale", locale.value);
}
</script>

<template>
  <section class="p-6 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ t("hello") }}</h1>

    <div class="flex items-center gap-3">
      <Button label="Prime Button" icon="pi pi-check" />
      <button class="px-4 py-2 rounded bg-blue-600 text-white" @click="app.increment()">
        {{ t("counter", { n: app.count }) }}
      </button>
      <button class="px-3 py-2 border rounded" @click="toggleLang">
        {{ locale === 'en' ? 'AR' : 'EN' }}
      </button>
    </div>
  </section>
</template>
