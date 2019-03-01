<template>
  <div id="app">
    <!--navigation header-->
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/dataCharts">Data Charts</router-link>
          </li>
          <li>
            <router-link to="/scrollingTable">Scrolling Table</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
/**
 * imports the routes of the application
 */
import router from "./router/route.js";
export default {
  name: "app",
  router
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header nav {
  background-color: #000;
}
header nav ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
}
header nav ul li a {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  display: block;
  text-decoration: none;
}
header nav ul li a.router-link-active {
  background-color: #616161;
}
</style>
