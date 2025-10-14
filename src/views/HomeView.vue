<script setup>
import Footer from '@/components/Footer/Footer.vue';
import SectionAboutUs from '@/components/Home/SectionAboutUs.vue';
import SectionFaqSection from '@/components/Home/SectionFaqSection.vue';
import SectionOne from '@/components/Home/SectionOne.vue';
import SectionOurCustomer from '@/components/Home/SectionOurCustomer.vue';
import SectionOurServices from '@/components/Home/SectionOurServices.vue';
import SectionOurVision from '@/components/Home/SectionOurVision.vue';
import SectionPackage from '@/components/Home/SectionPackage.vue';
import SectionPartner from '@/components/Home/SectionPartner.vue';
import SectionRecentBlogs from '@/components/Home/SectionRecentBlogs.vue';
import SectionRegisterInterest from '@/components/Home/SectionRegisterInterest.vue';
import SectionTow from '@/components/Home/SectionTow.vue';


// logo penter
import airbnb from '@/assets/icon/clients/_Client logo.svg'
import hubspot from '@/assets/icon/clients/_Client logo (1).svg'
import google from '@/assets/icon/clients/_Client logo (2).svg'
import microsoft from '@/assets/icon/clients/_Client logo (3).svg'
import walmart from '@/assets/icon/clients/g15.svg'
import fedex from '@/assets/icon/clients/Layer 2.svg'


</script>

<template>
<div class="">

  <SectionOne />
  <SectionTow  :speed="24" :gapPx="72" :logos="[
  { src:airbnb, alt:'Airbnb' },
  { src:hubspot, alt:'hubspot' },
  { src:google, alt:'google' },
  { src:microsoft, alt:'microsoft' },
  { src:walmart, alt:'walmart' },
  { src:fedex, alt:'fedex' },
  
]" />
  <SectionOurServices />
  
  <SectionAboutUs />

  <SectionPackage />

  <SectionOurVision />

  <SectionPartner />

  <SectionOurCustomer />

  <SectionFaqSection />

  <SectionRecentBlogs />

  <SectionRegisterInterest />

  <Footer />

</div>

</template>

<style scoped>

</style>