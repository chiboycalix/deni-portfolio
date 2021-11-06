<template>
  <div class="flex justify-between align-center">
    <div>
      <p class="font-light text-xs text-gray-500">Back to Projects</p>
      <h1 class="font-bold text-6xl my-4">{{title}}</h1>
      <p class="font-light text-sm text-gray-500">Mobile & Web App</p>
    </div>
    <div class="w-6/12 mt-8">
      <p class="w-5/6 font-light text-sm leading-7">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    }
  }
}

</script>
