<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h3>Genel Bilgiler</h3>
              </div>
            </div>
            <div class="row mt-3 ">
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">Telefon:</span>
                <el-input
                  placeholder="5xx xxx xx xx"
                  prefix-icon="el-icon-phone"
                  v-model="phone"
                >
                </el-input>
              </div>
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">Adres:</span>
                <el-input type="textarea" autosize v-model="address">
                </el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-success" @click="setGeneralInfo">
                  <i class="bi bi-save"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h3>Footer Menü</h3>
              </div>
            </div>
            <div class="row mt-3 ">
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">Adı:</span>
                <el-input
                  placeholder="5xx xxx xx xx"
                  prefix-icon="el-icon-phone"
                  v-model="name"
                >
                </el-input>
              </div>
              <div class="col-sm-6 d-flex align-items-center">
                <span class="demo-input-label me-3">Link:</span>
                <el-input type="textarea" autosize v-model="link"> </el-input>
              </div>
            </div>
            <div class="row mt-3 ">
              <div class="col-sm-4 d-flex align-items-center">
                <span class="demo-input-label me-3">Menü:</span>
                <el-select v-model="menusV" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="col-sm-4 d-flex align-items-center">
                <span class="demo-input-label me-3">Kategori:</span>
                <el-select v-model="categorysV" placeholder="Select">
                  <el-option
                    v-for="item in categorys"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="col-sm-4 d-flex align-items-center">
                <span class="demo-input-label me-3">Durum:</span>
                <el-select v-model="statusV" placeholder="Select">
                  <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 d-flex justify-content-end">
                <button @click="setFooter" class="btn btn-success">
                  <i class="bi bi-save"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h3>Robots.txt</h3>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 d-flex align-items-center">
                <span class="demo-input-label me-3">Text:</span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4 }"
                  v-model="text"
                >
                </el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 d-flex justify-content-end">
                <button @click="setRobotsTxt" class="btn btn-success">
                  <i class="bi bi-save"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  data() {
    return {
      text: null,
      value: null,
      menusV: null,
      categorysV: null,
      statusV: null,
      name: null,
      link: null,
      phone: null,
      address: null,
      menus: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      status: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
      ],
      categorys: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
  methods: {
    async setGeneralInfo() {
      this.dataDone();
    },
    async setFooter() {
      this.dataDone();
    },
    async setRobotsTxt() {
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
