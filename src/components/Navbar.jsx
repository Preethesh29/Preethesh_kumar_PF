import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 2rem;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Nav>
      <NavContainer>
        <Logo to="hero" smooth={true} duration={500}>
          Preethesh Kumar
        </Logo>
        <NavLinks>
          <NavLink to="about" smooth={true} duration={500}>
            About
          </NavLink>
          <NavLink to="skills" smooth={true} duration={500}>
            Skills
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="certifications" smooth={true} duration={500}>
            Certificates
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isOpen}>
        <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="certifications" smooth={true} duration={500} onClick={toggleMenu}>
          Certificates
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </NavLink>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar 