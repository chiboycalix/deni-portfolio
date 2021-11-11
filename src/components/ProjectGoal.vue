<template>
  <div :class="bgColor" class="w-full px-72 py-6">
    <ul v-for="goal in projectGoal.goals" :key="goal.id" class="text-white">
      <li class="list-disc">{{goal.text}}</li>
    </ul>
    <div class="mt-10 w-2/5 m-auto leading-10">
      <p class="text-white">{{projectGoal.quotedText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    projectGoal: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
p{
 /* font-family: 'Poppins', sans-serif; */
  font-family: 'Satisfy', cursive;
  font-style: italic;
  font-size: 1.2rem;
}

</style>
