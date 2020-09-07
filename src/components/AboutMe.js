import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  /* min-height: 80vh; */
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }
  p {
    margin-top: 3.5rem;
    color: var(--main-color);
    font-size: 2.5rem;
    font-family: var(--second-font);
  }
  h2 {
    margin-top: 3rem;
    font-size: 3rem;
    color: var(--second-color);
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

const SkillItem = styled(motion.p)`
  background-color: var(--second-color);
  color: var(--main-bg) !important;
  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const AboutMe = () => {
  return (
    <Container
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <SectionTitle>
        <i className="fas fa-dollar-sign"></i>&#123;About Me&#125;
      </SectionTitle>
      <p>
        Hi!
        <br />
        My name is Tomasz and I study Computer Science. I am fascinated about
        Front-End and I spend most of my time on learning new skills.
      </p>
      <h2>Skills:</h2>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        exit={{ opacity: 0 }}
      >
        HTML5
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0 }}
      >
        SCSS
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        exit={{ opacity: 0 }}
      >
        JavaScript
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        exit={{ opacity: 0 }}
      >
        React.js
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        exit={{ opacity: 0 }}
      >
        Redux
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        exit={{ opacity: 0 }}
      >
        RWD
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        exit={{ opacity: 0 }}
      >
        Git
      </SkillItem>
      <SkillItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        exit={{ opacity: 0 }}
      >
        Npm
      </SkillItem>
    </Container>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const pageStyle = {
  position: "relative",
};

export default AboutMe;
