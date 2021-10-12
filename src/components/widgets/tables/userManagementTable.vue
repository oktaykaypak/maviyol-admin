<template>
  <div class="card">
    <!--begin::Tables Widget 13-->
    <div :class="widgetClasses">
  
      <!--begin::Body-->
      <div class="card-body py-3 mt-1">
        <!--begin::Table container-->
        <div class="table-responsive">
          <!--begin::Table-->
          <table
            class="
            table table-row-bordered table-row-gray-100
            align-middle
            gs-0
            gy-3
          "
          >
            <!--begin::Table head-->
            <thead>
              <tr class="fw-bolder text-muted">
                <th class="w-25px">
                  <div
                    class="
                    form-check form-check-sm form-check-custom form-check-solid
                  "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-13-check"
                    />
                  </div>
                </th>
                <th class="min-w-150px">Order Id</th>
                <th class="min-w-140px">Country</th>
                <th class="min-w-120px">Date</th>
                <th class="min-w-120px">Company</th>
                <th class="min-w-120px">Total</th>
                <th class="min-w-120px">Status</th>
                <th class="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template v-for="(item, index) in viewList" :key="index">
                <tr>
                  <td>
                    <div
                      class="
                      form-check
                      form-check-sm
                      form-check-custom
                      form-check-solid
                    "
                    >
                      <input
                        class="form-check-input widget-13-check"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td>

                  <td>
                    <a
                      href="#"
                      class="text-dark fw-bolder text-hover-primary fs-6"
                      >{{ item.orderid }}</a
                    >
                  </td>

                  <td>
                    <a
                      href="#"
                      class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                      >{{ item.company.name }}</a
                    >
                    <span class="text-muted fw-bold text-muted d-block fs-7"
                      >Code: {{ item.country.code }}</span
                    >
                  </td>

                  <td>
                    <a
                      href="#"
                      class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                      >{{ item.date.value }}</a
                    >
                    <span class="text-muted fw-bold text-muted d-block fs-7"
                      >Code: {{ item.date.remarks }}</span
                    >
                  </td>

                  <td>
                    <a
                      href="#"
                      class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                      >{{ item.company.name }}</a
                    >
                    <span class="text-muted fw-bold text-muted d-block fs-7">{{
                      item.company.fields
                    }}</span>
                  </td>

                  <td class="text-dark fw-bolder text-hover-primary fs-6">
                    {{ item.total }}
                  </td>

                  <td>
                    <span
                      :class="`badge-light-${item.status.color}`"
                      class="badge"
                      >{{ item.status.label }}</span
                    >
                  </td>

                  <td class="text-end">
                    <a
                      href="#"
                      class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/General/Settings-1.svg"
                        />
                      </span>
                    </a>

                    <a
                      href=""
                      class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                    >
                      <button class="svg-icon svg-icon-3 btn" disabled>
                        <inline-svg
                          src="media/icons/duotone/Communication/Write.svg"
                        />
                      </button>
                    </a>

                    <a
                      href="#"
                      class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                    "
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/General/Trash.svg"
                        />
                      </span>
                    </a>
                  </td>
                </tr>
              </template>
            </tbody>
            <!--end::Table body-->
          </table>
          <!--end::Table-->
        </div>
        <!--end::Table container-->
      </div>
      <!--begin::Body-->
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <el-pagination
          layout="prev, pager, next"
          :page-size="tableTotalData"
          :total="listLen"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
  <!--end::Tables Widget 13-->
</template>

<script>
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import tableService from "../../../views/functions/table";
export default defineComponent({
  name: "kt-widget-12",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
    list: [],
    tableTotalData: {
      type: Int32Array,
      default:10
    } 
  },
  data() {
    return {
      // list=gerekli data tablo için
      listLen: 0, //tablo gereksinimi
      viewList: [], //listeden gelen dataların tabloya iletildiği değişken
      title: "",
    };
  },
  mounted() {
    // */functions/table üzerinden geirilen js ler ile tablo fonksiyonları oluşturuldu
    this.listLen = tableService.listLength(this.list);
    this.viewList = tableService.firstTimeTable(this.tableTotalData, this.list);
    if (this.list) this.title = "Tekneler";
  },
  methods: {
    handleCurrentChange(val) {
      // pagination uzerınden tıklanan value nun alındıgı ve ekrana ilgili page datasının aktarıldıgı fonksiyon
      this.viewList = tableService.handleCurrentChange(
        val,
        this.tableTotalData,
        this.list
      );
    },
  },
});
</script>
