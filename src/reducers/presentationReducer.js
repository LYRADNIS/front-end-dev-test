const presentationReducer = (state = {currImg: 0, modalOn: false, currWindowHeight: 0}, action) => {
    switch(action.type){
        case 'HANDLE_WINDOW_CHANGE':
          return {...state, currWindowHeight: action.PAYLOAD};
        case 'TURN_ON_MODAL':
          return {...state, modalOn: action.PAYLOAD};
        case 'TURN_OFF_MODAL':
          return {...state, modalOn: action.PAYLOAD};
        case 'NEXT_IMAGE':
          if(state.currImg > 2){
            return {...state, currImg: 0}
          } else {
            return {...state, currImg: state.currImg++}
          };
        case 'PRIOR_IMAGE':
          if(state.currImg < 0){
            return {...state, currImg: 2}
          } else {
            return {...state, currImg: state.currImg--}
          }

    }

    return state;
}

export default presentationReducer