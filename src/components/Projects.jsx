import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: var(--background);
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
    color: var(--text-color);
    margin-bottom: 1rem;
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
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: var(--light-text);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: var(--section-bg);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`

const ProjectButton = styled(motion.a)`
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
    background: #2563eb;
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);

    &:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
    }
  }

  &.secondary {
    background: transparent;
    border: 2px solid #2563eb;
    color: #2563eb;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.1);

    &:hover {
      background: #2563eb;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.2);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 200px;
  }

  @media (max-width: 450px) {
    width: 80%;
    min-width: 120px;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
`

const Projects = () => {
  const projectsData = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Created an interactive Tableau dashboard analyzing sales performance across different regions, products, and time periods, leading to 15% improvement in sales strategy.',
      image: '/project1.jpg',
      technologies: ['Tableau', 'SQL', 'Excel', 'Data Visualization'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Conducted comprehensive analysis of customer purchase patterns using Python and SQL, resulting in optimized marketing campaigns and 20% increase in customer engagement.',
      image: '/project2.jpg',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Market Trend Analysis',
      description: 'Developed a predictive model using historical market data to identify emerging trends and opportunities, helping stakeholders make data-driven decisions.',
      image: '/project3.jpg',
      technologies: ['R', 'Power BI', 'Statistical Analysis', 'Data Modeling'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Data Analysis Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent data analysis projects that demonstrate my analytical skills and business impact
          </motion.p>
        </ProjectsHeader>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectButton 
                    href={project.liveLink} 
                    className="primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </ProjectButton>
                  <ProjectButton
                    href={project.githubLink}
                    className="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </ProjectButton>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects 