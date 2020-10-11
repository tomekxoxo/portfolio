import React, {Suspense} from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Particles from "react-particles-js";
import Header from './components/Header/Header';
import Hero from './components/Hero'
import { AnimatePresence } from 'framer-motion';
// import Project from './components/Projects/Project';
// import Projects from './components/Projects/Projects';
// import About from './components/AboutMe';
// import Contact from './components/Contact';

const AsyncProject = React.lazy(() => import('./components/Projects/Project'));
const AsyncAbout = React.lazy(() => import('./components/AboutMe'));
const AsyncProjects = React.lazy(() => import('./components/Projects/Projects'));
const AsyncContact = React.lazy(() => import('./components/Contact'));

const GlobalStyling = createGlobalStyle`
html{
  font-size:10px;
  font-family:'Playfair Display', serif;
}
*{
  box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
  width: 100vw;
  min-height:100vh;
  overflow-x:hidden;
  background-color:var(--main-bg);
  .particles {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index:-1;
  }
}
:root{
  --main-bg:#252525;
  --main-color: #FAFAFF;
  --second-color: #1A9797;
  --second-font: 'Grandstander', cursive;
}
`;

function App() {
  return (
      <React.Fragment>
      <GlobalStyling />
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#fff",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Hero}/>
            <Route path={process.env.PUBLIC_URL + '/about'}  component={AsyncAbout}/>
            <Route path={process.env.PUBLIC_URL + '/projects'} exact component={AsyncProjects}/>
            <Route path={process.env.PUBLIC_URL + '/projects/:id'} children={<AsyncProject/>}/>
            <Route path={process.env.PUBLIC_URL + '/contact'} component={AsyncContact}/>
          </Switch>
          </AnimatePresence>
        </Suspense>
      </React.Fragment>
  );
}

export default App;
