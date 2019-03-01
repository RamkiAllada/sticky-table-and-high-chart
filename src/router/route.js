import Vue from "vue";
import Router from "vue-router";
import dataChartsPage from "../pages/dataChartPage.vue";
import scrollingTablePage from "../pages/scrollingTablePage.vue";
import homePage from "../pages/homePage.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    {
      path: "/dataCharts",
      name: "dataCharts",
      component: dataChartsPage
    },
    {
      path: "/scrollingTable",
      name: "scrollingTable",
      component: scrollingTablePage
    }
  ]
});
