<template>
  <div class="">
    <ProjectIntro :title="title" :description="description"/>
  </div>
</template>

<script>
import ProjectIntro from '@/components/ProjectIntro';

export default{
  components: {
    ProjectIntro
  },
  data(){
    return {
      title: "Esquity",
      description: "A web platform bridging the financial gap between entrepreneurs and private investors. Esquity provides a platfrom for entrpreneurs to raise funds and private investors to invest."
    }
  }
}
</script>

