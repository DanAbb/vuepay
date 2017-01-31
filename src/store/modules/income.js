const state = {
  income: 0,
  tax: 0,
  NI: 0,
  studentLoan: 0,
  pension: 0
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
    } else if (state.tax <= 32000) {
      return (state.tax * 0.2).toFixed(2)
    } else if (state.tax > 32000 && state.tax <= 150000) {
      return ((32000 * 0.2) + ((state.tax - 32000) * 0.4)).toFixed(2)
    } else if (state.tax > 150000) {
      return ((32000 * 0.2) + ((state.tax - 32000) * 0.4) + ((state.tax - 150000) * 0.45)).toFixed(2)
    }
  },
  monthTax: state => {
    if (state.tax < 0) {
      return 0
    } else if (state.tax <= 32000) {
      return ((state.tax * 0.2) / 12).toFixed(2)
    } else if (state.tax > 32000 && state.tax <= 150000) {
      return (((32000 * 0.2) + ((state.tax - 32000) * 0.4)) / 12).toFixed(2)
    } else if (state.tax > 150000) {
      return (((32000 * 0.2) + ((state.tax - 32000) * 0.4) + ((state.tax - 150000) * 0.45)) / 12).toFixed(2)
    }
  },
  weekTax: state => {
    if (state.tax < 0) {
      return 0
    } else if (state.tax <= 32000) {
      return ((state.tax * 0.2) / 52).toFixed(2)
    } else if (state.tax > 32000 && state.tax <= 150000) {
      return (((32000 * 0.2) + ((state.tax - 32000) * 0.4)) / 52).toFixed(2)
    } else if (state.tax > 150000) {
      return (((32000 * 0.2) + ((state.tax - 32000) * 0.4) + ((state.tax - 150000) * 0.45)) / 52).toFixed(2)
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
    if (state.studentLoan && state.income > state.studentLoan) {
      return ((state.income - state.studentLoan) * 0.09).toFixed(2)
    } else {
      return 0
    }
  },
  monthSL: state => {
    if (state.studentLoan && state.income > state.studentLoan) {
      return (((state.income - state.studentLoan) * 0.09) / 12).toFixed(2)
    } else {
      return 0
    }
  },
  weekSL: state => {
    if (state.studentLoan && state.income > state.studentLoan) {
      return (((state.income - state.studentLoan) * 0.09) / 52).toFixed(2)
    } else {
      return 0
    }
  },
  yearPension: state => {
    return state.pension.toFixed(2)
  },
  monthPension: state => {
    return (state.pension / 12).toFixed(2)
  },
  weekPension: state => {
    return (state.pension / 52).toFixed(2)
  }
}

const mutations = {
  'submitIncome': (state, payload) => {
    state.income = payload.income
    state.tax = payload.tax
    state.NI = payload.NI
    state.studentLoan = payload.studentLoan
    state.pension = payload.pension
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
