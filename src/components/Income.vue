<template>
  <div class="income">
    <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
      <el-form-item label="Income">
        <el-input-number class="form-income" v-model="form.income" :min="0" :step="100"></el-input-number>
      </el-form-item>
      <el-form-item label="Tax Code">
        <el-input v-model="form.taxcode"></el-input>
      </el-form-item>
      <el-form-item label="Student Loan">
        <el-radio-group v-model="form.studentLoan">
          <el-radio-button label="Plan 1"></el-radio-button>
          <el-radio-button label="Plan 2"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="submitIncome">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column header-align="right" align="right" prop="heading" width="180"></el-table-column>
        <el-table-column header-align="center" prop="year" label="Year" width="180"></el-table-column>
        <el-table-column header-align="center" prop="month" label="Month" width="180"></el-table-column>
        <el-table-column header-align="center" prop="week" label="Week"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      form: {
        income: 0,
        taxcode: '',
        studentLoan: ''
      }
    }
  },
  methods: {
    submitIncome () {
      this.$store.dispatch('submitIncome', {
        income: this.form.income,
        tax: this.getTaxCode(),
        NI: this.getNI(),
        studentLoan: this.getLoanThreshold()
      })
    },
    getTaxCode () {
      const numberPattern = /\d+/g
      const tax = parseInt(this.form.taxcode.match(numberPattern)) * 10
      if (tax) {
        return this.form.income - tax
      } else {
        return 0
      }
    },
    getNI () {
      const upper = 42996
      const lower = 8064
      var upperPayable = 0
      var standardPayable = 0

      if (this.form.income > upper) {
        upperPayable = (this.form.income - upper) * 0.02
      }

      if (this.form.income > lower && this.form.income < upper) {
        standardPayable = (this.form.income - lower) * 0.12
      } else if (this.form.income > upper) {
        standardPayable = (upper - lower) * 0.12
      }

      return upperPayable + standardPayable
    },
    getLoanThreshold () {
      if (this.form.studentLoan === 'Plan 1') {
        return 17495
      } else {
        return 21000
      }
    },
    takeHomeYear () {
      return (this.$store.getters.yearIncome - this.$store.getters.yearTax - this.$store.getters.yearNI - this.$store.getters.yearSL).toFixed(2)
    },
    takeHomeMonth () {
      return (this.$store.getters.monthIncome - this.$store.getters.monthTax - this.$store.getters.monthNI - this.$store.getters.monthSL).toFixed(2)
    },
    takeHomeWeek () {
      return (this.$store.getters.weekIncome - this.$store.getters.weekTax - this.$store.getters.weekNI - this.$store.getters.weekSL).toFixed(2)
    }
  },
  computed: {
    tableData () {
      return [{
        heading: 'Gross',
        year: this.$store.getters.yearIncome,
        month: this.$store.getters.monthIncome,
        week: this.$store.getters.weekIncome
      }, {
        heading: 'Tax Payable',
        year: this.$store.getters.yearTax,
        month: this.$store.getters.monthTax,
        week: this.$store.getters.weekTax
      }, {
        heading: 'NI Payable',
        year: this.$store.getters.yearNI,
        month: this.$store.getters.monthNI,
        week: this.$store.getters.weekNI
      }, {
        heading: 'Student Loan Payable',
        year: this.$store.getters.yearSL,
        month: this.$store.getters.monthSL,
        week: this.$store.getters.weekSL
      }, {
        heading: 'Takehome',
        year: this.takeHomeYear(),
        month: this.takeHomeMonth(),
        week: this.takeHomeWeek()
      }]
    }
  }
}
</script>

<style scoped>
  .income {
    margin: 50px auto;
    width: 800px;
  }

  .el-form {
    width: 400px;
    margin: 0 auto;
  }

  .form-income {
    display: block;
    width: auto;
  }
</style>
