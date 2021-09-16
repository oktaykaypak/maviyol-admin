<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-12">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Genel Bilgileri</h2>
      <!--end::Title-->

       <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        İşleme devam edebilmek için seçim yapınız
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row row mb-10">
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Yapım/Revize Yılı</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="createYear"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 2012 "
        />
        <ErrorMessage
          name="createYear"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Ülke Bayrağı</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="flag"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. Türkiye "
        />
        <ErrorMessage
          name="flag"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>
    <div class="fv-row row mb-10">
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Kabin Sayısı</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="cabCount"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 2"
        />
        <ErrorMessage
          name="cabCount"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Yolcu Kapasitesi</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="guestCount"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn.8 "
        />
        <ErrorMessage
          name="guestCount"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>
    <div class="fv-row row mb-10">
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Mürettebat sayısı</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="crewCount"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 6"
        />
        <ErrorMessage
          name="crewCount"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Uzunluk</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="boatLength"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 16.8 "
        />
        <ErrorMessage
          name="boatLength"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>
    <div class="fv-row row mb-10">
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Genişlik</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="boatWidth"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 12.4 "
        />
        <ErrorMessage
          name="boatWidth"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Derinlik</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="boatDeep"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 1.8 "
        />
        <ErrorMessage
          name="boatDeep"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>
    <!--end::Input group-->

  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
