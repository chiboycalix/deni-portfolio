/** @format */

import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';
import Lugah from '@/pages/Lugah.vue';
import Xcel from '@/pages/Xcel.vue';
import Grocerist from '@/pages/Grocerist.vue';
import AgentProductivityTool from '@/pages/AgentProductivityTool.vue';
import AgentSearchTool from '@/pages/AgentSearchTool.vue';
import Esquity from '@/pages/Esquity.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lugah',
    name: 'Lugah',
    component: Lugah,
  },
  {
    path: '/xcel',
    name: 'Xcel',
    component: Xcel,
  },
  {
    path: '/grocerist',
    name: 'Grocerist',
    component: Grocerist,
  },
  {
    path: '/agent-productivity-tool',
    name: 'AgentProductivityTool',
    component: AgentProductivityTool,
  },
  {
    path: '/agent-search-tool',
    name: 'AgentSearchTool',
    component: AgentSearchTool,
  },
  {
    path: '/esquity',
    name: 'Esquity',
    component: Esquity,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
