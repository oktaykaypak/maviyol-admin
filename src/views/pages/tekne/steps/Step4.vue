<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Billing Details</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please check out
        <a href="#" class="text-primary fw-bolder">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <div class="w-100">
      <!--begin::Input group-->
      <div class="d-flex flex-column mb-7 fv-row">
        <!--begin::Label-->
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
          Name On Card
        </label>
        <!--end::Label-->

        <!-- <Field
          name="visitPorts"
          class="form-select form-select-lg form-select-solid"
          data-control="select2"
          data-placeholder="Select..."
          data-allow-clear="true"
          data-hide-search="true"
          as="select"
          multiple
        >
          <option value="" disabled selected>Tekne Tipi Seçiniz..</option>
          <option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></option>
        </Field> -->
        <ErrorMessage
          name="visitPorts"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>

         <Field
            type="checkbox"
            class="btn-check"
            name="visitPorts"
            value="item.name"
            id="'kt_create_account_form_account_type_' + item.name"
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
            for="'kt_create_account_form_account_type_' + item.name"
          >aasd</label> 
          <Field
            type="checkbox"
            class="btn-check"
            name="visitPorts"
            value="item.name2"
            id="'kt_create_account_form_account_type_' + item.nam2e"
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
            for="'kt_create_account_form_account_type_' + item.nam2e"
          >aasd</label> 

      </div>
      <button @click="anan(schema)">asdsad</button>
      <!--end::Input group-->
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script >
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-4",
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
      schema: {
        visitPorts: ["1",2]
        },
      
    };
  },
  methods: {
    async anan(val){
      console.log(val);
    }
  }
});
</script>
