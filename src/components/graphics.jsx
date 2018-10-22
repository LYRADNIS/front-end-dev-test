import React from 'react';
import styled, {css} from 'styled-components';



const Div = styled.div`
  width: 100%;
  height: 85vh;
  border-radius: 3px;
  border: 2px ;
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  justify-content: space-around;

`
const Text = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
`

const ChildDiv = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 3px;
  border: 2px;
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
const H1 = styled.h1`
  margin:auto;
  width: 100%;
`



const Graphics = () => {
    return (
        <Div>

          <ChildDiv>
            <Text>
             <h3>Bushwick pok pok deep</h3>
             Swag skateboard listicle synth. Semiotics brunch banjo twee. Hashtag shaman blog try-hard, hella copper mug meggings taiyaki locavore lyft pug. DIY lomo truffaut pork belly twee kitsch vinyl sustainable intelligentsia.
            </Text>
          </ChildDiv>

          <ChildDiv>
            <ChildImg1 />
          </ChildDiv>

          <ChildDiv>
            <ChildImg2 />
          </ChildDiv>

          <ChildDiv>
           <Text>
             <h3>Small batch celiac echo</h3>
             Truffaut helvetica single-origin coffee, affogato yuccie bushwick swag austin. Artisan edison bulb polaroid hella. Tumeric mixtape 90's, offal af chicharrones listicle keytar flexitarian artisan hoodie pour-over YOLO.
            </Text>
          </ChildDiv>

          <ChildDiv>
           <Text>
             <h3>PBR&B la croix kinfolk tofu 3 wolf moon,</h3>
              Green juice hell of chambray af coloring book viral, cred normcore chia. Gochujang four loko enamel pin fingerstache meditation, whatever shoreditch affogato poutine. Swag jianbing knausgaard, hella
            </Text>
          </ChildDiv>

          <ChildDiv>
            <ChildImg3 />
          </ChildDiv>


        </Div>
        )
}

export default Graphics;