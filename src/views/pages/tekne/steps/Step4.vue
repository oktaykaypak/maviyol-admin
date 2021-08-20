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
      <div class="d-flex flex-column mb-7 fv-row">
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
              Bağlı olduğu liman
            </label>
            <Field
              name="itsPort"
              class="form-select form-select-lg form-select-solid"
              data-control="select2"
              data-placeholder="Select..."
              data-allow-clear="true"
              data-hide-search="true"
              as="select"
            >
              <option value="" disabled selected>Liman Seçiniz..</option>
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></option>
            </Field>
            <ErrorMessage
              name="itsPort"
              class="fv-plugins-message-container invalid-feedback"
            ></ErrorMessage>
          </div>
        </div>
      </div>
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
          Limanlar
        </label>
        <!--end::Label-->
        <div class="row">
          <div
            v-for="item in options"
            :key="item"
            class="d-flex justify-content-center p-0 mx-1"
            style="width: fit-content"
          >
            <input
              type="checkbox"
              class="btn-check"
              :name="item.value"
              :id="item.value"
              @click="portselect(item.value)"
            />
            <label
              class="
                btn btn-outline btn-outline-dashed btn-outline-default
                d-flex
                align-items-center
                mb-2
              "
              :for="item.value"
              style="font-size: 11px !important"
              >{{ item.label }}</label
            >
          </div>
        </div>

        <!--begin::Input-->
        <div>{{ strSelectedPorts }}</div>
        <Field
          v-model="strSelectedPorts"
          type="text"
          class="form-control form-control-lg form-control-solid d-none"
          :value="strSelectedPorts"
          name="selectedPorts"
          placeholder=""
        />
        <ErrorMessage
          name="selectedPorts"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <!--end::Input group-->
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script >
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { stringifyQuery } from "vue-router";
import { string } from "yup/lib/locale";

export default defineComponent({
  name: "step-4",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      selectedPorts: [],
      strSelectedPorts: "",
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
          label: "Option3Option3Option3",
        },
        {
          value: "Option4",
          label: "Option4Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
  methods: {
    portselect(val) {
      console.log(val);
      const checks = this.selectedPorts.indexOf(val);
      console.log(checks);
      if (checks == -1) {
        this.selectedPorts.push(val);
      } else {
        this.selectedPorts.splice(checks, 1);
      }
      console.log(this.selectedPorts);
      this.strSelectedPorts = String(this.selectedPorts);
    },
  },
});
</script>
