import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Timeline, Event } from "./customTimeline/customTimeLine";
import styled from "styled-components";

const EducationTimeline = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/education`
        );
        setEducation(response.data);
      } catch (error) {
        console.error("Error fetching education data", error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <EducationSection>
      <Fragment>
        <Title>Education</Title>
        <Divider />
        <Timeline>
          {education.map((edu) => (
            <Event
              key={edu._id}
              interval={`${edu.startYear} - ${edu.endYear}`}
              title={edu.school}
              subtitle={`${edu.degree}, ${edu.fieldOfStudy}`}
            >
              {edu.description}
            </Event>
          ))}
        </Timeline>
      </Fragment>
    </EducationSection>
  );
};

export default EducationTimeline;

const EducationSection = styled.section`
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
  margin-left: 0; /* Aligns the hr to the left */
`;
