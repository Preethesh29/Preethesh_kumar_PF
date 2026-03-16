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



const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <AboutText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              I am a Data Science undergraduate at St. Joseph Engineering College with a strong interest in data engineering, analytics, and software development. I enjoy transforming raw data into meaningful insights and building scalable systems that support data-driven decision making.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              I have hands-on experience with Python, SQL, C++, PySpark, Databricks, and Azure, along with knowledge of machine learning, big data technologies, and data visualization. My projects include building machine learning prediction models, data scraping and analytics platforms, and AI-driven systems.<br />
              <br />
              I am always eager to learn new technologies, collaborate on innovative projects, and contribute to building impactful solutions in the fields of data engineering, analytics, and software development.
            </motion.p>
          </AboutText>
          <AboutImage
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img src={profilePhoto} alt="Preethesh Kumar" />
          </AboutImage>
        </AboutContent>

      </AboutContainer>
    </AboutSection>
  )
}

export default About 