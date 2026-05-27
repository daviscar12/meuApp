import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { useUsuarioStore } from '../composable/useUsuarioStore'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tarefas'
  },
  {
    path: '/tabs',
    component: () => import('../views/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/tarefas'
      },
      {
        path: 'tarefas',
        component: () => import('../views/TarefasPage.vue')
      },
      {
        path: 'tarefas/:id',
        component: () => import('../views/DetalhePage.vue')
      },
      {
        path: 'perfil',
        component: () => import('../views/PerfilPage.vue'),
        meta: { requerNome: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  const usuStore = useUsuarioStore()

  if (to.meta.requerNome && !usuStore.nome.value) {
    next('/tabs/tarefas')
  } else {
    next()
  }
})

export default router
