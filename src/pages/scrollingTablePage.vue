<template>
  <div class="box">
    <scrolling-table :table-data="tableData"></scrolling-table>
  </div>
</template>
<script>
import scrollingTable from "../components/scrollingTable/scrollingTable.vue";

export default {
  name: "scroll-table-page",
  components: {
    scrollingTable
  },
  data() {
    return {
      tableData: [
        {
          "Market ": "PL",
          "MIP name": "TVN",
          "Start Date": "12-NOV-2018",
          "End Date": "25-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "247.082,00zl",
          "Brief budget in € ": "57.769,93€",
          "Proposal in €": "57.769€",
          "Proposal file": ["linkTofile"]
        },
        {
          "Market ": "PL",
          "MIP name": "TVP",
          "Start Date": "12-NOV-2018",
          "End Date": "25-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "218.862,00zl",
          "Brief budget in € ": "51.171,85€",
          "Proposal in €": "51.171,85€",
          "Proposal file": ["file1"]
        },
        {
          "Market ": "PL",
          "MIP name": "TV Polsat",
          "Start Date": "12-NOV-2018",
          "End Date": "25-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "242.256,00zl",
          "Brief budget in € ": "56.461,57€",
          "Proposal in €": "56.461,57€",
          "Proposal file": ["linkTofile"]
        },
        {
          "Market ": "TW",
          "MIP name": "Zenith",
          "Start Date": "15-NOV-2018",
          "End Date": "28-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "5.194.504,00$",
          "Brief budget in € ": "146.766,42€",
          "Proposal in €": "146.766,42€",
          "Proposal file": ["linkTofile"]
        },
        {
          "Market ": "CZ",
          "MIP name": "Active Media Praha",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "469.105,00kć",
          "Brief budget in € ": "18.224,75€",
          "Proposal in €": "18.231,12€",
          "Proposal file": ["linkTofile1", "linkTofile2", "linkTofile3"]
        },
        {
          "Market ": "AT",
          "MIP name": "Reichi und Partner GmbH",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Draft",
          "Brief budget": "93.000,00€",
          "Brief budget in € ": "93.000,00€",
          "Proposal in €": "0€",
          "Proposal file": []
        },
        {
          "Market ": "AT",
          "MIP name": "SevenVentures Austria GmbH",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Draft",
          "Brief budget": "40.900,00€",
          "Brief budget in € ": "40.900,00€",
          "Proposal in €": "0€",
          "Proposal file": []
        },
        {
          "Market ": "HU",
          "MIP name": "RTL Adconnect",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "5.701,743,00Ft",
          "Brief budget in € ": "17.577,90€",
          "Proposal in €": "950.290,50€",
          "Proposal file": ["linkTofile"]
        },
        {
          "Market ": "HU",
          "MIP name": "YEHO Ltd",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Sent",
          "Brief budget": "2.391,00€",
          "Brief budget in € ": "2.391,00€",
          "Proposal in €": "0€",
          "Proposal file": []
        },
        {
          "Market ": "FR",
          "MIP name": "My Media",
          "Start Date": "1-NOV-2018",
          "End Date": "30-Nov-2018",
          "Status ": "Approved",
          "Brief budget": "0€",
          "Brief budget in € ": "0€",
          "Proposal in €": "0€",
          "Proposal file": []
        }
      ]
    };
  }
};
</script>
