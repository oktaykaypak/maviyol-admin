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
              <div class="col-12 ">
                <!--  -->
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Banka Adı:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                          placeholder=" ANADOLUBANK"
                          v-model="bankName"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Servis:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                          placeholder="SANAL POST"
                          v-model="service"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Host:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                          placeholder="vpost.est.com/servlet"
                          v-model="host"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Port:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                          placeholder=" vpost.est.com/servlet"
                          v-model="port"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
                                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Kullanıcı adı:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                          v-model="vposUsername"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-3 d-flex align-items-center">
                        <span class="demo-input-label me-3">Şifre:</span>
                      </div>
                      <div class="col-9">
                        <el-input
                        type="password"
                          v-model="vposPassword"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="row mt-3">
              <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-success" @click="setGeneralInfo">
                  <i class="bi bi-save"></i>
                </button>
              </div>
            </div> -->
          </div>
        </div>
         <div class="card mt-3">
          <div class="card-body">
            <div class="row mt-3 ">
              <div class="col-12 ">
                <!--  -->
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">Mağaza numarası:</span>
                      </div>
                      <div class="col-8">
                        <el-input
                          v-model="shopNum"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">Pos no(Terminal no):</span>
                      </div>
                      <div class="col-8">
                        <el-input
                          v-model="posNo"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">ENC KEY / XCIP:</span>
                      </div>
                      <div class="col-8">
                        <el-input
                          placeholder="vpost.est.com/servlet"
                          v-model="enckey"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">POS NET ID:</span>
                      </div>
                      <div class="col-8">
                        <el-input
                          placeholder=" vpost.est.com/servlet"
                          v-model="posnetid"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
                                <div class="row mt-3">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">3D Post Adresi:</span>
                      </div>
                      <div class="col-8">
                        <el-input
                          v-model="postAdress"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <span class="demo-input-label me-3">3D Şifre:</span>
                      </div>
                      <div class="col-8">
                        <el-input
                        type="password"
                          v-model="threeDPassword"
                        >
                        </el-input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-10">
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
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  data() {
    return {
      bankName: null,
      service: null,
      host: null,
      port: null,
      vposUsername: null,
      vposPassword: null,
      shopNum: null,
      posNo: null,
      enckey: null,
      posnetid: null,
      postAdress: null,
      threeDPassword: null,

    };
  },
  methods: {
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
