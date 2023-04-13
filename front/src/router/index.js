// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from '../views/Main.vue'
import BookDescription from '../views/BookDescriptionPage.vue'
import SignUp from '../views/SignUp.vue'
import MyBookshop from '../components/test.vue'
import Test from '../components/test.vue'
import BookByCategory from '../views/BookByCategory.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/bookdescription',
      name: 'BookDescription',
      component: BookDescription
    },

    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },

    {
      path: '/mybookshop',
      name: 'MyBookshop',
      component: MyBookshop
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    },

    {
      path: '/bookbycategory',
      name: 'BookByCategory',
      component: BookByCategory
    }
]
// code below is NOT to be edited
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router