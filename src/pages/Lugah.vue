<!-- @format -->

<template>
  <div class="">
    <div class="px-72 py-20">
      <ProjectIntro :title="title" :description="description" />
    </div>
    <div class="w-full">
      <ProjectHero :heroBgImg="heroBgImg" :bgColor="'bg-heroBgColors-lugah'" />
    </div>
    <div class="w-full">
      <ProjectBackground />
    </div>
    <div class="w-full">
      <ProjectGoal :bgColor="'bg-projectGoalBgColors-lugah'" :projectGoal="projectGoal" :goals="goals"/>
    </div>
  </div>
</template>

<script>
import ProjectIntro from '@/components/ProjectIntro';
import ProjectHero from '@/components/ProjectHero';
import ProjectBackground from '@/components/ProjectBackground';
import ProjectGoal from '@/components/ProjectGoal';

export default {
  components: {
    ProjectIntro,
    ProjectHero,
    ProjectBackground,
    ProjectGoal
  },
  data() {
    return {
      title: 'Lugah',
      description:
        'Conversational AI-based chatbot application for online banking system to help improve customer support and personal banking.',
      heroBgImg: require('@/assets/Lugah_Hero_Img.png'),
      projectGoal: {
        title: 'The Goal',
        goals: [
          {
              id: 1,
              text: "Reduce bank costs:  allowing chatbot handle basic questions and issues and option to connect to bank agents in cases that require human intervention. Thereby relieving the pressure and inquiry volume for call centers."
            },
            {
              id: 2, 
              text: "Deliver personalized and engaging mobile banking experience to users by allowing them perform their financial tasks in a conversational manner."
            }
            
          ],
          quotedText: 'Research claims that for every query that a chatbot handles, banks save 4 minutes of an agent’s time translating to a cost saving of 0.70 USD per query!'
      }
    };
  },
};
</script>
