import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '@/components/Chat.vue'
import Welcome from '@/components/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    // telling this object that we want to pass props to this component
    props: true,
    // intercepting the component before its been loaded (route guards)
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next()
      } else {
        next({ name: 'Welcome' })
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
