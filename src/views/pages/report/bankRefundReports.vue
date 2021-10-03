<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header h1 pt-2">Filtreleme</div>
          <div class="row card-body">
            <div class="col-6">
              <div class="row mt-3">
                <div class="col-12 d-flex justify-content-between">
                  <label
                    class="d-flex align-items-center fs-6 fw-bold form-label mb-2 ml-2"
                  >
                    Banka
                  </label>
                  <!-- gulet,motoryat,yelkenki,kabin gibi alanların filtrelenebileceği alan -->
                  <el-select class="col-9" v-model="bank" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 d-flex justify-content-between">
                  <label
                    class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                  >
                    Rapor Türü
                  </label>
                  <!-- gulet,motoryat,yelkenki,kabin gibi alanların filtrelenebileceği alan -->
                  <el-select
                    class="col-9"
                    v-model="reportType"
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 d-flex justify-content-between">
                  <label
                    class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                  >
                    İade Durumu
                  </label>
                  <!-- gulet,motoryat,yelkenki,kabin gibi alanların filtrelenebileceği alan -->
                  <el-select
                    class="col-9"
                    v-model="refundState"
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row ">
                <div class="col-12">
                  <label
                    class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                  >
                    Başlangıç Tarihi:
                  </label>
                  <!-- belirkene keyworde göre searç yapılabilecek alan -->
                  <el-input
                    placeholder="Please input"
                    type="date"
                    v-model="startDate"
                  ></el-input>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <label
                    class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                  >
                    Bitiş Tarihi:
                  </label>
                  <!-- belirkene keyworde göre searç yapılabilecek alan -->
                  <el-input
                    placeholder="Please input"
                    type="date"
                    v-model="endDate"
                  ></el-input>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  <div
                    class=" d-flex justify-content-end mt-3 align-items-end pulse"
                  >
                    <!-- araba butonu -->
                    <el-button icon="el-icon-search" circle></el-button>
                    <span class="pulse-ring"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <refundTable :list="list" :tableTotalData="10" />
      </div>
    </div>
  </div>
</template>

<script>
import refundTable from "@/components/reportpagecomp/refundTable.vue";
export default {
  components: { refundTable },
  data() {
    return {
      bank: null,
      reportType: null,
      refundState: null,
      startDate: null,
      endDate: null,
      options: [
        {
          value: "opt1",
          label: "opt1",
        },
        {
          value: "opt2",
          label: "opt2",
        },
        {
          value: "opt3",
          label: "opt3",
        },
        {
          value: "opt4",
          label: "opt4",
        },
        {
          value: "opt5",
          label: "opt5",
        },
      ],

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
      ],
    };
  },
};
</script>

<style></style>
