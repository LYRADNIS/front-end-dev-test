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

class App extends React.Component {
  constructor(props){
    super(props)

    this.emailForm = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleScroll(e){
    const myDomNode = ReactDOM.findDOMNode(this.emailForm.current)
    window.scrollTo(0, myDomNode.offsetTop-20)
  }


  render(){
    return(
      <Div>
        <div>
          <SearchBar />
          <button onClick={this.handleScroll}/>
        </div>

        <div ref={this.carouselRef}>
          <Carousel value='carousel'/>
        </div>

        <div>
          <BackgroundInfo value='background'/>
        </div>

        <div>
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