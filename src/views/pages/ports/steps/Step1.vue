<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Liman bilgileri</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        Devam etmek için ilgili alanları doldurunuz..
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->
    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label
        class="d-flex
              align-items-center
              fs-6
              fw-bold
              form-label
              mb-2
              required"
        placeholder="Kabin(Tur) Adı"
        >Liman Adı</label
      >

      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="PortName"
        placeholder=""
      />
      <ErrorMessage
        name="PortName"
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
            URL Alias
          </label>
          <Field
            name="URLalias"
            class="form-control form-control-lg form-control-solid"
          />

          <ErrorMessage
            name="URLalias"
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
            Meta Title
          </label>
          <Field
            name="title"
            class="form-control form-control-lg form-control-solid"
            as="textarea"
          />

          <ErrorMessage
            name="title"
            class="fv-plugins-message-container invalid-feedback"
          ></ErrorMessage>
        </div>
      </div>
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
            Keywords
          </label>
          <Field
            name="keyword"
            as="textarea"
            class="form-control form-control-lg form-control-solid"
          />

          <ErrorMessage
            name="keyword"
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
            Description
          </label>
          <Field
            name="desc"
            class="form-control form-control-lg form-control-solid"
            as="textarea"
          />

          <ErrorMessage
            name="desc"
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
