import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the project_id from URL
import axios from "axios";
import styled from "styled-components";

const DetailProject = () => {
  const { project_id } = useParams(); // Get the project_id from URL
  const [project, setProject] = useState(null); // Store project data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/project/${project_id}`
        );
        setProject(response.data); // Set project data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching project details", error);
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [project_id]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (!project) {
    return <ErrorMessage>Project not found.</ErrorMessage>;
  }

  return (
    <ProjectSection>
      <Divider />
      <Title>{project.title}</Title>
      <ProjectContainer>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <ProjectImageContainer>
            <ProjectImage src={project.picUrl} alt={project.title} />
          </ProjectImageContainer>
        </a>
        <ProjectInfo>
          <Description>{project.description}</Description>
          <ProjectDetails>
            <DetailItem>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </DetailItem>
            <DetailItem>
              <strong>Tags:</strong> {project.tags.join(", ")}
            </DetailItem>
            <DetailItem>
              <strong>Start Date:</strong> {project.startDate}
            </DetailItem>
            <DetailItem>
              <strong>End Date:</strong> {project.endDate}
            </DetailItem>
            <DetailItem>
              <strong>Affiliation:</strong> {project.affiliation}
            </DetailItem>
          </ProjectDetails>
        </ProjectInfo>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default DetailProject;

// Styled-components
const ProjectSection = styled.section`
  padding: 0 40px 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0px;
  text-align: left !important;
  color: #d3d3d3;
`;

const Divider = styled.hr`
  width: 50px;
  border: 3px solid;
  border-radius: 5px;
  margin: 2em 0;
  color: #e8cb93;
  margin-left: 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); // Slight zoom effect on hover
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  padding: 20px;
`;

const Description = styled.p`
  text-align: left;
  font-size: 1rem;
  line-height: 1.5;
  color: #d3d3d3;
`;

const ProjectDetails = styled.div`
  margin-top: 20px;
`;

const DetailItem = styled.p`
  text-align: left;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #d3d3d3;
`;

const Loading = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  color: #d3d3d3;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: red;
  margin-top: 50px;
`;
