import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import resume from '../assets/preethesh_cv__29.pdf'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 100px 0;
  overflow: hidden; /* Prevent horizontal scroll from initial slide-in */
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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroGreeting = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroTyping = styled(motion.div)`
  font-size: 1.8rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
  height: 60px; /* Prevent layout shift */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    height: 40px;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: var(--light-text);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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
  justify-content: center;

  &.primary {
    background: var(--primary-color);
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1);

    &:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.2);
    }
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          {/* Smooth Slide-in from Left */}
          <HeroGreeting
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, It's me
          </HeroGreeting>

          <HeroTitle
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Preethesh Kumar
          </HeroTitle>

          <HeroTyping
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                'Aspiring Data Analyst',
                2000,
                'Aspiring Data Scientist',
                2000,
                'Aspiring Data Engineer',
                2000,
                'Aspiring Software Engineer',
                2000,
                'Business Intelligence Enthusiast',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </HeroTyping>

          <HeroSubtitle
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Passionate about data science, software development, business intelligence, and SQL-based analytics to drive impactful decision-making and seamless user experiences.
          </HeroSubtitle>

          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <HeroButton
              href="#projects"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </HeroButton>
            <HeroButton
              href="#contact"
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </HeroButton>
            <HeroButton
              href={resume}
              className="secondary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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