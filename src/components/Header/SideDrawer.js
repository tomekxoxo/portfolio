import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  z-index: 500;
  background-color: var(--main-bg);
  transform: translateX(100%);
  transform: ${(props) => props.isOpen && "translateX(0)"};
  transition: transform 0.4s ease;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      li {
        a {
          font-size: 3rem;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <Backdrop close={props.close} isOpen={props.isOpen} />
      <StyledDrawer isOpen={props.isOpen}>
        <nav>
          <ul>
            <motion.li
              animate={props.isOpen ? "open" : "closed"}
              transition={{ delay: 0.1, type: "spring", stiffness: 50 }}
              variants={variants}
            >
              <NavLink to={process.env.PUBLIC_URL + '/about'} onClick={props.close}>
                About Me
              </NavLink>
            </motion.li>
            <motion.li
              animate={props.isOpen ? "open" : "closed"}
              transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
              variants={variants}
            >
              <NavLink to={process.env.PUBLIC_URL + '/projects'} onClick={props.close}>
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              animate={props.isOpen ? "open" : "closed"}
              transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
              variants={variants}
            >
              <NavLink to={process.env.PUBLIC_URL + '/contact'} onClick={props.close}>
                Contact
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </StyledDrawer>
    </React.Fragment>
  );
};

export default SideDrawer;
