<template>
  <div :class="bgColor" class="flex justify-center py-5 w-full">
    <img v-bind:src="heroBgImg" class="w-4/12"/>
  </div>
</template>

<script>
export default {
  props: {
    heroBgImg: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    mounted(){
      console.log("this.bgColor")
    }
  }
}
</script>
