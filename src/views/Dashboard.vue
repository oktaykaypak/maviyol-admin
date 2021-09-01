<template>
  <div class="row">
    <div class="col-6">
      <div class="card">
        <div class="card-body">
          <chart1></chart1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue"
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb"
import chart1 from "@/components/dashboardcomp/chart1.vue"

export default defineComponent({
  name: "dashboard",
  components: {
    chart1
  },
  data() {
    return {}
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard")
    })
  }
})
</script>
