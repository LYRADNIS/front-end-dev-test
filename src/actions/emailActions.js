const ADD_EMAIL = (payload) => {
  return {
    type: 'ADD_EMAIL',
    PAYLOAD: payload
  }
}

const ADD_NAME = (payload) => {
  return {
    type: 'ADD_NAME',
    PAYLOAD:payload
  }
}

const ADD_COMPANY = (payload) => {
  return {
    type: 'ADD_COMPANY',
    PAYLOAD:payload
  }
}

const ADD_PHONE = (payload) => {
  return {
    type: 'ADD_PHONE',
    PAYLOAD:payload
  }
}

const actions = {
  ADD_EMAIL,
  ADD_NAME,
  ADD_COMPANY,
  ADD_PHONE
}

export default actions;