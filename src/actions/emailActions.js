import flickrInfo from '../components/api_key.js'
import store from '../store/store.js'

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

const REQUEST_PHOTOS = (payload) => {
  return {
    type: 'REQUEST_PHOTOS',
    PAYLOAD:payload
  }
}

const ADD_PHOTOS_TO_STORE = (payload) => {
  return {
    type: 'ADD_PHOTOS_TO_STORE',
    PAYLOAD:payload
  }
}

const ADD_FLICKR_PHOTOS = () => {
  let urlSession = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${flickrInfo.Key}&gallery_id=72157661340054817&format=json&nojsoncallback=1`
  return function(){
    store.dispatch(REQUEST_PHOTOS())


    return fetch(urlSession)
           .then(
              response => response.json(),
              error => console.log('an error has occured', error),
            ).then((json)=>{

            const modifiedCdns = json.photos.photo.map((element, index)=>{
              return {
                des: element.title,
                imgSrc:`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
              }
            })
          store.dispatch(ADD_PHOTOS_TO_STORE(modifiedCdns))
      })
  }
}

const actions = {
  ADD_EMAIL,
  ADD_NAME,
  ADD_COMPANY,
  ADD_PHONE,
  ADD_FLICKR_PHOTOS
}

export default actions;