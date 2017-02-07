<template>
  <div class="income">
    <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
      <el-form-item label="Income">
        <el-input-number class="form-income" v-model="form.income" :min="0" :step="1000"></el-input-number>
      </el-form-item>
      <el-form-item label="Tax Code">
        <el-input v-model="form.taxcode"></el-input>
      </el-form-item>
      <el-form-item label="Student Loan">
        <el-radio-group v-model="form.studentLoan">
          <el-radio-button label="Plan 1"></el-radio-button>
          <el-radio-button label="Plan 2"></el-radio-button>
          <el-radio-button label="None"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Pension">
        <el-input class="pension" v-model="form.pension">
          <template slot="append">%</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="submitIncome">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      form: {
        income: 0,
        taxcode: '1100L',
        studentLoan: '',
        pension: 0
      }
    }
  },
  methods: {
    submitIncome () {
      this.$store.dispatch('submitIncome', {
        income: this.form.income,
        tax: this.getTaxable(),
        NI: this.getNI(),
        studentLoan: this.getLoanThreshold(),
        pension: this.getPension()
      })
      this.$router.push('display')
    },
    getTaxable () {
      const numberPattern = /\d+/g
      const tax = parseInt(this.form.taxcode.match(numberPattern)) * 10
      const pension = this.getPension()
      if (tax && pension) {
        return this.form.income - pension - tax
      } else if (tax) {
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
      } else if (this.form.studentLoan === 'Plan 2') {
        return 21000
      } else {
        return 0
      }
    },
    getPension () {
      return this.form.income * (this.form.pension / 100)
    },
    takeHomeYear () {
      return (this.$store.getters.yearIncome - this.$store.getters.yearTax - this.$store.getters.yearNI - this.$store.getters.yearSL - this.$store.getters.yearPension).toFixed(2)
    },
    takeHomeMonth () {
      return (this.$store.getters.monthIncome - this.$store.getters.monthTax - this.$store.getters.monthNI - this.$store.getters.monthSL - this.$store.getters.monthPension).toFixed(2)
    },
    takeHomeWeek () {
      return (this.$store.getters.weekIncome - this.$store.getters.weekTax - this.$store.getters.weekNI - this.$store.getters.weekSL - this.$store.getters.weekPension).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: #20A0FF;
  $secondary: #324157;
  $tertiary: #dfe6ec;
  $tertiary-light: #EEF1F6;

  .income {
    margin: 50px auto;
    background: $tertiary-light;
    padding: 30px;
    border: 2px solid $secondary;
    border-radius: 15px;
    box-shadow: 2px 2px 10px $tertiary;
  }

  .pension {
    width: 50%;
  }

  .el-form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>
