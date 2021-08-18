<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder d-flex align-items-center text-dark">
        Tekne tipini seçiniz
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Billing is issued based on your selected account type"
        ></i>
      </h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        İşleme devam edebilmek için seçim yapınız
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row">
      <!--begin::Row-->
      <div class="row">
        <!--begin::Col-->
        <div class="col-lg-4" v-for="item in boattype" :key="item">
          <!--begin::Option-->
          <Field
            type="radio"
            class="btn-check"
            name="boatType"
            :value="item.name"
            :id="'kt_create_account_form_account_type_' + item.name"
          />
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              ps-1
              d-flex
              align-items-center
              mb-10
            "
            :for="'kt_create_account_form_account_type_' + item.name"
          >
            <span class="me-5">
              <img :src="item.icon" style="width: 64px" alt="" />
            </span>

            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">
                {{ item.text }}
              </span>
            </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <ErrorMessage
          name="boatType"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
      </div>
      <!--end::Row-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-1",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      boattype: [
        {
          name: "gulet",
          text: "Gulet",
          icon: "https://image.flaticon.com/icons/png/128/1264/1264818.png",
        },
        {
          name: "motoryat",
          text: "Motoryat",
          icon: "https://image.flaticon.com/icons/png/512/618/618942.png",
        },
        {
          name: "yelkenli",
          text: "Yelkenli",
          icon: "https://image.flaticon.com/icons/png/512/618/618940.png",
        },
        {
          name: "katamaran",
          text: "Katamaran",
          icon: "https://image0.flaticon.com/icons/png/128/3324/3324522.png",
        },
       
      ],
    };
  },
});
</script>
