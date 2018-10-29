import Vue from 'vue'
import Router from 'vue-router'
import Phones from '@/components/Phones'
import PhoneItem from '@/components/PhoneItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/phones',
      name: 'phones',
      component: Phones
    },
    {
      path:"/phones/:myId",
      component:PhoneItem
    },
    {
      path:"*",
      redirect:"/phones"
    }
  ]
})
