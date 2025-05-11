import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiPython, SiMongodb, SiPostgresql } from 'react-icons/si'

const SkillsSection = styled.section`
  background: var(--section-bg);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`

const SkillsContainer = styled.div`
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

const SkillsHeader = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const SkillCategory = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.6s ease;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    color: var(--light-text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform-origin: left;

    &::before {
      content: '▹';
      color: var(--primary-color);
    }
  }
`

const SkillCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    color: var(--light-text);
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`

const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const skillCategories = [
    {
      title: 'Data Analysis Tools',
      skills: [
        'Python (Pandas, NumPy)',
        'SQL & Database Management',
        'Excel',
        'Power BI ',
        'Data Visualization'
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        'Scikit-learn',
        'TensorFlow & Keras',
        'Statistical Analysis',
        'Predictive Modeling',
        'Natural Language Processing'
      ]
    },
    {
      title: 'Data Engineering',
      skills: [
        'ETL Processes',
        'Data Warehousing',
        'Big Data Technologies',
        'Data Pipeline Development',
        'Data Quality Assurance'
      ]
    },
    {
      title: 'Business Intelligence',
      skills: [
        'Data Storytelling',
        'Dashboard Development',
        'KPI Tracking',
        'Business Metrics Analysis',
        'Report Automation'
      ]
    }
  ]

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Proficient in various data analysis tools and techniques to transform raw data into valuable insights
          </motion.p>
        </SkillsHeader>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  variants={skillVariants}
                >
                  {category.title}
                </motion.h3>
                <ul>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      variants={skillVariants}
                      custom={skillIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills 