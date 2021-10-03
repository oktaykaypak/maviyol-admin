<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <bankManagementTable :list="list" :tableTotalData="10" />
      </div>
    </div>
  </div>
</template>

<script>
import bankManagementTable from "@/components/widgets/tables/bankManagementTable.vue";

export default {
  name: "bank",
  components: { bankManagementTable },
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
            label: "Approved",
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
            label: "In Progress",
            color: "warning",
          },
          total: "$4850",
        },
      ],
    };
  },
};
</script>

<style></style>
