<template>
  <div class="">
    <ProjectIntro :title="title" :description="description"/>
  </div>
  <div class="my-10 absolute w-full left-0">
      <ProjectHero :heroBgImg="heroBgImg" :bgColor="'bg-heroBgColors-agentSearch'"/>
    </div>
    <div class="relative mt-96 py-10">
      <ProjectBackground />
    </div>
</template>

<script>
import ProjectIntro from '@/components/ProjectIntro';
import ProjectHero from '@/components/ProjectHero';
import ProjectBackground from '@/components/ProjectBackground';

export default{
  components: {
    ProjectIntro, 
    ProjectHero,
    ProjectBackground
  },
  data(){
    return {
      title: "AgentBook",
      description: "A web platform serving as a search tool that connects home buyers and home sellers with local real-estate agents and helps real-estate agent stay in communication with potential clients.",
      heroBgImg: require('@/assets/AgentBook_Hero_Img.png')
    }
  }
}
</script>
