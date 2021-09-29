<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 ">
        <classicSaleReportChart titles="Tekne Satış Raporu" />
      </div>
      <div class="col-12 col-sm-6 ">
        <classicSaleReportChart titles="Kabin Satış Raporu" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <salesReport :list="list" type="comment" :tableTotalData="10" />
      </div>
    </div>
  </div>
</template>

<script>
import classicSaleReportChart from "@/components/reportpagecomp/classicSaleReportChart.vue";
import salesReport from "@/components/reportpagecomp/salesReport.vue";
export default {
  components: { classicSaleReportChart, salesReport },
  data() {
    return {
      list: [
        {
          orderid: "56037-XDER",
          country: {
            name: "Brasil",
            code: "PH",
          },
          date: {
            value: "05/28/2020",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "Intertico",
            fields: "Web, UI/UX Design",
          },
          status: {
            label: "Onaylandı",
            color: "success",
          },
          total: "$3560",
        },
        {
          orderid: "05822-FXSP",
          country: {
            name: "Belarus",
            code: "BY",
          },
          date: {
            value: "04/18/2021",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "Agoda",
            fields: "Houses & Hotels",
          },
          status: {
            label: "Beklemede",
            color: "warning",
          },
          total: "$4850",
        },
        {
          orderid: "4472-QREX",
          country: {
            name: "Phillipines",
            code: "BH",
          },
          date: {
            value: "07/23/2019",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "RoadGee",
            fields: "Transportation",
          },
          status: {
            label: "İptal",
            color: "danger",
          },
          total: "$8376",
        },
        {
          orderid: "00347-BCLQ",
          country: {
            name: "Argentina",
            code: "BR",
          },
          date: {
            value: "12/21/2021",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "The Hill",
            fields: "Insurance",
          },
          status: {
            label: "İade Talebi",
            color: "info",
          },
          total: "$9486",
        },
      ],
    };
  },
};
</script>

<style></style>
