<template>
  <dealer-table :list="list" :tableTotalData="7"></dealer-table>
</template>

<script>

import dealerTable from '@/components/widgets/tables/dealerTable.vue';
export default {
  name: "dealers",
  components: {
    dealerTable,
  },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
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
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
        {
          orderid: "59486-XDER",
          country: {
            name: "Agoda",
            code: "BT",
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
            name: "Phillipines",
            fields: "Transportation",
          },
          status: {
            label: "Approved",
            color: "primary",
          },
          total: "$8476",
        },
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
            label: "Success",
            color: "danger",
          },
          total: "$8376",
        },
      ],
    }
  }
};
</script>

<style></style>
