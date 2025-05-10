import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaDownload } from 'react-icons/fa'
import resume from '../assets/preethesh_cv.pdf'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background: linear-gradient(135deg, #f6f8fd 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

const HeroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`

const HeroContent = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: var(--light-text);
    margin-bottom: 2.5rem;
    line-height: 1.6;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`

const AnimatedText = styled(motion.span)`
  display: inline-block;
  color: var(--primary-color);
`

const Hero = () => {
  const nameVariants = {
    hidden: { y: 400 },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={nameVariants}
          >
            Hi, I'm <AnimatedText>Preethesh Kumar</AnimatedText>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            A passionate Data Analyst transforming complex data into actionable insights and driving data-driven decisions.
          </motion.p>
          <ButtonGroup>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link to="projects" smooth={true} duration={500} className="btn">
                View My Work
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link to="contact" smooth={true} duration={500} className="btn" style={{ background: 'transparent', border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}>
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <DownloadButton 
                href={resume}
                download="Preethesh_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download Resume
              </DownloadButton>
            </motion.div>
          </ButtonGroup>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero