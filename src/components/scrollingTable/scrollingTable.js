import VueScrollingTable from "vue-scrolling-table";
export default {
  name: "SampleApp",
  components: {
    VueScrollingTable
  },
  /**
   * table configuration and
   *  data being passed as props
   */
  props: {
    tableData: {
      type: Array
    },
    scrollVertical: {
      type: Boolean,
      default: true
    },
    scrollHorizontal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      includeFooter: false,
      deadAreaColor: "#DDDDDD",
      freezeFirstColumn: true,
      columns: this.getColumnNames(),
      maxRows: 100
    };
  },
  methods: {
    /**
     * generates the column names
     */
    getColumnNames() {
      let columnArr = [];
      Object.keys(this.tableData[0]).map(key => {
        let colConfig = {};
        colConfig.id = key;
        colConfig.title = key;
        columnArr.push(colConfig);
      });
      return columnArr;
    }
  },
  computed: {
    items() {
      return this.tableData.slice(0, this.maxRows);
    }
  }
};
