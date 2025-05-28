import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: var(--section-bg);
`

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--light-text);
    max-width: 600px;
    margin: 0 auto;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const SkillCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  h3 {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--light-text);

  &::before {
    content: '▹';
    color: var(--primary-color);
    margin-right: 0.5rem;
  }
`

const Skills = () => {
  const skillsData = [
    {
      category: 'Data Analysis',
      skills: ['SQL', 'Python', 'Excel', 'Statistical Analysis', 'Data Cleaning']
    },
    {
      category: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Data Storytelling']
    },
    {
      category: 'Business Intelligence',
      skills: ['Dashboard Creation', 'KPI Tracking', 'Business Metrics', 'Report Automation', 'Data Modeling']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Jupyter Notebooks', 'VS Code', 'Machine Learning Basics','Cursor','Quadratic']
    }
  ]

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are the tools and technologies I use to analyze data and create meaningful insights
          </motion.p>
        </SkillsHeader>
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCard
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category.category}</h3>
              <SkillList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills 