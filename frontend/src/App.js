// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router v6 components
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Summary from "./components/summary";
import Education from "./components/education";
import Portfolio from "./components/Portfolio";
import DetailProject from "./components/detailProject";
import Skills from "./components/skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <MainBackground>
        <PrimaryContainer>
          <AboutContainer>
            <About />
          </AboutContainer>
          <InfoContainer>
            <NavbarContainer>
              <NavbarContainerWrapper>
                <Navbar />
              </NavbarContainerWrapper>
            </NavbarContainer>
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/about" element={<Summary />} />
              <Route path="/project" element={<Portfolio />} />
              <Route path="/project/:project_id" element={<DetailProject />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </InfoContainer>
        </PrimaryContainer>
      </MainBackground>
    </Router>
  );
};

// Styled components

const MainBackground = styled.div`
  background-color: #111111; /* Background color for the entire webpage */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrimaryContainer = styled.div`
  display: flex;
  width: 88vw;
  margin: 6%;
  flex-direction: row; /* Default for larger screens */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
    height: auto; /* Adjust height for vertical stacking */
  }
`;

const AboutContainer = styled.div`
  width: 25%;
  background-color: #1e1e1e; /* Updated background color */
  padding: 20px;
  color: #d3d3d3;
  border-radius: 18px;

  h2,
  p {
    color: inherit;
  }

  h1:hover {
    color: #e8cb93;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 0px;
    margin-bottom: 20px; /* Add space between About and Info sections */
    border-radius: 0 18px 0 18px;
  }
`;

const InfoContainer = styled.div`
  width: 75%;
  margin: 0 0 0 2%;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e; /* Updated background color */
  color: #d3d3d3;
  border-radius: 18px;
  background-color: #1e1e1e; /* Updated background color */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 0; /* Remove side padding on mobile */
    margin: 0;
  }
`;

const NavbarContainerWrapper = styled.div`
  padding-left: 5%;
  padding: 20px 20px 20px 20px;
  border-radius: 0 18px 0 18px;

  background-color: #252626; /* Updated background color */
  @media (max-width: 768px) {
    justify-content: center; /* Center navbar on mobile */
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns the navbar to the right */
  border-radius: 18px 18px 0 0;

  @media (max-width: 768px) {
    justify-content: center; /* Center navbar on mobile */
    display: inline;
  }
`;

const SummaryContainer = styled.div`
  padding: 20px;
  background-color: #1e1e1e; /* Updated background color */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 18px 18px;
  height: 100%;

  h1,
  p {
    color: #d3d3d3;
  }

  h1:hover {
    color: #e8cb93;
  }

  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding on mobile */
    height: auto; /* Allow height to adjust on smaller screens */
  }
`;

export default App;
