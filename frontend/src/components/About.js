// src/components/About.js
import React from "react";
import styled from "styled-components";
import { ReactTyped } from "react-typed";
import {
  IoPhonePortraitOutline,
  IoDocumentTextOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const About = () => {
  const imageUrl = "https://i.postimg.cc/PqyBDpCV/output-onlinepngtools-3.png"; // Corrected link

  return (
    <MainContainer>
      <NameContainer>
        <ProfileLink to="/">
          {" "}
          {/* Wrap image with Link */}
          <ProfileImage src={imageUrl} alt="Profile" />
        </ProfileLink>
        <NameTitle>Manavkumar Patel</NameTitle>
        <Description>
          <ReactTyped
            loop
            typeSpeed={100}
            backSpeed={75}
            strings={["Developer", "Data Analyst", "Cloud Developer"]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
        </Description>
      </NameContainer>
      <hr
        style={{
          margin: "30px",
          border: "none",
          height: "2px", // Adjust the height as needed
          backgroundColor: "#323232", // Solid color
        }}
      />

      <ContactContainer>
        <ContactItem>
          <IconContainer>
            <MdOutlineMarkEmailRead
              style={{
                backgroundColor: "#212121",
                borderRadius: "12px",
                padding: "20px",
                color: "#e8cb93",
                height: "1.5em",
                width: "1.5em",
              }}
            />
          </IconContainer>
          <DetailContainer>
            <DetailTop>EMAIL</DetailTop>
            <DetailBottom>
              <EmailLink href="mailto:mpatel177@hawk.iit.edu">
                mpatel177@hawk.iit.edu
              </EmailLink>
            </DetailBottom>
          </DetailContainer>
        </ContactItem>

        <ContactItem>
          <IconContainer>
            <IoPhonePortraitOutline
              style={{
                backgroundColor: "#212121",
                borderRadius: "12px",
                padding: "20px",
                color: "#e8cb93",
                height: "1.5em",
                width: "1.5em",
              }}
            />
          </IconContainer>
          <DetailContainer>
            <DetailTop>Phone</DetailTop>
            <DetailBottom>
              <PhoneLink href="#+1 (872) 258-6613">+1 (872) 258-6613</PhoneLink>
            </DetailBottom>
          </DetailContainer>
        </ContactItem>

        <ContactItem>
          <IconContainer>
            <IoDocumentTextOutline
              style={{
                backgroundColor: "#212121",
                borderRadius: "12px",
                padding: "20px",
                color: "#e8cb93",
                height: "1.5em",
                width: "1.5em",
              }}
            />
          </IconContainer>

          <DetailContainer>
            <DetailTop>Resume</DetailTop>
            <DetailBottom>
              <a
                href="https://drive.google.com/file/d/1uAJXR3PcWb7AoHAfCa0xUQWGugXdhZCG/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </DetailBottom>
          </DetailContainer>
        </ContactItem>

        <ContactItem>
          <IconContainer>
            <IoLocationOutline
              style={{
                backgroundColor: "#212121",
                borderRadius: "12px",
                padding: "20px",
                color: "#e8cb93",
                height: "1.5em",
                width: "1.5em",
              }}
            />
          </IconContainer>

          <DetailContainer>
            <DetailTop>Location</DetailTop>
            <DetailBottom>
              <a
                href="/path/to/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chicago, Illinois
              </a>
            </DetailBottom>
          </DetailContainer>
        </ContactItem>

        <SocialMediaContainer>
          <SocialIcon
            href="https://www.linkedin.com/in/manavkumar-patel/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: "0.8em",
              width: "0.8em",
            }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/manav347"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: "0.8em",
              width: "0.8em",
            }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://x.com/Manavp77"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: "0.8em",
              width: "0.8em",
            }}
          >
            <FaTwitter />
          </SocialIcon>
        </SocialMediaContainer>
      </ContactContainer>
    </MainContainer>
  );
};

const ProfileLink = styled(Link)`
  display: inline-block;
`;

// Styled components
const MainContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 18px;
  color: #d3d3d3;
`;

const NameContainer = styled.div`
  margin: 10%;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 80%;
  height: 80%;
  margin: 10% 10% 15%;
  border-radius: 28px;
`;

const NameTitle = styled.h1`
  color: #d3d3d3;
  margin: 0;
  &:hover {
    color: #e8cb93;
  }
`;

const Description = styled.p`
  color: #d3d3d3;
  background-color: #242424;
  padding: 12px;
  margin: 15%;
  border-radius: 12px;
`;

// Styled components
const ContactContainer = styled.div`
  margin: 10%;
  text-align: left;

  a {
    color: #d3d3d3;
    text-decoration: none;
    &:hover {
      color: #e8cb93;
    }
  }

  p {
    margin: 5px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 22px 0;
`;

const IconContainer = styled.div`
  // width: 40px;
  // height: 40px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  border-radius: 5px;
  color: #d3d3d3;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTop = styled.p`
  font-weight: bold;
  margin: 0;
  color: #d3d3d3;
  opacity: 0.7; /* Adjust this value (between 0 and 1) to control the fading */
`;

const DetailBottom = styled.p`
  margin: 0;
  color: #d3d3d3;
  // overflow: hidden;
  // text-overflow: ellipsis;
  opacity: 0.9; /* Adjust this value (between 0 and 1) to control the fading */
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: inherit; /* Inherits the color from the parent container */
  font-size: inherit; /* Inherits the font size from the parent container */
  &:hover {
    text-decoration: none; /* No underline on hover */
  }
`;

const PhoneLink = styled.a`
  text-decoration: none;
  color: inherit; /* Inherit the color from the parent container */
  font-size: inherit; /* Inherit the font size from the parent container */
  &:hover {
    text-decoration: none; /* No underline on hover */
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 5px; /* Adjusted gap for the favicons */
  margin-top: 50px; /* Added top margin */
  justify-content: center; /* Center the icons */
`;

const SocialIcon = styled.a`
  color: #d3d3d3;
  font-size: 24px; /* Keep the size of the favicon the same */
  margin: 0 12px;

  &:hover {
    color: #e8cb93;
  }
`;

export default About;
