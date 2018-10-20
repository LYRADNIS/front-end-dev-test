import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import CarouselSlider from 'react-carousel-slider';


const Div = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 3px;
  border: 2px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

`
const H1 = styled.h1`
  max-width: 50%;
  width: 50%;
  height: 20%;
  margin: auto;
  justify-content: center;
  align-content: center
  color: green;
  position: absolute;

`


class ImgCarousel extends Component {
  constructor(){
    super()
    this.state = {
      data: [
            {
                des: "1",
                imgSrc: "https://s3.amazonaws.com/thenomad1/rarrow.svg"
            },
            {
                des: "2",
                imgSrc: "https://s3.amazonaws.com/thenomad1/iconmonstr-twitter-1.svg"
            },
            {
              des: "3",
              imgSrc: 'https://s3.amazonaws.com/thenomad1/gmail.svg'
            }
        ]
    }

  }


  render(){

    return (
      <Div>

            Images

          <CarouselSlider slideItems = {this.state.data} />;


      </Div>
      )
  }
}

export default ImgCarousel;