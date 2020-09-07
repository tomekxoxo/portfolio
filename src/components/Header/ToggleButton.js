import React from 'react';
import styled from "styled-components";


const ButtonContainer = styled.div`
  width:5rem;
  height:5rem;
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:flex-start;
  z-index:1000;
  cursor:pointer;
  div{
    z-index:1000;
    width:80%;
    height: .3rem;
    background-color:var(--main-color);
    border-radius:50px;
  }
  div:first-of-type{
    /* position:${props=>props.clicked && 'relative'};
    top:${props => props.clicked && '1.4rem'}; */
    transform:${props => props.clicked && 'rotate(45deg)'};
    transform-origin:top left;
    transition: transform .4s ease-in-out;
  }

  div:nth-of-type(2){
    width:40%;
    transform:${props => props.clicked && 'translateX(1000%)'};
    transition: transform .4s ease-in-out;
  }
  div:nth-of-type(3){
    width:65%;
    width:${props => props.clicked && '80%'};
    /* position:${props=>props.clicked && 'relative'};
    bottom:${props => props.clicked && '1.4rem'}; */
    transform:${props => props.clicked && 'rotate(-45deg)'};
    transform-origin: bottom left;
    transition: transform .4s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    &{
      display:none;
    }
  }

`

const ToggleButton = props => {
  return (
    <ButtonContainer clicked={props.isOpen} onClick={props.open}>
      <div/>
      <div/>
      <div/>
    </ButtonContainer>
  );
};

export default ToggleButton;