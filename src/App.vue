<template>
<div class="w-full">
  <Header />
    <div class="max-w-6xl mx-auto py-4 px-6">
       <router-view></router-view>
    </div>
  <Footer />
</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
</style>
