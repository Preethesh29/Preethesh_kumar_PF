import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    gap: 1rem;
    animation: ${props => props.isOpen ? 'slideDown 0.3s ease' : 'none'};
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">Preethesh</Logo>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#home" onClick={handleLinkClick}>Home</NavLink>
          <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
          <NavLink href="#experience" onClick={handleLinkClick}>Experience</NavLink>
          <NavLink href="#skills" onClick={handleLinkClick}>Skills</NavLink>
          <NavLink href="#projects" onClick={handleLinkClick}>Projects</NavLink>
          <NavLink href="#certifications" onClick={handleLinkClick}>Certifications</NavLink>
          <NavLink href="#contact" onClick={handleLinkClick}>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navbar 