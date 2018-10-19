import React from 'react';
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 85vh;
  border-radius: 3px;
  border: 2px solid blue;
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  justify-content: space-around;

`

const ChildDiv = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 3px;
  border: 2px solid blue;
  margin: auto;
`
const ChildImg1 = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  margin: auto;
  background-size: auto;
  background-image: url('https://s3.amazonaws.com/roostergrin/hero-img.jpg')
`
const ChildImg2 = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  margin: auto;
  background-size: auto;
  background-image: url('https://s3.amazonaws.com/roostergrin/img1.jpg')
`
const ChildImg3 = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  margin: auto;
  background-size: auto;
  background-image: url('https://s3.amazonaws.com/roostergrin/img2.jpg')
`



const Graphics = () => {
    return (
        <Div>

          <ChildDiv>
            text
          </ChildDiv>

          <ChildDiv>
            <ChildImg1 />
          </ChildDiv>

          <ChildDiv>
            <ChildImg2 />
          </ChildDiv>

          <ChildDiv>
            text
          </ChildDiv>

          <ChildDiv>
            text
          </ChildDiv>

          <ChildDiv>
            <ChildImg3 />
          </ChildDiv>
        </Div>
        )
}

export default Graphics;