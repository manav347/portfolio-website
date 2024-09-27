import React from "react";
import styled from "styled-components";
import { MdOutlineQueryStats, MdWeb, MdManageHistory } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";

const Summary = () => {
  return (
    <SummarySection>
      {/* First Section: Title */}
      <Title>About Me</Title>
      <Divider />

      <SummaryText>
        Hi, I’m Manavkumar Patel, a graduate student in Computer Science at the
        Illinois Institute of Technology, focusing on Artificial Intelligence
        and Business. I’m passionate about using technology to solve complex
        problems and drive innovation. My studies have provided me with a solid
        foundation in web development, data science, machine learning, and
        predictive modeling.
      </SummaryText>
      <SummaryText>
        I’ve gained hands-on experience in building intelligent systems, from
        designing user interfaces to developing machine learning models,
        aligning technology with real-world applications. My skills enable me to
        contribute to innovative solutions across diverse fields.
      </SummaryText>
      <SummaryText>
        Driven by a love for continuous learning, I thrive on challenges and
        enjoy exploring new ideas. Whether through research or collaboration,
        I’m always refining my skills to make a meaningful impact in the tech
        industry.
      </SummaryText>

      {/* Third Section: Technologies Grid */}
      <SectionTitle>What I'm Doing</SectionTitle>
      <Divider />
      <GridContainer>
        <TechnologyCard>
          <IconAndDetailsContainer>
            <FaviconContainer>
              <MdOutlineQueryStats
                style={{
                  color: "#e8cb93",
                  height: "1.8em",
                  width: "1.8em",
                }}
              />
            </FaviconContainer>
            <DetailsContainer>
              <TechName>Data Science</TechName>
              <TechDescription>
                I am proficient in data analysis, machine learning, and building
                predictive models.
              </TechDescription>
            </DetailsContainer>
          </IconAndDetailsContainer>
        </TechnologyCard>

        <TechnologyCard>
          <IconAndDetailsContainer>
            <FaviconContainer>
              <MdWeb
                style={{
                  color: "#e8cb93",
                  height: "1.8em",
                  width: "1.8em",
                }}
              />
            </FaviconContainer>
            <DetailsContainer>
              <TechName>Full Stack Development</TechName>
              <TechDescription>
                Skilled in front-end and back-end development across multiple
                tech stacks.
              </TechDescription>
            </DetailsContainer>
          </IconAndDetailsContainer>
        </TechnologyCard>

        <TechnologyCard>
          <IconAndDetailsContainer>
            <FaviconContainer>
              <TbCloudComputing
                style={{
                  color: "#e8cb93",
                  height: "1.8em",
                  width: "1.8em",
                }}
              />
            </FaviconContainer>
            <DetailsContainer>
              <TechName>Cloud (AWS)</TechName>
              <TechDescription>
                Experience in deploying and managing scalable applications on
                AWS.
              </TechDescription>
            </DetailsContainer>
          </IconAndDetailsContainer>
        </TechnologyCard>

        <TechnologyCard>
          <IconAndDetailsContainer>
            <FaviconContainer>
              <MdManageHistory
                style={{
                  color: "#e8cb93",
                  height: "1.8em",
                  width: "1.8em",
                }}
              />
            </FaviconContainer>
            <DetailsContainer>
              <TechName>Product Management</TechName>
              <TechDescription>
                Proficient in leading cross-functional teams to build innovative
                products.
              </TechDescription>
            </DetailsContainer>
          </IconAndDetailsContainer>
        </TechnologyCard>
      </GridContainer>
    </SummarySection>
  );
};

export default Summary;

// Styled-components at the end of the file

const SummarySection = styled.section`
  padding: 0 40px 40px;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0px;
`;

const Divider = styled.hr`
  width: 50px;
  border: 3px solid;
  border-radius: 5px; /* Rounds the edges */
  margin: 2em 0;
  color: #e8cb93;
  margin-left: 0; /* Aligns the hr to the left */
`;

const SummaryText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 80px 0 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechnologyCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const IconAndDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FaviconContainer = styled.div`
  width: 1.8em;
  height: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Favicon = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TechName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const TechDescription = styled.p`
  font-size: 0.9rem;
  margin: 0;
  margin-top: 5px;
`;
