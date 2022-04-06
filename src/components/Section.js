import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    //console.log(props);
  return (
      <Wrap bgImage={backgroundImg}>
          <Bounce left>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
          </Bounce>
          <LightSpeed left>
          <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                        <RightButton>
                        {rightBtnText }
                    </RightButton>
                    }
                    
                </ButtonGroup>
                <DownArrow src= "/images/down-arrow.svg" />
          </Buttons>
          </LightSpeed>
      </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    background-image: ${props => `url("/images/${props.bgImage}")`}
    
`
const ItemText = styled.div`
    z-index: 10;
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup =styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Buttons =styled.div`
 
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 20px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.55;
    color: black;
`
const DownArrow = styled.img`
    height: 40px; 
    overflow-x: hidden;
    animation: animateDown infinite 2s;
`
export default Section