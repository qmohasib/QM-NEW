import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore  = defineStore('app', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const local = ref('en')

  function setLocale(loc : string){
    local.value = loc
  }

  return { count, doubleCount, increment  , local , setLocale}
})
