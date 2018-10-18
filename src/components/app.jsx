import React from 'react';
import ReactDOM from 'react-dom'
import Carousel from './carousel.jsx';
import BackgroundInfo from './background.jsx';
import SearchBar from './SearchBar.jsx';
import Graphics from './graphics.jsx';
import EmailForm from './emailForm.jsx';
import styled, {css} from 'styled-components';
import ContactInfo from './contactInfo.jsx';

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px solid blue;
`
const FlexDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px solid blue;
  display: flex;
  justify-content: space-around;
  flex-flow: row;
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.emailForm = React.createRef()
    this.carouselForm = React.createRef()
    this.backgroundForm = React.createRef()
    this.graphicsForm = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e){
    console.log(e.target.value)
    let myDomNode = '';
    switch(e.target.value){
      case 'carousel':
        myDomNode = ReactDOM.findDOMNode(this.carouselForm.current)
        return window.scrollTo(0, myDomNode.offsetTop);
      case 'background':
        myDomNode = ReactDOM.findDOMNode(this.backgroundForm.current)
        return window.scrollTo(0, myDomNode.offsetTop);
      case 'graphics':
        myDomNode = ReactDOM.findDOMNode(this.graphicsForm.current)
        return window.scrollTo(0, myDomNode.offsetTop);
      case 'email':
        myDomNode = ReactDOM.findDOMNode(this.emailForm.current)
        return window.scrollTo(0, myDomNode.offsetTop);

    }
  }


  render(){
    return(
      <Div>
        <FlexDiv>
          Rooster Grin : )
          <button onClick={this.handleScroll} value='carousel'>Images</button>
          <button onClick={this.handleScroll} value='background'>Our Info</button>
          <button onClick={this.handleScroll} value='graphics'>Why us?</button>
          <button onClick={this.handleScroll} value='email'>Email Us</button>
        </FlexDiv>

        <div ref={this.carouselForm}>
          <Carousel value='carousel'/>
        </div>

        <div ref={this.backgroundForm}>
          <BackgroundInfo value='background'/>
        </div>

        <div ref={this.graphicsForm}>
          <Graphics value='graphics'/>
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