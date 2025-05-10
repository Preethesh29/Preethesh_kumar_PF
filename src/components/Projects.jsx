import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
  background: var(--section-bg);
  padding: 100px 0;
`

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    color: var(--light-text);
    max-width: 600px;
    margin: 0 auto;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    color: var(--light-text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    background: var(--section-bg);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-color);
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn using historical data. Achieved 85% accuracy in identifying at-risk customers.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualization'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Created an interactive dashboard using Tableau to analyze sales performance across different regions and product categories.',
      tags: ['Tableau', 'SQL', 'Data Visualization', 'Business Intelligence'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'Built a natural language processing tool to analyze customer feedback and reviews, providing insights into customer satisfaction.',
      tags: ['Python', 'NLP', 'TensorFlow', 'Data Analysis'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Inventory Optimization',
      description: 'Implemented a data-driven solution to optimize inventory levels, reducing stockouts by 30% and excess inventory by 25%.',
      tags: ['Python', 'Statistical Analysis', 'SQL', 'Data Modeling'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Market Basket Analysis',
      description: 'Conducted market basket analysis to identify product associations and optimize store layout and promotional strategies.',
      tags: ['R', 'Association Rules', 'Data Mining', 'Visualization'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Developed a predictive maintenance system using sensor data to forecast equipment failures and optimize maintenance schedules.',
      tags: ['Python', 'Time Series Analysis', 'Machine Learning', 'IoT'],
      demo: '#',
      code: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A selection of my recent data analysis and machine learning projects
          </motion.p>
        </ProjectsHeader>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectImage
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ProjectTags>
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects 