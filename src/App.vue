<template>
<Header />
  <div class="container mx-auto py-4 max-w-7xl px-6">
   <Home />
</div>
 
</template>

<script>
import Header from '@/components/Header'
import Home from '@/pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    Header
  }
}
</script>

<style>

</style>
