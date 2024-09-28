import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validate email
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Validate message length
    if (message.length > 700) {
      setError("Message should be less than 700 characters.");
      return;
    }

    // Simulate successful submission
    setSuccess("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const position = [41.83566, -87.62584]; // Coordinates

  const customIcon = L.divIcon({
    className: "custom-icon",
    html: "📍",
    iconSize: [30, 30],
    popupAnchor: [0, -15],
  });

  return (
    <ContactSection>
      <Title>Contact</Title>
      <Divider />

      <MapWrapper>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <Marker position={position} icon={customIcon} />
        </MapContainer>
      </MapWrapper>

      {/* Error or Success Messages */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <SkillField>Contact Form</SkillField>
      <ContactForm onSubmit={handleSubmit}>
        <NameEmailContainer>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </NameEmailContainer>
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;

// Styled-components for styling the contact page

const ContactSection = styled.section`
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
  border-radius: 5px;
  margin: 2em 0;
  color: #e8cb93;
  margin-left: 0;
  margin-bottom: 3em;
`;

// Wrapper for the map
const MapWrapper = styled.div`
  width: 100%;
  padding-bottom: 62.5%; /* (10/16)*100 = 62.5% to maintain 16:10 aspect ratio */
  position: relative;
  margin-bottom: 40px;
  border-radius: 18px;

  & > .leaflet-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 18px;
  }
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
`;

const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: 0.8;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #242424;
  color: #fff;
  flex: 1;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #242424;
  color: #fff;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  opacity: 0.6;
  border: 1px solid #e8cb93;
  background-color: transparent;
  color: #e8cb93;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    background-color: rgba(232, 203, 147, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 20px;
`;
