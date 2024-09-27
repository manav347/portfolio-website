import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/skills"); // Updated endpoint
        setSkills(response.data); // Store skills data in state
      } catch (error) {
        console.error("Error fetching skills", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <SkillsSection>
      <Title>Skills</Title>
      <Divider />
      {skills.map((skill, index) => (
        <div key={index}>
          <Wrapper>
            <SkillField>{skill.field}</SkillField>
            <TechnologiesContainer>
              {skill.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechnologiesContainer>
          </Wrapper>
        </div>
      ))}
    </SkillsSection>
  );
};

export default Skills;

// Styled-components for styling the grid and cards
const SkillsSection = styled.section`
  padding: 0 40px 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0px;
  text-align: left !important;
`;

const Divider = styled.hr`
  width: 50px;
  border: 3px solid;
  border-radius: 5px; /* Rounds the edges */
  margin: 2em 0;
  color: #e8cb93;
  margin-left: 0;
  margin-bottom: 3em;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const SkillField = styled.h3`
  font-size: 1.5rem;
  margin: 30px 0 20px;
  text-align: left;
  color: #d3d3d3;
  &:hover {
    color: #e8cb93;
    opacity: 0.8;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: #242424;
  padding: 8px 16px;
  border-radius: 16px;
  color: #fff;
  opacity: 0.8;
  font-size: 0.9rem;
`;
