<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h3>Etiket Ekle</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">İsim</span>
                <el-input v-model="name"> </el-input>
              </div>
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">Script &amp; Style:</span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2 }"
                  v-model="scrtp"
                >
                </el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 d-flex justify-content-end">
                <div
                  class="col-1 d-flex justify-content-center align-items-end pulse"
                >
                  <!-- araba butonu -->
                  <el-button
                    icon="el-icon-plus"
                    @click="setTag"
                    circle
                  ></el-button>
                  <span class="pulse-ring"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <tagManagerTable :list="list" :tableTotalData="10" />
      </div>
    </div>
  </div>
</template>

<script>
import tagManagerTable from "@/components/widgets/tables/tagManagerTable.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
export default {
  components: { tagManagerTable },
  data() {
    return {
      name: null,
      scrtp: null,
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
  methods: {
    async setTag() {
      this.dataDone();
    },
    async dataDone() {
      Swal.fire({
        text: "Her Şey Tamam! Verileri Kaydettik",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Tamam",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        //window.location.reload();
      });
    },
  },
};
</script>

<style></style>
