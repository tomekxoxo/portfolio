import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Clock from "../../assets/images/clock.jpg";
import MemoOne from "../../assets/images/memoCovered.jpg";
import MemoTwo from "../../assets/images/memoTouched.jpg";
import MemoThree from "../../assets/images/memoWin.jpg";
import weatherOne from "../../assets/images/weatherAppFront.jpg";
import weatherTwo from "../../assets/images/weatherAppModal.jpg";
import weatherThree from "../../assets/images/weatherAppResponsive.jpg";
import OsteriaOne from "../../assets/images/osteriaFront.jpg";
import OsteriaTwo from "../../assets/images/osteriaRecipes.jpg";
import OsteriaThree from "../../assets/images/osteriaResponsive.jpg";
import MovieSearchDemo from "../../assets/images/movie-search-demo.jpg";
import MovieSearchForm from "../../assets/images/movie-search-form.jpg";
import MovieSearchCard from "../../assets/images/movie-search-card.jpg";
import MovieSearch from "../../assets/images/movie-search-search.jpg";
import Tile from "../../assets/images/tile-cover.png";
import TileWin from "../../assets/images/tile-win.png";
import "./swiper.css";

const Container = styled(motion.div)`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 3rem;
  div {
    padding-top: 1rem;
    max-width: 400px;
    max-height: 400px;
    margin: initial;
    display: flex;
    align-items: center;
    .swiper-pagination-bullet {
      background-color: white;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--second-color);
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
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
  padding-bottom: 1rem;
  color: var(--main-color);
  font-size: 4rem;
  i {
    color: var(--second-color);
  }
`;

const SkillItem = styled.p`
  background-color: #1b191a;
  color: var(--main-color) !important;
  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  font-size: 2.5rem;
  font-family: var(--second-font);
  background-color: var(--second-color);

  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
  outline: none;

  a {
    text-decoration: none;
    color: var(--main-bg) !important;
    &:hover {
      color: var(--main-color) !important;
    }
  }

  .goBack {
    color: var(--main-color) !important;
    i {
      font-size: 2rem;
      padding-right: 1rem;
    }
    &:hover {
      color: var(--main-bg) !important;
    }
  }
`;

SwiperCore.use([Navigation, Pagination]);

const Project = (props) => {
  let { id } = useParams();
  const images = [
    [
      <img src={MovieSearchDemo} alt="project-img"></img>,
      <img src={MovieSearchForm} alt="project-img"></img>,
      <img src={MovieSearchCard} alt="project-img"></img>,
      <img src={MovieSearch} alt="project-img"></img>,
    ],
    [
      <img src={Tile} alt="project-img"></img>,
      <img src={TileWin} alt="project-img"></img>,
    ],
    [
      <img src={MemoOne} alt="project-img"></img>,
      <img src={MemoTwo} alt="project-img"></img>,
      <img src={MemoThree} alt="project-img"></img>,
    ],
    [
      <img src={weatherOne} alt="project-img"></img>,
      <img src={weatherTwo} alt="project-img"></img>,
      <img src={weatherThree} alt="project-img"></img>,
    ],
    [
      <img src={OsteriaOne} alt="project-img"></img>,
      <img src={OsteriaTwo} alt="project-img"></img>,
      <img src={OsteriaThree} alt="project-img"></img>,
    ],
    [<img src={Clock} alt="project-img"></img>],
  ];

  const [projectData] = useState([
    {
      projectName: "Movie Service",
      tech: [
        "React.js",
        "Redux",
        "React-Router",
        "StyledComponents",
        "Firebase",
        "TMDB-api",
      ],
      description:
        "Movie search application. You can search for movies and series, filter data with the most popular criteria. Create your own account and add interesting movies to your watch list or simply rate them!",
      live: "https://tomekxoxo.github.io/movie-search-app/",
      github: "https://github.com/tomekxoxo/movie-search-app",
    },
    {
      projectName: "Tile Game",
      tech: [
        "React.js",
        "Redux",
        "StyledComponents",
      ],
      description:
        "Click tile if it has neighbors in the same color. New tiles will generate and move in blank spaces.",
      live: "https://tomekxoxo.github.io/tile-game/",
      github: "https://github.com/tomekxoxo/tile-game",
    },
    {
      projectName: "Memo Game",
      tech: ["HTML5", "SCSS", "JavaScript", "FireBase"],
      description:
        "Simple Memory Game built with JavaScript and database implemented with FireBase. After every game we can save our scores and compare with other players. Game saves player name in local storage.",
      live: "https://tomekxoxo.github.io/memoGame/",
      github: "https://github.com/tomekxoxo/memoGame",
    },
    {
      projectName: "Weather App",
      tech: ["HTML5", "SCSS", "JavaScript"],
      description:
        "Great Weather App with geo location for better use. App shows forecast for 16 days every 3 hours each day implemented with Swiper library for better user experience.",
      live: "https://tomekxoxo.github.io/weatherApp/",
      github: "https://github.com/tomekxoxo/weatherApp",
    },
    {
      projectName: "Restaurant App",
      tech: ["HTML5", "SCSS", "JavaScript"],
      description: "Simple Restaurant page.",
      live: "https://tomekxoxo.github.io/osteria/",
      github: "https://github.com/tomekxoxo/osteria",
    },
    {
      projectName: "Clock App",
      tech: ["HTML5", "SCSS", "JavaScript"],
      description: "Awesome Luxury Clock application, for people who value time!",
      live: "https://tomekxoxo.github.io/clockJs/",
      github: "https://github.com/tomekxoxo/clockJs",
    },
  ]);

  let project = null;
  projectData.forEach((element, index) => {
    if (index + 1 == id) {
      project = element;
    }
  });

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle>
        <i className="fas fa-dollar-sign"></i>&#123;{project.projectName}&#125;
      </SectionTitle>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => {
          if (index + 1 == id) {
            return img.map((element, ind) => {
              return <SwiperSlide key={ind}>{element}</SwiperSlide>;
            });
          }
        })}
      </Swiper>
      <p>{project.description}</p>
      <h2>Technologies:</h2>
      {projectData.map((element, index) => {
        if (index + 1 == id) {
          return element.tech.map((technology, indx) => {
            return <SkillItem key={indx}>{technology}</SkillItem>;
          });
        }
      })}
      <br />
      {projectData.map((element, index) => {
        if (index + 1 == id) {
          return (
            <StyledButton key={index}>
              <a href={element.live} target="_blank" rel="noopener noreferrer">
                Go to Site
              </a>
            </StyledButton>
          );
        }
      })}
      {projectData.map((element, index) => {
        if (index + 1 == id) {
          return (
            <StyledButton key={index}>
              <a
                href={element.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </StyledButton>
          );
        }
      })}
      <StyledButton>
        <Link to={process.env.PUBLIC_URL + "/projects"} className="goBack">
          <i className="fas fa-chevron-circle-left"></i>Back To Projects
        </Link>
      </StyledButton>
    </Container>
  );
};

export default Project;
