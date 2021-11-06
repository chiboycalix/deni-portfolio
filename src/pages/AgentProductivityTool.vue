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
      title: "AgentBook",
      description: "Designing a mobile adaptation of the web4realty web admin portal to improve real estate agent workflow and allow them easily follow up with leads on the go. "
    }
  }
}
</script>

