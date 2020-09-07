import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  align-content: center;
`;

const GridItem = styled.div`
  height: 45rem;
  width: 100%;
  transition: all 0.4s ease;
  justify-self: center;
  &:first-of-type {
    height: 15rem;
    margin-bottom: 2rem;
    display:flex;
    flex-direction:column;
  }

  h1 {
    color: var(--main-color);
    margin-bottom: 1.5rem;
  }
  a {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-family: var(--second-font);
    color: var(--main-color);
    &:hover{
       i{color: var(--main-color);} 
      }
    i {
      margin-right: 1rem;
      color: var(--second-color);
      
    }

  }
  form {
    max-width: 55rem;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    h1 {
      margin-bottom: 2rem;
      text-transform: uppercase;
      font-family: var(--second-font);
    }
    input {
      display: block;
      width: 100%;
      padding: 2rem;
      border-radius: 3rem;
      border: none;
      margin: 0 auto;
      margin-bottom: 2rem;
      font-family: var(--second-font);
      outline: none;
    }
    input[type="submit"] {
      margin-top: 2rem;
      font-size: 2rem;
      background-color: var(--second-color);
      color: var(--main-bg);
      cursor: pointer;
      &:hover{
        color: var(--main-color);
      }
      
    }
    textarea {
      resize: none;
      width: 100%;
      padding: 2rem;
      border-radius: 3rem;
      border: none;
      font-family: var(--second-font);
      outline: none;
    }
  }
`;

const Contact = () => {

const [btnValue, setBtnvalue] = useState('Send');

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8rs8zwj', 'template_lq27rbh', e.target, 'user_fj9oKUrwZ6SHGCaFZ7yXQ')
      .then((result) => {
        setBtnvalue('Message Sent !');
        setTimeout(() => {
          setBtnvalue('Send')
        }, 3000)
      }, (error) => {
          setBtnvalue(error.text)
          setTimeout(() => {
            setBtnvalue('Send')
          }, 3000)
      });
    e.target.reset()
  };


    return (
      <Container>
        <SectionTitle>
          <i className="fas fa-dollar-sign"></i>&#123;Contact&#125;
        </SectionTitle>
        <GridContainer>
          <GridItem>
            <h1>Contact me on:</h1>
            <a
              href="https://github.com/tomekxoxo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>github.com/tomekxoxo
            </a>
            <a
              href="https://www.linkedin.com/in/tomasz-kasprowicz-2b0709187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>in/tomasz-kasprowicz
            </a>
            <a href="mailto:tomaszkasprowicz24@gmail.com">
              <i className="fas fa-envelope"></i>message
            </a>
          </GridItem>
          <GridItem>
            <form onSubmit={sendEmail}>
              <h1>Let's Talk!</h1>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required="required"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required="required"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="message"
                required="required"
              ></textarea>
              {/* <input type="submit" value={btnValue} />    */}
              <motion.input
                type="submit" value={btnValue}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </form>
          </GridItem>
        </GridContainer>
      </Container>
    );
}

export default Contact;
