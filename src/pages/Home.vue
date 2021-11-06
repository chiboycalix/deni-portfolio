<template>
  <div class="lg:w-6/12 sm:w-9/12 mt-20 text-black">
    <h1>Hello I am Deni 👋🏽</h1>
    <h1 class="my-3 product">Product Designer & UI developer</h1>
    <h1 class="font-bold">
      I love the thrill of solving problems through design with a focus on
      people, data, business and technology.
    </h1>
  </div>

  <!-- projects cards section -->
  <div class="w-full md:grid md:grid-cols-2 gap-8 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 my-20">
    <div v-for="project in projects" :key="project.id">
      <Project :src="project.imgSrc" :link="project.link"/>
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
