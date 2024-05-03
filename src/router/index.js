import { createRouter, createWebHistory } from 'vue-router'
import MenuInicial from '../views/MenuInicial.vue'
import Perfil from '../views/Perfil.vue'
import ObjetivoLoja from '../views/ObjetivoLoja.vue'
import ListaProdutos from '../views/ListaProdutos.vue'
import AdicionarProdutos from '../views/AdicionarProdutos.vue'
import ImportarProdutos from '../views/ImportarProdutos.vue'
import CategoriasVenda from '../views/CategoriasVenda.vue'
import MetodoPagamento from '../views/MetodoPagamento.vue'
import MetodoEntrega from '../views/MetodoEntrega.vue'
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
      path: '/objetivo',
      name: 'objetivo',
      component: ObjetivoLoja
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
      path: '/categoria',
      name: 'categoria',
      component: CategoriasVenda
    },
    {
      path: '/metodo-pagamento',
      name: 'metodo-pagamento',
      component: MetodoPagamento
    },
    {
      path: '/metodo-entrega',
      name: 'metodo-entrega',
      component: MetodoEntrega
    },
    {
      path: '/template',
      name: 'template',
      component: Template
    }
  ]
})

export default router
