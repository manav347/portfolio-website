import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All"); // Default filter is "All"
  const [tags, setTags] = useState(["All"]); // Tags will store all unique tags including "All"

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/project");
        setProjects(response.data);
        setFilteredProjects(response.data);

        // Extract unique tags from project data and include "All" as default
        const allTags = response.data.reduce(
          (acc, project) => {
            project.tags.forEach((tag) => {
              if (!acc.includes(tag)) {
                acc.push(tag);
              }
            });
            return acc;
          },
          ["All"]
        ); // Start with "All" in the tag list
        setTags(allTags);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  // Handle tag filtering
  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    if (tag === "All") {
      setFilteredProjects(projects); // Show all projects
    } else {
      const filtered = projects.filter((project) => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  // Handle project click and redirect to the project details page
  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <PortfolioSection>
      <Title>Project</Title>
      <Divider />

      {/* Tag Filter Buttons */}
      <TagFilterContainer>
        {tags.map((tag, index) => (
          <TagButton
            key={index}
            onClick={() => handleTagFilter(tag)}
            isActive={selectedTag === tag}
          >
            {tag}
          </TagButton>
        ))}
      </TagFilterContainer>

      <GridContainer>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project._id}
            onClick={() => handleProjectClick(project._id)}
          >
            {/* Clickable Image */}
            <ImageContainer>
              <ProjectImage
                src={project.picUrl} // Use the image link from the project data
                alt={project.title}
              />
            </ImageContainer>
            {/* Project Title */}
            <ProjectTitle>{project.title}</ProjectTitle>
            {/* Project Tags */}
            <ProjectTags>{project.tags.join(", ")}</ProjectTags>
          </ProjectCard>
        ))}
      </GridContainer>
    </PortfolioSection>
  );
};

export default Portfolio;

// Styled-components for styling the grid and cards
const PortfolioSection = styled.section`
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
  margin-left: 0; /* Aligns the hr to the left */
`;

// Container for Tag Filter Buttons
const TagFilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;

// Individual Tag Button
const TagButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? "#e8cb93" : "#242424")};
  color: #fff;
  border: 1px solid #e8cb93;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "#d6b783" : "rgba(232, 203, 147, 0.2)"};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  line-height: 1em;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for iPad/tablet view
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column for mobile view
  }
`;

const ProjectCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer; /* Makes the whole card clickable */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px; /* Set a fixed height for consistent image size */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 5px 0 0;
  object-fit: cover; /* This will maintain the aspect ratio and cover the container */
  transition: transform 0.2s ease-in-out;
  text-align: left !important;

  &:hover {
    transform: scale(1.05); // Slight zoom effect on hover
  }
`;

const ProjectTitle = styled.p`
  text-align: left !important;
  margin: 15px 0 0;
  font-size: 0.9em;
  opacity: 0.7; /* Adjust this value (between 0 and 1) to control the fading */
`;

const ProjectTags = styled.p`
  text-align: left !important;
  margin: 5px 0;
  font-size: 0.9em;
  opacity: 0.9; /* Adjust this value (between 0 and 1) to control the fading */
`;
