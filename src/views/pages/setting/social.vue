<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="row card-header">
            <div class="d-flex align-items-center fs-1 fw-bold form-label">Sosyal Medya Ekle</div>
          </div>
          <div class="row card-body">
            <div class="col-3 me-10">
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                Sosyal Medya Adı:
              </label>
              <el-input placeholder="Please input" v-model="input"></el-input>
            </div>
            <div class="col-3 me-10">
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                Sosyal Medya Linki:
              </label>
              <el-input placeholder="Please input" v-model="input"></el-input>
            </div>
            <div class="col-3">
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                Sosyal Medya Logo:
              </label>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary"
                  >Click to upload</el-button
                >
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload>
            </div>
            <div
              class="col-2 d-flex justify-content-end align-items-center pulse"
            >
              <el-button icon="el-icon-plus" circle></el-button>
              <span class="pulse-ring"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <social-table :list="list" :tableTotalData="10"></social-table>
      </div>
    </div>
  </div>
</template>

<script>
import socialTable from "@/components/widgets/tables/socialTable.vue";
export default {
  name: "userlist",
  components: {
    socialTable,
  },
  data() {
    return {
      fileList: [],
      list: [
        {
          orderid: "56037-XDER",
          country: {
            name: "Brasil",
            code: "PH",
          },
          date: {
            value: "05/28/2020",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "Intertico",
            fields: "Web, UI/UX Design",
          },
          status: {
            label: "Approved",
            color: "success",
          },
          total: "$3560",
        },
        {
          orderid: "05822-FXSP",
          country: {
            name: "Belarus",
            code: "BY",
          },
          date: {
            value: "04/18/2021",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "Agoda",
            fields: "Houses & Hotels",
          },
          status: {
            label: "In Progress",
            color: "warning",
          },
          total: "$4850",
        },
        {
          orderid: "4472-QREX",
          country: {
            name: "Phillipines",
            code: "BH",
          },
          date: {
            value: "07/23/2019",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "RoadGee",
            fields: "Transportation",
          },
          status: {
            label: "Success",
            color: "danger",
          },
          total: "$8376",
        },
        {
          orderid: "00347-BCLQ",
          country: {
            name: "Argentina",
            code: "BR",
          },
          date: {
            value: "12/21/2021",
            remarks: "Paid",
          },
          progress: {
            value: "50",
            color: "primary",
          },
          company: {
            name: "The Hill",
            fields: "Insurance",
          },
          status: {
            label: "Rejected",
            color: "info",
          },
          total: "$9486",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 1, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
  },
};
</script>

<style></style>
