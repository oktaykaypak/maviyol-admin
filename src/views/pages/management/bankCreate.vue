<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header min-h-100  h2 py-5">Banka Ekle</div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Banka:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="bank"></el-input>
              </div>
              <div class="col-sm-6">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Banka Şubesi:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input required v-model="bankBranch"></el-input>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-sm-4">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Kullanıcı:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="user"></el-input>
              </div>
              <div class="col-sm-4">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Hesap Numarası:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="accountNumber"></el-input>
              </div>
              <div class="col-sm-4">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Hesap Tipi:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="accountType"></el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  SwiftCode:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="swiftCode"></el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  IBAN:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="iban"></el-input>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  Açıklama:
                </label>
                <!-- belirkene keyworde göre searç yapılabilecek alan -->
                <el-input v-model="description"></el-input>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 d-flex justify-content-end">
                <!-- araba butonu -->
                <button class="btn btn-success" @click="formSubmit">
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
      bank: null,
      bankBranch: null,
      user: null,
      swiftCode: null,
      accountNumber: null,
      accountType: null,
      iban: null,
      description: null,
    };
  },
  methods: {
    formSubmit() {
      if (
        this.bank &&
        this.bankBranch &&
        this.user &&
        this.swiftCode &&
        this.accountNumber &&
        this.accountType &&
        this.iban &&
        this.description != null
      ) {
        Swal.fire({
          text: "Her Şey Tamam. Verileri Kaydettik",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Onayla",
          showCancelButton: true,
          cancelButtonText: "Yeni Ekle",
          customClass: {
            confirmButton: "btn fw-bold btn-primary",
            cancelButton: "btn fw-bold btn-light-primary",
          },
        }).then((result) => {
          console.log(result);
          if (result.isConfirmed) {
            this.$router.push("/");
          } else {
            window.location.reload();
          }
        });
      } else {
        Swal.fire({
          text: "Lütfen Eksik Alanları Doldurunuz. ",
          icon: "warning",
          buttonsStyling: true,
          confirmButtonText: "Onayla",
        });
      }
    },
  },
};
</script>

<style></style>
