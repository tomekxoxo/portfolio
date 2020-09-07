import React from 'react';
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  z-index:400;
  background-color:rgba(0,0,0,.7);
  transform:translateX(-100%);
  transform:${props => props.isOpen && 'translateX(0%)'};
  transition:all .4s ease;
`

const Backdrop = props => {
  return (
    <StyledBackdrop isOpen={props.isOpen} onClick={props.close}> 
    </StyledBackdrop>
  );
};

export default Backdrop;