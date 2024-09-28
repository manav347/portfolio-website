import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Timeline, Event } from "./customTimeline/customTimeLine";
import styled from "styled-components";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/experience`
        );
        setExperience(response.data);
      } catch (error) {
        console.error("Error fetching experience data", error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <ExperienceSection>
      <Fragment>
        <Title>Experience</Title>
        <Divider />
        <Timeline>
          {experience.map((exp) => (
            <Event
              key={exp._id}
              interval={exp.duration}
              title={exp.companyName}
              subtitle={exp.position}
            >
              {exp.description.split("•").map((line, index) => (
                <p key={index}>• {line.trim()}</p>
              ))}
            </Event>
          ))}
        </Timeline>
      </Fragment>
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  padding: 0 40px 40px;
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
  margin-left
`;
