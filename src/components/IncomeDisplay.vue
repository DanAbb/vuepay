<template>
  <div class="income-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column header-align="right" align="right" prop="heading" width="180"></el-table-column>
      <el-table-column header-align="center" prop="year" label="Year" width="120"></el-table-column>
      <el-table-column header-align="center" prop="month" label="Month" width="120"></el-table-column>
      <el-table-column header-align="center" prop="week" label="Week" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    takeHomeYear () {
      return (this.$store.getters.yearIncome - this.$store.getters.yearTax - this.$store.getters.yearNI - this.$store.getters.yearSL - this.$store.getters.yearPension).toFixed(2)
    },
    takeHomeMonth () {
      return (this.$store.getters.monthIncome - this.$store.getters.monthTax - this.$store.getters.monthNI - this.$store.getters.monthSL - this.$store.getters.monthPension).toFixed(2)
    },
    takeHomeWeek () {
      return (this.$store.getters.weekIncome - this.$store.getters.weekTax - this.$store.getters.weekNI - this.$store.getters.weekSL - this.$store.getters.weekPension).toFixed(2)
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
        heading: 'Pension',
        year: this.$store.getters.yearPension,
        month: this.$store.getters.monthPension,
        week: this.$store.getters.weekPension
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
  .income-table {
    margin: 50px auto;
  }
</style>
