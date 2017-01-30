<template>
  <div class="debts" v-show="false">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Debt Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Debt Type">
        <el-select v-model="form.type" placeholder="The type of debt">
          <el-option label="Overdraft" value="overdraft"></el-option>
          <el-option label="Credit Card" value="creditcard"></el-option>
          <el-option label="Loan" value="loan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Debt Amount">
        <el-input-number v-model="form.debt" @change="handleChange" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Add</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <div v-for="debt in debts">
      <h2>{{ debt.name }}</h2>
      <h2>{{ debt.type }}</h2>
    </div>
    <div class="clear">
      <button @click="clearDebts">Clear Debts</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        type: '',
        debt: 0
      },
      debts: []
    }
  },
  methods: {
    onSubmit () {
      this.debts.push(this.form)
      this.form = {
        name: '',
        type: '',
        debt: 0
      }
    },
    clearDebts () {
      this.debts = []
    },
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .debts {
    width: 500px;
    margin: 0 auto;
  }
</style>
