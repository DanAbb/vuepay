const state = {
  income: 0,
  tax: 0,
  NI: 0,
  studentLoan: ''
}

const getters = {
  yearIncome: state => {
    return (state.income).toFixed(2)
  },
  monthIncome: state => {
    return (state.income / 12).toFixed(2)
  },
  weekIncome: state => {
    return (state.income / 52).toFixed(2)
  },
  yearTax: state => {
    if (state.tax < 0) {
      return 0
    } else {
      return (state.tax * 0.2).toFixed(2)
    }
  },
  monthTax: state => {
    if (state.tax < 0) {
      return 0
    } else {
      return ((state.tax / 12) * 0.2).toFixed(2)
    }
  },
  weekTax: state => {
    if (state.tax < 0) {
      return 0
    } else {
      return ((state.tax / 52) * 0.2).toFixed(2)
    }
  },
  yearNI: state => {
    return (state.NI).toFixed(2)
  },
  monthNI: state => {
    return (state.NI / 12).toFixed(2)
  },
  weekNI: state => {
    return (state.NI / 52).toFixed(2)
  },
  yearSL: state => {
    if (state.income > state.studentLoan) {
      return ((state.income - state.studentLoan) * 0.09).toFixed(2)
    } else {
      return 0
    }
  },
  monthSL: state => {
    if (state.income > state.studentLoan) {
      return (((state.income - state.studentLoan) * 0.09) / 12).toFixed(2)
    } else {
      return 0
    }
  },
  weekSL: state => {
    if (state.income > state.studentLoan) {
      return (((state.income - state.studentLoan) * 0.09) / 52).toFixed(2)
    } else {
      return 0
    }
  }
}

const mutations = {
  'submitIncome': (state, payload) => {
    state.income = payload.income
    state.tax = payload.tax
    state.NI = payload.NI
    state.studentLoan = payload.studentLoan
  }
}

const actions = {
  'submitIncome': ({commit}, payload) => {
    commit('submitIncome', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
