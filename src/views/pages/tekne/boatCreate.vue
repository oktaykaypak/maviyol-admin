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
            <h3 class="stepper-title">Boat Type</h3>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Private info</h3>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">General info</h3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Billing Details</h3>
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Completed</h3>
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

          <!--begin::Step 2-->
          <div data-kt-stepper-element="content">
            <Step2></Step2>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div data-kt-stepper-element="content">
            <Step3></Step3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div data-kt-stepper-element="content">
            <Step4></Step4>
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div data-kt-stepper-element="content">
            <Step5></Step5>
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import Step1 from "@/views/pages/tekne/steps/Step1.vue";
import Step2 from "@/views/pages/tekne/steps/Step2.vue";
import Step3 from "@/views/pages/tekne/steps/Step3.vue";
import Step4 from "@/views/pages/tekne/steps/Step4.vue";
import Step5 from "@/views/pages/tekne/steps/Step5.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

interface Step1 {
  boatType: string;
}

interface Step2 {
  boatName: string;
  privateBoatType: string;
  privateBoatClass: string;
}

interface Step3 {
  createYear: string;
  flag: string;
  cabCount: string;
  guestCount: string;
  crewCount: string;
  boatLength: string;
  boatWidth: string;
  boatDeep: string;
}

interface Step4 {
  nameOnCard: string;
  visitPorts: any;
 
}

interface AddBoat extends Step1, Step2, Step3, Step4 {}

export default defineComponent({
  name: "boatcreate",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const horizontalWizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const formData = ref<AddBoat>({
      boatType: "gulet",
      boatName: "asd",
      privateBoatType: "Option1",
      privateBoatClass: "Option1",
      createYear: "2017",
      flag: "Türkiye",
      cabCount: "1",
      guestCount: "15",
      crewCount: "6",
      boatLength: "16.8",
      boatWidth: "4.8",
      boatDeep: ".18",
      nameOnCard: "Max Doe",
      visitPorts: [],
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        horizontalWizardRef.value as HTMLElement
      );

      setCurrentPageBreadcrumbs("Horizontal", ["Pages", "Wizards"]);
    });

    const AddBoatSchema = [
      Yup.object({
        boatType: Yup.string().required().label("Tekne Tipi"),
      }),
      Yup.object({
        privateBoatType: Yup.string().required().label("Tekne Tipi"),
        privateBoatClass: Yup.string().required().label("Tekne Tipi"),
        boatName: Yup.string().required().label("Tekne İsmi"),
      }),
      Yup.object({
        createYear: Yup.string().required().label("Business Name"),
        flag: Yup.string().required().label("Shortened Descriptor"),
        cabCount: Yup.string().required().label("Corporation Type"),
        crewCount: Yup.string().required().label("Contact Email"),
        boatLength: Yup.string().required().label("Contact Email"),
        boatWidth: Yup.string().required().label("Contact Email"),
        boatDeep: Yup.string().required().label("Contact Email"),
      }),
      Yup.object({
        nameOnCard: Yup.string().required().label("Name On Card"),
        visitPorts: Yup.string().required().label("Card Number"),
      }),
    ];

    const currentSchema = computed(() => {
      return AddBoatSchema[currentStepIndex.value];
    });

    const { resetForm, handleSubmit } = useForm<Step1 | Step2 | Step3 | Step4>({
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
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        window.location.reload();
      });
    };

    return {
      horizontalWizardRef,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
    };
  },
});
</script>
