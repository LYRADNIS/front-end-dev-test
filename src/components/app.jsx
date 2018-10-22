import React from 'react';
import ReactDOM from 'react-dom'
import ImgCarousel from './carousel.jsx';
import BackgroundInfo from './background.jsx';
import SearchBar from './SearchBar.jsx';
import Graphics from './graphics.jsx';
import EmailForm from './emailForm.jsx';
import styled, {css} from 'styled-components';
import ContactInfo from './contactInfo.jsx';
import store from '../store/store.js'
import actions from '../actions/emailActions.js';
import flickrInfo from './api_key.js'
import axios from 'axios'


const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px;
`
const FlexDiv = styled.div`
  width: 100%;
  height: 5%;
  border-radius: 3px;
  border: 2px;
  display: flex;
  justify-content: space-around;
  flex-flow: row;
  position: fixed;
  top: 30px;
`
const Button = styled.button`
  padding-top:5px;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
  margin-top:5px;
  border-radius: 8px;
`
const Text = styled.div`
  font-family: 'Roboto';
  font-size: 25px;
  margin:auto;
`


class App extends React.Component {
  constructor(props){
    super(props)

    this.emailForm = React.createRef()
    this.carouselForm = React.createRef()
    this.backgroundForm = React.createRef()
    this.graphicsForm = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
    this.getFlickrPictures = this.getFlickrPictures.bind(this)
  }

  componentDidMount(){
    this.getFlickrPictures()
  }

  handleScroll(e){
    let myDomNode = '';
    switch(e.target.innerHTML){
      case 'Images':
        myDomNode = ReactDOM.findDOMNode(this.carouselForm.current)
        window.scrollTo({top:myDomNode.offsetTop, behavior:"smooth"})
        break;
      case 'Our Info':
        myDomNode = ReactDOM.findDOMNode(this.backgroundForm.current)
        window.scrollTo({top:myDomNode.offsetTop -50, behavior:"smooth"})
        break;
      case 'Why us?':
        myDomNode = ReactDOM.findDOMNode(this.graphicsForm.current)
        window.scrollTo({top:myDomNode.offsetTop - 125, behavior:"smooth"})
        break;
      case 'Contact':
        myDomNode = ReactDOM.findDOMNode(this.emailForm.current)
        window.scrollTo({top:myDomNode.offsetTop - 110, behavior:"smooth"})
        break;

    }
  }
  getFlickrPictures(){
    actions.ADD_FLICKR_PHOTOS()();
  }


  render(){
    return(
      <Div>

        <FlexDiv>
          <SearchBar />
          <Button >
            <Text onClick={this.handleScroll} value='background'>
              Our Info
            </Text>
          </Button>
          <Button >
            <Text onClick={this.handleScroll} value='graphics'>
              Why us?
            </Text>
          </Button>
          <Button >
            <Text onClick={this.handleScroll} value='carousel'>
              Images
            </Text>
          </Button>
          <Button >
            <Text onClick={this.handleScroll} value='email'>
              Contact
            </Text>
          </Button>
        </FlexDiv>



        <div ref={this.backgroundForm}>
          <BackgroundInfo value='background'/>
        </div>

        <div ref={this.graphicsForm}>
          <Graphics value='graphics'/>
        </div>

        <div ref={this.carouselForm}>
          <ImgCarousel value='carousel'/>
        </div>

        <div ref={this.emailForm}>
          <EmailForm value='email' />
        </div>

        <div>
          <ContactInfo/>
        </div>
      </Div>

    )
  }
}

export default App;