import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cv from "../assets/TomaszKasprowicz.pdf";

const Body = styled.div`
  .particles {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }
`;

const HeroBody = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

const ContainerCenter = styled(Container)`
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 4rem;
    color: var(--main-color);
    @media screen and (max-height: 375px) {
      margin-top: 5rem;
    }
  }
  h1:nth-of-type(2) {
    color: var(--second-color);
    font-size: 3rem;
    margin-top: 4rem;
  }
  .social {
    @keyframes move {
      0% {
        transform: rotate(0deg);
      }
      40% {
        transform: rotate(-20deg);
      }
      80% {
        transform: rotate(20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    padding-top: 5rem;
    a {
      text-align: center;
      position: relative;
      padding-right: 3rem;
    }
    a:hover::before {
      top: -5rem;
      position: absolute;
      color: var(--second-color);
      font-size: 2rem;
      width: 100%;
      height: 100%;
      animation-name: move;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      font-family: "Long Cang", cursive;
    }
    a:first-of-type:hover::before {
      content: "GITHUB";
      left: -1.5rem;
    }
    a:nth-of-type(2):hover::before {
      content: "MAIL";
      left: -1rem;
    }
    a:nth-of-type(3):hover::before {
      content: "LINKEDIN";
      left: -1rem;
    }
    a:nth-of-type(4):hover::before {
      content: "CV";
      left: -1rem;
    }
    i {
      color: var(--main-color);
      font-size: 4rem;
    }
    i:hover {
      color: var(--second-color);
    }
  }
  @media screen and (max-width: 768px) {
    h1:nth-of-type(3) {
      color: var(--second-color);
      margin-top: 4rem;
      font-size: 3rem;
    }
  }
`;
const variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "0%" },
};

const Hero = () => {
  return (
    <Body>
      <HeroBody>
        <ContainerCenter>
          <div>
            <motion.h1
              initial="hidden"
              variants={variants}
              animate="visible"
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              Tomasz <br />
              Kasprowicz
            </motion.h1>
            {/* <h1>
              Tomasz <br />
              Kasprowicz
            </h1> */}
            <h1 className="special">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello!")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("I'am Front-End <br> Developer")
                    .start();
                }}
              />
            </h1>
            <div className="social">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0 }}
                href="https://github.com/tomekxoxo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <Link to="/contact">
                <motion.i
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="fas fa-envelope"
                ></motion.i>
              </Link>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0 }}
                href="https://www.linkedin.com/in/tomasz-kasprowicz-2b0709187/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0 }}
                href={Cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt"></i>
              </motion.a>
            </div>
          </div>
        </ContainerCenter>
      </HeroBody>
    </Body>
  );
};

export default Hero;
