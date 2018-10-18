const emailReducer = (state={email: '', name: '', phone: '', company: ''}, action) => {
  switch(action.type){
    case 'ADD_EMAIL':
      return {...state, email: action.PAYLOAD};
    case 'ADD_NAME':
      return {...state, name: action.PAYLOAD};
    case 'ADD_PHONE':
      return {...state, phone: action.PAYLOAD};
    case 'ADD_COMPANY':
      return {...state, company: action.PAYLOAD};
    // make a case to send to all data to database;
  }
  return state;
}

export default emailReducer;