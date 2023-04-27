import {pinia} from "@/main";
import {useUserStore} from "@/stores/user";
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/gallery/creative-space',
      name: 'CreativeSpace',
      component: () => import('../views/CreativeSpace.vue')
    },
    {
      path: '/gallery/theme-painting',
      name: 'ThemePainting',
      component: () => import('../views/ThemePainting.vue')
    },
    {
      path: '/personal-center',
      name: 'PersonalCenter',
      component: () => import('../views/PersonalCenter.vue')
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../views/CreateView.vue')
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore(pinia);
  if (userStore.token === ''){
    if (to.name === 'PersonalCenter') {
      next({name: 'home'});
    }else {
      next();
    }
  }
  next();
});

export default router
