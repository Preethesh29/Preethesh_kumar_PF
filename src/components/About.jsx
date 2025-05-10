import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import profilePhoto from '../assets/My_pic.JPG'

const AboutSection = styled.section`
  background: var(--section-bg);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: var(--light-text);
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: var(--light-text);
    margin-bottom: 1.5rem;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  h4 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--light-text);
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
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
              I am a passionate Data Analyst with a strong foundation in data analysis and visualization.
              With expertise in statistical analysis, data mining, and business intelligence tools,
              I strive to uncover meaningful patterns and insights that drive informed decision-making.
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
          <AboutImage>
            <img src={profilePhoto} alt="Preethesh Kumar" />
          </AboutImage>
        </AboutContent>
        <StatsGrid>
          <StatItem>
            <h4>3+</h4>
            <p>Years Experience</p>
          </StatItem>
          <StatItem>
            <h4>50+</h4>
            <p>Projects Analyzed</p>
          </StatItem>
          <StatItem>
            <h4>30+</h4>
            <p>Data Insights Delivered</p>
          </StatItem>
        </StatsGrid>
      </AboutContainer>
    </AboutSection>
  )
}

export default About 