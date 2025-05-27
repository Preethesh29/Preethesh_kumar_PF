import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ExperienceSection = styled.section`
  padding: 100px 0;
  background-color: var(--background-light);

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`

const ExperienceHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: var(--text-dark);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: var(--text-dark);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    top: 15px;
    right: -10px;
    z-index: 1;
  }

  &:nth-child(even)::after {
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
    }

    &::after {
      left: 20px;
    }

    &:nth-child(even)::after {
      left: 20px;
    }
  }
`

const TimelineContent = styled.div`
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 15px;
  }
`

const TimelineDate = styled.span`
  color: var(--primary-color);
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const TimelineTitle = styled.h3`
  color: var(--text-dark);
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const TimelineCompany = styled.h4`
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

const TimelineDescription = styled.ul`
  color: var(--text-dark);
  opacity: 0.8;
  margin: 0;
  padding-left: 20px;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding-left: 15px;
  }
`

const TimelineDescriptionItem = styled.li`
  margin-bottom: 5px;
  line-height: 1.5;
`

const Experience = () => {
  const experienceData = [
    {
      date: '2023 - Present',
      title: 'Data Analyst',
      company: 'Company Name',
      description: [
        'Developed and maintained interactive dashboards using Power BI, resulting in 30% faster decision-making',
        'Conducted data analysis using Python and SQL to identify trends and patterns',
        'Collaborated with cross-functional teams to implement data-driven solutions',
        'Created automated reports that reduced manual work by 40%'
      ]
    },
    {
      date: '2022 - 2023',
      title: 'Business Intelligence Intern',
      company: 'Previous Company',
      description: [
        'Assisted in data collection and cleaning processes',
        'Created visualizations for monthly business reviews',
        'Participated in data quality improvement initiatives',
        'Supported senior analysts in report generation'
      ]
    }
  ]

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <ExperienceHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey and the impact I've made along the way
          </motion.p>
        </ExperienceHeader>
        <Timeline>
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineDate>{experience.date}</TimelineDate>
                <TimelineTitle>{experience.title}</TimelineTitle>
                <TimelineCompany>{experience.company}</TimelineCompany>
                <TimelineDescription>
                  {experience.description.map((item, i) => (
                    <TimelineDescriptionItem key={i}>{item}</TimelineDescriptionItem>
                  ))}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  )
}

export default Experience 