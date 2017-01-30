<template>
  <div class="outgoings">
    <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
      <el-form-item label="Outgoing">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Amount">
        <el-input-number v-model="form.amount" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Add</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <div v-for="o in outgoings">
      <h2>{{ o.name }} - {{ o.amount }}</h2>
    </div>
    <h1 class='total'>
      Total: {{ getTotal }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'outgoings',
  data () {
    return {
      labelPosition: 'top',
      form: {
        name: '',
        amount: 0
      },
      outgoings: []
    }
  },
  methods: {
    onSubmit () {
      this.outgoings.push(this.form)
      this.form = {
        name: '',
        amount: 0
      }
    }
  },
  computed: {
    getTotal () {
      let total = 0
      for (const i of this.outgoings) {
        total += i.amount
      }
      return total
    }
  }
}
</script>

<style scoped>
  .outgoings {
    width: 500px;
    margin: 0 auto;
  }
</style>
