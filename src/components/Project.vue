<!-- @format -->

<template>
  <div class="mb-20">
    <router-link :to="link">
      <img v-bind:src="src" class="w-full"/>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
};
</script>
