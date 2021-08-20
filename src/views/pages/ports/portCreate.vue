<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Stepper-->
      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_create_account_stepper"
        ref="horizontalWizardRef"
      >
        <!--begin::Nav-->
        <div class="stepper-nav py-5 mt-5">
          <!--begin::Step 1-->
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Tekne tipi</h3>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Kayıt</h3>
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->

        <!--begin::Form-->
        <form
          class="mx-auto mw-600px w-100 pt-15 pb-10"
          novalidate="novalidate"
          id="kt_create_account_form"
          @submit="handleStep"
        >
          <!--begin::Step 1-->
          <div class="current" data-kt-stepper-element="content">
            <Step1></Step1>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 5-->
          <div data-kt-stepper-element="content">
            <Step2 :data="formData"></Step2>
          </div>
          <!--end::Step 5-->

          <!--begin::Actions-->
          <div class="d-flex flex-stack pt-15">
            <!--begin::Wrapper-->
            <div class="mr-2">
              <button
                type="button"
                class="btn btn-lg btn-light-primary me-3"
                data-kt-stepper-action="previous"
                @click="previousStep"
              >
                <span class="svg-icon svg-icon-4 me-1">
                  <inline-svg src="media/icons/duotone/Navigation/Left-2.svg" />
                </span>
                Back
              </button>
            </div>
            <!--end::Wrapper-->

            <!--begin::Wrapper-->
            <div>
              <button
                type="button"
                class="btn btn-lg btn-primary me-3"
                data-kt-stepper-action="submit"
                v-if="currentStepIndex === totalSteps - 1"
                @click="formSubmit()"
              >
                <span class="indicator-label">
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg
                      src="media/icons/duotone/Navigation/Right-2.svg"
                    />
                  </span>
                </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button v-else type="submit" class="btn btn-lg btn-primary">
                Continue
                <span class="svg-icon svg-icon-4 ms-1 me-0">
                  <inline-svg
                    src="media/icons/duotone/Navigation/Right-2.svg"
                  />
                </span>
              </button>
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Actions-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Stepper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import Step1 from "@/views/pages/ports/steps/Step1.vue";
import Step2 from "@/views/pages/ports/steps/Step2.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

interface Step1 {
  PortName: string;
  URLalias: string;
  title: string;
  keyword: string;
  desc: string;
}

interface Step2 {
  asd: string;
}

interface AddBoat extends Step1, Step2 {}

export default defineComponent({
  name: "boatcreate",
  components: {
    Step1,
    Step2,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const horizontalWizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const router = useRouter();
    const formData = ref<AddBoat>({
      PortName: "string",
      URLalias: "string",
      title: "string",
      keyword: "string",
      desc: "string",
      asd: "",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        horizontalWizardRef.value as HTMLElement
      );

      setCurrentPageBreadcrumbs("Horizontal", ["Pages", "Wizards"]);
    });

    const AddBoatSchema = [
      Yup.object({
        PortName: Yup.string()
          .required()
          .label("Sınıf"),
        URLalias: Yup.string()
          .required()
          .label("Konsept"),
        title: Yup.string()
          .required()
          .label("İsim"),
        keyword: Yup.string()
          .required()
          .label("İsim"),
        desc: Yup.string()
          .required()
          .label("İsim"),
      }),
    ];

    const currentSchema = computed(() => {
      return AddBoatSchema[currentStepIndex.value];
    });

    const { resetForm, handleSubmit } = useForm<Step1>({
      validationSchema: currentSchema,
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    resetForm({
      values: {
        ...formData.value,
      },
    });

    const handleStep = handleSubmit((values) => {
      formData.value = {
        ...formData.value,
        ...values,
      };

      currentStepIndex.value++;
      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();

      console.log(formData.value);
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const formSubmit = () => {
      console.log("Result: ", formData);
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
          router.push("/");
        } else {
          window.location.reload();
        }
      });
    };

    return {
      horizontalWizardRef,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
      formData,
    };
  },
});
</script>
