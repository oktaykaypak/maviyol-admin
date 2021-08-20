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
        If you need more info, please check out
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row row mb-10">
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Tur günü</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="tourDay"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 3 "
        />
        <ErrorMessage
          name="tourDay"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-6">
        <!--begin::Label-->
        <label class="form-label required">Tur gece</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="tourNight"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. 2"
        />
        <ErrorMessage
          name="tourNight"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>

    <div class="fv-row row mb-10">
      <div class="col-12">
        <!--begin::Label-->
        <label class="form-label required">Uğradığı koylar</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          name="coves"
          class="form-control form-control-lg form-control-solid"
          value=""
          placeholder="Örn. Kelebekler vadisi,Oniki adalar vb. "
        />
        <ErrorMessage
          name="coves"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
    </div>

    <div class="fv-row row mb-10">
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
              Liman
            </label>
        <Field
          name="port"
          class="form-select form-select-lg form-select-solid"
          data-control="select2"
          data-placeholder="Select..."
          data-allow-clear="true"
          data-hide-search="true"
          as="select"
        >
          <option value="" disabled selected>Kalkış limanı seçiniz..</option>
          <option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></option>
        </Field>
        <ErrorMessage
          name="port"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
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
          Rota
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
        <div>{{ str_selectedPorts }}</div>
        <Field
          v-model="str_selectedPorts"
          type="text"
          class="form-control form-control-lg form-control-solid d-none"
          :value="str_selectedPorts"
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

    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script>
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-2",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      selectedPorts: [],
      str_selectedPorts: "",
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
      this.str_selectedPorts = String(this.selectedPorts);
    },
  },
});
</script>
