import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart
  },
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      /**
       * chart configuration
       */
      chartOptions: {
        chart: { type: "column" },
        legend: {
          layout: "horizontal",
          align: "center",
          verticalAlign: "top",
          floating: true,
          backgroundColor: "#FFFFFF"
        },
        xAxis: {
          /**
           * setting the x-axis coordinates to code present under mip
           */
          categories: this.data.map(key => key.mip.code)
        },
        yAxis: {
          labels: {
            /**
             * the below function returns the y axis coordinates in euros
             */
            formatter: function() {
              return this.axis.defaultLabelFormatter.call(this) + "€";
            }
          },
          /**
           * step value after each coordinate
           */
          tickInterval: 10000,
          title: {
            enabled: false
          }
        },
        /**
         * tooltip in shared format
         */
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} €</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        colors: ["#779f4a", "#ecab58", "#6a737c"],
        series: this.getManipulatedData(),
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 0
          }
        }
      }
    };
  },
  methods: {
    /**
     * takes the data as input
     *  and manipulatting the array
     * as per the desired format
     */
    getManipulatedData() {
      let manipulatedArr = [];
      this.data.map((key, index) => {
        let item = {};
        Object.keys(this.data[0]).map((d, i) => {
          if (index == i - 1 && i !== 0) {
            item = {
              ...item,
              id: d,
              name:
                d === "briefNetSpendInEuro"
                  ? "Brief"
                  : d === "postNetSpendInEuro"
                  ? "Postlog Spend"
                  : d === "proposalSpendInEuro"
                  ? "Proposal"
                  : ""
            };
          }
        });
        item = {
          ...item,
          data: this.data.map(arr => (arr[item.id] ? arr[item.id] : 0))
        };
        manipulatedArr.push(item);
      });
      return manipulatedArr;
    }
  }
};
