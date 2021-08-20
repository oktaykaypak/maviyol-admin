<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div
      class="p-8 bg-light-primary border-primary pb-lg-10 border border-dashed "
    >
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">İşlem Tamam!</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        Kaydınızı oluşturduk, verilerinizi kontrol edebilirisiniz.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Body-->
    <div class="mb-0 mt-3">
      <!--begin::Text-->
      <div class="fs-6 text-gray-600 mb-5 text-center">
        <div class="row mb-2">
          <div class="col-12 h3 ">{{ data.cabinName }}</div>
        </div>
        <div class="row h5 text-gray-700">
          <div class="col-6">
            Kabin Konsepti:
            <span class="h6 text-gray-600"> {{ data.cabConsept }} </span>
          </div>
          <div class="col-6">
            Kabin Sınıfı:
            <span class="h6 text-gray-600"> {{ data.cabClass }} </span>
          </div>
        </div>
        <hr />

        <div class="row">
          <div class="col-4">Tur Günü: {{ data.tourDay }}</div>
          <div class="col-4">Tur Gecesi: {{ data.tourNight }}</div>
          <div class="col-4">Liman: {{ data.port }}</div>
        </div>
        <hr />
        <div class="row">
          <div class="col-12">Koylar: {{ data.coves }}</div>
        </div>
        <hr />
        <div class="row mb-3">
          <div class="col-12 h4 text-gray-700">
            Limanlar:
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span
              v-for="item in data.selectedPorts.split(',')"
              :key="item"
              class="badge badge-primary me-1"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <!--end::Text-->

      <!--begin::Alert-->
      <div
        class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
      >
        <!--begin::Icon-->
        <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
          <inline-svg src="media/icons/duotone/Code/Warning-1-circle.svg" />
        </span>
        <!--end::Icon-->
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1">
          <!--begin::Content-->
          <div class="fw-bold">
            <h4 class="text-gray-800 fw-bolder">
              Her Şey Yolunda Mı?
            </h4>
            <div class="fs-6 text-gray-600">
              Girdiğiniz verilerde yanlışlık var ise geri dönerek düzenleme
              yapabilirsiniz. <br />
              Eğer bir yanlışlık yok ise
              <span class="btn btn-primary p-1 text-sm">
                Onayla<span class="svg-icon svg-icon-3 ms-2 me-0 text-li">
                  <inline-svg
                    src="media/icons/duotone/Navigation/Right-2.svg"
                  /> </span
              ></span>
              tuşuna basarak kaydınızı tamamlayınız.
            </div>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Alert-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Wrapper-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "step-3",
  components: {},
  props: {
    data: Object,
  },
});
</script>
<style scoped>
.text-sm {
  font-size: 1.075rem !important;
}
</style>
