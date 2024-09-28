// src/components/Navbar.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Use Link for client-side navigation

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/project">Projects</NavItem>
      <NavItem to="/experience">Experience</NavItem>
      <NavItem to="/education">Education</NavItem>
      <NavItem to="/skills">Skills</NavItem>
      {/* <NavItem to="/blog">Blog</NavItem> */}
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  );
};

// Styled components
const Nav = styled.nav`
  display: flex;
  gap: 40px;
  overflow-x: scroll; /* Enable horizontal scrolling */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavItem = styled(Link)`
  // Use Link instead of 'a'
  text-decoration: none;
  color: #d3d3d3;
  font-weight: bold;
  white-space: nowrap; /* Prevent items from wrapping */

  &:hover {
    color: #e8cb93;
  }
`;

export default Navbar;
