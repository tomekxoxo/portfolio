import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const SkillItem = styled.p`
  background-color: var(--second-color);
  color: var(--main-bg) !important;
  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const AboutMe = () => {
  return (
    <Container>
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
      <SkillItem>HTML5</SkillItem>
      <SkillItem>SCSS</SkillItem>
      <SkillItem>JavaScript</SkillItem>
      <SkillItem>React.js</SkillItem>
      <SkillItem>Redux</SkillItem>
      <SkillItem>RWD</SkillItem>
      <SkillItem>Git</SkillItem>
      <SkillItem>Npm</SkillItem>
    </Container>
  );
};

export default AboutMe;
