<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">:)</div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "dashboard",
  components: {

  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
