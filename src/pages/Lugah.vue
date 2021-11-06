<template>
  <div class="">
    <div>
      <ProjectIntro :title="title" :description="description" />
    </div>
    <div class="my-10 absolute w-full left-0">
      <ProjectHero :heroBgImg="heroBgImg" :bgColor="'bg-heroBgColors-lugah'"/>
    </div>
    <div class="relative mt-96 py-20">
      <ProjectBackground />
    </div>
  </div>
</template>

<script>
import ProjectIntro from '@/components/ProjectIntro';
import ProjectHero from '@/components/ProjectHero';
import ProjectBackground from '@/components/ProjectBackground';

export default {
  components: {
    ProjectIntro,
    ProjectHero,
    ProjectBackground
  },
  data() {
    return {
      title: 'Lugah',
      description:
        'Conversational AI-based chatbot application for online banking system to help improve customer support and personal banking.',
      heroBgImg: require('@/assets/Lugah_Hero_Img.png'),
    };
  },
};
</script>
