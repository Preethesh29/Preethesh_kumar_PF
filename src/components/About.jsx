import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import profilePhoto from '../assets/My_pic.JPG'

const AboutSection = styled.section`
  background: var(--section-bg);
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  p {
    color: var(--light-text);
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`

const AboutImage = styled(motion.div)`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 20px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    aspect-ratio: 1;
    max-width: 400px;
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      top: -15px;
      left: -15px;
      right: 15px;
      bottom: 15px;
      border-color: var(--secondary-color);
    }

    img {
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
      filter: brightness(1.05);
    }
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--light-text);
    font-size: 1.1rem;
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <AboutText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am a passionate Data Analyst and Aspiring Data Scientist with a strong foundation in data analysis, software development, and user experience design. With expertise in statistical analysis, data visualization, SQL, and business intelligence tools, I aim to transform complex data into meaningful insights that empower smarter decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My journey in data analysis started with a curiosity about understanding patterns and
              making sense of complex information. I believe in continuous learning and staying
              up-to-date with the latest data analysis tools, techniques, and industry trends.
            </motion.p>
          </AboutText>
          <AboutImage
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={profilePhoto} alt="Preethesh Kumar" />
          </AboutImage>
        </AboutContent>
        <StatsContainer>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>1+</h3>
            <p>Years Experience</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>5+</h3>
            <p>Projects Analyzed</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>3+</h3>
            <p>Data Insights Delivered</p>
          </StatItem>
        </StatsContainer>
      </AboutContainer>
    </AboutSection>
  )
}

export default About 