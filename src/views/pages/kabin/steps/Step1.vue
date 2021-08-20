<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Kabin bilgileri</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        Devam etmek için ilgili alanları doldurunuz..
        <a href="#" class="link-primary fw-bolder">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->
    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3" placeholder="Kabin(Tur) Adı"
        >Kabin(Tur) Adı</label
      >

      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="cabinName"
        placeholder=""
      />
      <ErrorMessage
        name="cabinName"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->

    <div class="mb-10 fv-row">
      <div class="row">
        <div class="col-6">
          <label
            class="
              d-flex
              align-items-center
              fs-6
              fw-bold
              form-label
              mb-2
              required
            "
          >
            Konsept
          </label>
          <Field
            name="cabConsept"
            class="form-select form-select-lg form-select-solid"
            data-control="select2"
            data-placeholder="Select..."
            data-allow-clear="true"
            data-hide-search="true"
            as="select"
          >
            <option value="" disabled selected>Konsept seçiniz..</option>
            <option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></option>
          </Field>
          <ErrorMessage
            name="cabConsept"
            class="fv-plugins-message-container invalid-feedback"
          ></ErrorMessage>
        </div>
        <div class="col-6">
          <label
            class="
              d-flex
              align-items-center
              fs-6
              fw-bold
              form-label
              mb-2
              required
            "
          >
            Sınıfı
          </label>
          <Field
            name="cabClass"
            class="form-select form-select-lg form-select-solid"
            data-control="select2"
            data-placeholder="Select..."
            data-allow-clear="true"
            data-hide-search="true"
            as="select"
          >
            <option value="" disabled selected>Tekne Sınıfı Seçiniz..</option>
            <option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></option>
          </Field>
          <ErrorMessage
            name="cabClass"
            class="fv-plugins-message-container invalid-feedback"
          ></ErrorMessage>
        </div>
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
  name: "step-1",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      options: [
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
});
</script>
