const presentationReducer = (state = {currImgs: [], LOADING: true, LOADED: false}, action) => {
    switch(action.type){
        case 'ADD_PHOTOS_TO_STORE':
          return {...state, LOADING: false, LOADED: true, currImgs: action.PAYLOAD};
        case 'REQUEST_PHOTOS':
          return {...state, LOADING: true};
    }

    return state;
}

export default presentationReducer