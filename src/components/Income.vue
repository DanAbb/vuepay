<template>
  <div class="income">
    <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
      <el-form-item label="Income">
        <el-input-number class="form-income" v-model="form.income" :min="0" :step="100"></el-input-number>
      </el-form-item>
      <el-form-item label="Tax Code">
        <el-input v-model="form.taxcode"></el-input>
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
        taxcode: ''
      }
    }
  },
  methods: {
    submitIncome () {
      this.$store.dispatch('submitIncome', {
        income: this.form.income,
        tax: this.getTaxCode(),
        NI: this.getNI()
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
    takeHomeYear () {
      return (this.$store.getters.yearIncome - this.$store.getters.yearTax - this.$store.getters.yearNI).toFixed(2)
    },
    takeHomeMonth () {
      return (this.$store.getters.monthIncome - this.$store.getters.monthTax - this.$store.getters.monthNI).toFixed(2)
    },
    takeHomeWeek () {
      return (this.$store.getters.weekIncome - this.$store.getters.weekTax - this.$store.getters.weekNI).toFixed(2)
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
