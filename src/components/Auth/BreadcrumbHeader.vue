<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Crumb = {
  label: string
  to?: string | Record<string, any> // يدعم اسم الراوت أو path
  icon?: boolean                    // لإظهار أيقونة Home للعُنصر الأول
}

const props = withDefaults(defineProps<{
  items: Crumb[]                    // عناصر المسار (آخر عنصر عادة current)
  current?: string                  // اسم الصفحة الحالية لو أردت تمريره بشكل صريح
  title?: string                    // العنوان الكبير
  bgClass?: string                  // خلفية الشريط
  borderClass?: string              // لون الحد السفلي
  titleAlign?: 'left' | 'center' | 'right'
  uppercaseTitle?: boolean
  separator?: string                // الفاصل بين العناصر (افتراضي ›)
}>(), {
  items: () => ([
    { label: 'Home', to: '/', icon: true },
    { label: 'Contact Us' }
  ]),
  current: undefined,
  title: 'Contact US',
  bgClass: 'bg-[#F6F9FF]',
  borderClass: 'border-gray-100',
  titleAlign: 'center',
  uppercaseTitle: false,
  separator: '›',
})
</script>

<template>
  <header class="border-b" :class="borderClass">
    <div :class="['w-full', bgClass]">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <!-- Breadcrumb -->
        <nav
          class="text-xs text-gray-500"
          aria-label="Breadcrumb"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <ol class="inline-flex items-center gap-2">
            <li
              v-for="(c, i) in items"
              :key="i"
              class="inline-flex items-center gap-1"
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <!-- Link or text -->
              <RouterLink
                v-if="c.to"
                :to="c.to"
                class="inline-flex items-center gap-1 hover:text-[#2A5AC1] transition-colors"
                itemprop="item"
              >
                <!-- optional home icon -->
                <svg
                  v-if="c.icon"
                  viewBox="0 0 20 20"
                  class="h-3.5 w-3.5 text-gray-400"
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M10 2 2 8v10h5v-5h6v5h5V8z" />
                </svg>
                <span itemprop="name">{{ c.label }}</span>
              </RouterLink>

              <span v-else class="inline-flex items-center gap-1 text-[#2A5AC1]" itemprop="item">
                <svg
                  v-if="c.icon"
                  viewBox="0 0 20 20"
                  class="h-3.5 w-3.5 text-gray-400"
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M10 2 2 8v10h5v-5h6v5h5V8z" />
                </svg>
                <span itemprop="name">{{ c.label }}</span>
              </span>

              <meta itemprop="position" :content="String(i + 1)" />

              <!-- separator (hide after last) -->
              <span
                v-if="i < items.length - 1"
                class="mx-2 text-gray-300 select-none"
                aria-hidden="true"
              >{{ separator }}</span>
            </li>
          </ol>
        </nav>

        <!-- Title row -->
        <div class="mt-3 flex items-center justify-between">
          <h1
            :class="[
              'text-2xl font-extrabold text-[#2A5AC1] tracking-tight',
              titleAlign === 'center' ? 'mx-auto text-center' :
              titleAlign === 'right' ? 'ml-auto text-right' : 'mr-auto text-left',
              uppercaseTitle ? 'uppercase' : ''
            ]"
          >
            {{ title || current || items[items.length - 1]?.label }}
          </h1>

          <!-- actions slot (اختياري) -->
          <slot name="actions" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* لا حاجة لستايل إضافي؛ كل شيء عبر Tailwind */
</style>
