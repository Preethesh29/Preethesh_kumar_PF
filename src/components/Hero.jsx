import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import resume from '../assets/preethesh_cv_21.pdf';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--background);
  padding: 100px 0;
`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const HeroGreeting = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeroButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 140px;
  justify-content: center;

  &.primary {
    background: var(--primary-color);
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(26, 26, 26, 0.2);

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(26, 26, 26, 0.3);
    }
  }

  &.secondary {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    box-shadow: 0 4px 15px rgba(26, 26, 26, 0.1);

    &:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(26, 26, 26, 0.2);
    }
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 200px;
  }
`

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroGreeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, It's me
          </HeroGreeting>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Preethesh Kumar
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          Passionate about data science, software development, business intelligence, and SQL-based analytics to drive impactful decision-making and seamless user experiences.
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HeroButton 
              href="#projects" 
              className="secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </HeroButton>
            <HeroButton 
              href="#contact" 
              className="secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </HeroButton>
            <HeroButton 
              href={resume} 
              className="secondary"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload />
              Download Resume
            </HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero