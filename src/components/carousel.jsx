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
const style = {
  width: '100%',
}


class ImgCarousel extends Component {

  render(){
    let Carousel = ''
    console.log(this.props.props,'loaded')
    if(this.props.props.LOADED === true && this.props.props.LOADING === false){
      Carousel = (<CarouselSlider slideItems = {this.props.props.currImgs} style={style}/>)
    }

    if(this.props.props.LOADING === true && this.props.props.LOADED === false){
      console.log('carousel loadeding still')
      Carousel = (
      <div>still loading...</div>
        )
    }

    if(this.props.props.LOADING === false && this.props.props.LOADED === false){
      console.log('carousel request not made')
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
