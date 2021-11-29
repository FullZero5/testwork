import Home from "../views/HelloWorld.vue"
import Favorites from "../views/FavoritesPage.vue"
import About from "../views/AboutPage.vue"

const routes = [
    { path: "/",
      component: Home,
      props: (route) => ({
        query: route.query.q
      })
     },
    { path: "/favorites", component: Favorites },
    { path: "/about", component: About }
  ];

export default routes
