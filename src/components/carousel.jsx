import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import CarouselSlider from 'react-carousel-slider';
import {connect} from 'react-redux'


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
  font-family: 'Roboto';

`





class ImgCarousel extends Component {

  render(){
    let Carousel = ''
    console.log(this.props.props,'loaded')
    if(this.props.props.LOADED === true && this.props.props.LOADING === false){
      let dataLimit = [this.props.props.currImgs[0],this.props.props.currImgs[1],this.props.props.currImgs[2]];
      Carousel = (<CarouselSlider
        slideItems = {dataLimit}
        buttonSetting={{
          placeOn: "bottom-beneath",
        }}
        itemsStyle = {{
          margin: "0px 80px",
          width: '100%',


        }}
        sliderBoxStyle={{
        height:'auto',
        width: '100%',
        backgroundColor: 'black',
      }}/>)
    }

    if(this.props.props.LOADING === true && this.props.props.LOADED === false){
      Carousel = (
      <div>still loading...</div>
        )
    }

    if(this.props.props.LOADING === false && this.props.props.LOADED === false){
      Carousel = (<div>Sending request now</div>)
    }

    return (
      <Div>
        {
          Carousel
        }
      </Div>
      )
  }
}
const MapStateToProps = (state) => {
  return {
    props: state.presentationReducer,
  }
}

export default connect(MapStateToProps)(ImgCarousel)
