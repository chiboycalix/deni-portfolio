<template>
  <div class="
  text-black
    my-10 
    xxxs:px-5
    xxs:px-10
    lg:px-20
    xl:px-72 
    ">
    <h1>Hello I am Deni 👋🏽</h1>
    <h1 class="my-3 product">Product Designer & UI developer</h1>
    <h1 class="font-bold">
      I love the thrill of solving problems through design with a focus on
      people, data, business and technology.
    </h1>
  </div>

  <!-- projects cards section -->
  <div class="
      xxxs:px-5
      xxs:px-10 
      sm:grid sm:grid-cols-1 sm:px-10 sm:gap-6
      md:grid-cols-2
      lg:px-20
      xl:px-72
      ">
    <div v-for="project in projects" :key="project.id">
      <Project :src="project.imgSrc" :link="project.link" />
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project';

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          link: '/lugah',
          imgSrc: require('@/assets/Lugah.png'),
        },
        {
          id: 2,
          link: '/agent-search-tool',
          imgSrc: require('@/assets/AgentBook.png'),
        },
        {
          id: 3,
          link: '/agent-productivity-tool',
          imgSrc: require('@/assets/Mobile.png'),
        },
        {
          id: 4,
          link: '/esquity',
          imgSrc: require('@/assets/Esquity.png'),
        },
        {
          id: 5,
          link: '/xcel',
          imgSrc: require('@/assets/XCEL.png'),
        },
        {
          id: 6,
          link: '/grocerist',
          imgSrc: require('@/assets/Grocerist.png'),
        },
      ],
    };
  },
};
</script>
<style scoped>
.product {
  letter-spacing: 0.03em;
}
</style>
