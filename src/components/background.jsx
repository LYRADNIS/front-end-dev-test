import React from 'react'
import styled, {css} from 'styled-components';
import Typist from 'react-typist';


const Div = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 3px;
  border: 2px ;
  background-color:black ;
  margin:auto;
  display:grid;
  grid-template-rows: 500px 500px;
  justify-content: center;
  justify-content: space-around;
`
const Div1 = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 3px;
  border: 2px ;
  background-color:black ;
  margin:auto;;
  display:grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  justify-content: space-around;
  align-content: space-around;
`

const TextTop = styled.div`
  font-family: 'Roboto';
  font-size: 50px;
  color: white;
  margin: auto;

`
const TextBottom = styled.div`
  font-family: 'Roboto';
  font-size: 25px;
  color: white;
  margin: auto;

`

const H1 = styled.h1`
  max-width: 100%;
  width: 30%;
  margin: auto;
  justify-content: center;
  align-content: center
  position: absolute;
  right: 10%;
`


const BackgroundInfo = () => {

    return (
      <div>
        <Div>

            <TextTop className="font-effect-fire-animation">
              <Typist avgTypingDelay={100}>
              20,000 $ lost since you haven't signed up with RoosterGrin...
              <Typist.Backspace count={70} delay={1000} />
              40,000 $ lost since you haven't signed up with RoosterGrin...
              <Typist.Backspace count={70} delay={1000} />
              Click 'Contact' to start a conversation with a RoosterGrin Specialist today!
              <Typist.Backspace count={80} delay={1000} />
              Still Waiting? Dangerous game you're playing.
              <Typist.Backspace count={60} delay={1000} />
              Wow, why are you still on this page? Go look at other stuff
              <Typist.Backspace count={50} delay={1000} />
              I suppose you want a discount now...
              <Typist.Backspace count={50} delay={1000} />
              It's not happening
              <Typist.Backspace count={50} delay={2000} />
              NOPE.
              <Typist.Backspace count={50} delay={2000} />
              fine okay
              <Typist.Backspace count={50} delay={2000} />
              Send us a email with 'YouGotIt' in the headline to recieve 20% off.
              <Typist.Backspace count={70} delay={2000} />
              Ok, 21% off.
              <Typist.Backspace count={30} delay={1000} />
              22% off
              <Typist.Backspace count={30} delay={1000} />
              23% off
              <Typist.Backspace count={30} delay={1000} />
              24% off
              <Typist.Backspace count={30} delay={1000} />
              Ok its free. : ) Contact us now @ roosterGrin.com/Daryl
              </Typist>
            </TextTop>




        </Div>
        <Div1>
        <TextBottom className="font-effect-fire-animation">
          <H1>
            90%
          </H1>

          Direct trade ethical hashtag, cornhole beard tousled humblebrag health goth marfa. Vice enamel pin sustainable kitsch flexitarian

        </TextBottom>
          <TextBottom className="font-effect-fire-animation">
            <H1>
            250%
            </H1>

            gastropub, bicycle rights hexagon tofu lomo chambray. Banjo organic fashion axe af, cray actually yuccie try-hard vaporware

          </TextBottom>
        </Div1>
      </div>
        )
}

export default BackgroundInfo