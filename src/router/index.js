import { createRouter, createWebHistory } from 'vue-router'
import MenuInicial from '../views/MenuInicial.vue'
import Perfil from '../views/Perfil.vue'
import ConfiguracoesLoja from '../views/ConfiguracoesLoja.vue'
import ListaProdutos from '../views/ListaProdutos.vue'
import AdicionarProdutos from '../views/AdicionarProdutos.vue'
import ImportarProdutos from '../views/ImportarProdutos.vue'
import Template from '../views/Template.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuInicial
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: ConfiguracoesLoja
    }, 
    {
      path: '/lista',
      name: 'lista',
      component: ListaProdutos
    },
    {
      path: '/adicionar',
      name: 'adicionar',
      component: AdicionarProdutos
    },
    {
      path: '/importar',
      name: 'importar',
      component: ImportarProdutos
    }, 
    {
      path: '/template',
      name: 'template',
      component: Template
    }
  ]
})

export default router
