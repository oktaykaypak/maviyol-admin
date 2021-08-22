<template>
  <!--begin::Card body-->
  <div class="row">
    <div class="col-9">
      <div class="card">
        <div class="row card-body">
          <div class="col-2 d-flex justify-content-start align-items-center">
            <div class="stepper-item current" data-kt-stepper-element="nav">
              <h1 class="stepper-title">Filtre</h1>
            </div>
          </div>
          <div class="col-4">
            <label
              class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
            >
              Tekne & Kabin:
            </label>
            <!-- gulet,motoryat,yelkenki,kabin gibi alanların filtrelenebileceği alan -->
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="col-5">
            <label
              class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
            >
              Search:
            </label>
            <!-- belirkene keyworde göre searç yapılabilecek alan -->
            <el-input placeholder="Please input" v-model="input"></el-input>
          </div>
          <div
            class="col-1 d-flex justify-content-center align-items-end pulse"
          >
            <!-- araba butonu -->
            <el-button icon="el-icon-search" circle></el-button>
            <span class="pulse-ring"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card">
        <div class="row card-body">
          <div class="col-7">
            <div class="row">
              <div class="col-12">
                <h1>175</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                Toplam yorum
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="row">
              <i class="bi bi-chat-left-dots" style="font-size: 65px"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="row">
    <div class="col-12">
      <comment-table :list="list" :tableTotalData="10"></comment-table>
    </div>
  </div>
</template>

<script>
import commentTable from '@/components/widgets/tables/commentTable.vue'
import { defineComponent, ref } from 'vue'

export default {
  name: 'comments',
  components: {
    commentTable
  },
  data() {
    return {
      input: ref(''),
      list: [
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        },
        {
          orderid: '00347-BCLQ',
          country: {
            name: 'Argentina',
            code: 'BR'
          },
          date: {
            value: '12/21/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'The Hill',
            fields: 'Insurance'
          },
          status: {
            label: 'Rejected',
            color: 'info'
          },
          total: '$9486'
        },
        {
          orderid: '59486-XDER',
          country: {
            name: 'Agoda',
            code: 'BT'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Phillipines',
            fields: 'Transportation'
          },
          status: {
            label: 'Approved',
            color: 'primary'
          },
          total: '$8476'
        },
        {
          orderid: '56037-XDER',
          country: {
            name: 'Brasil',
            code: 'PH'
          },
          date: {
            value: '05/28/2020',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Intertico',
            fields: 'Web, UI/UX Design'
          },
          status: {
            label: 'Approved',
            color: 'success'
          },
          total: '$3560'
        },
        {
          orderid: '05822-FXSP',
          country: {
            name: 'Belarus',
            code: 'BY'
          },
          date: {
            value: '04/18/2021',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'Agoda',
            fields: 'Houses & Hotels'
          },
          status: {
            label: 'In Progress',
            color: 'warning'
          },
          total: '$4850'
        },
        {
          orderid: '4472-QREX',
          country: {
            name: 'Phillipines',
            code: 'BH'
          },
          date: {
            value: '07/23/2019',
            remarks: 'Paid'
          },
          progress: {
            value: '50',
            color: 'primary'
          },
          company: {
            name: 'RoadGee',
            fields: 'Transportation'
          },
          status: {
            label: 'Success',
            color: 'danger'
          },
          total: '$8376'
        }
      ],
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value: ''
    }
  }
}
</script>

<style></style>
