import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Clock from "../../assets/images/clock.jpg";
import Memo from "../../assets/images/memoCovered.jpg";
import WeatherIcon from "../../assets/images/weatherIcon.jpg";
import OsteriaFront from "../../assets/images/osteriaFront.jpg";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  /* min-height: 80vh; */
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }
`;

const SectionTitle = styled.h1`
  padding-top: 20vh;
  color: var(--main-color);
  font-size: 4rem;
  i {
    color: var(--second-color);
  }
`;

const GridContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem;
`;

const GridItem = styled(motion.div)`
  height: 35rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s ease;
  position: relative;
  &:last-of-type {
    margin-bottom: 2rem;
  }
  &:hover {
    transform: translateY(-1rem);
  }

  a {
    div {
      text-decoration: none;
      width: 100%;
      height: 100%;
      transition: all 0.4s ease;

      &:hover {
        /* background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,.5)); */
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;


const Projects = (props) => {
  return (
    <Container>
      <SectionTitle>
        <i className="fas fa-dollar-sign"></i>&#123;Projects&#125;
      </SectionTitle>
      <GridContainer>
        <GridItem img={Clock} initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Link to={`${props.match.url}/1`}>
            <div></div>
          </Link>
        </GridItem>
        <GridItem img={Memo} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{delay:0.1}}>
          <Link to={`${props.match.url}/2`}>
            <div></div>
          </Link>
        </GridItem>
        <GridItem
          img={WeatherIcon}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{delay:0.2}}
        >
          <Link to={`${props.match.url}/3`}>
            <div></div>
          </Link>
        </GridItem>
        <GridItem
          img={OsteriaFront}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{delay:0.3}}
        >
          <Link to={`${props.match.url}/4`}>
            <div></div>
          </Link>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Projects;
