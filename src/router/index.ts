import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import { useUsuarioStore } from '../composable/useUsuarioStore' // não usado aqui: PerfilPage gerencia a necessidade de nome

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

// Mantemos a flag `meta.requerNome` apenas como indicador.
// Não redirecionamos mais globalmente — a própria `PerfilPage` mostra
// um formulário quando `nome` não estiver preenchido.
// (Evita loop de navegação e melhora UX.)

export default router
