import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Swiggy from '../assets/Swiggy_dash.png';
import Shopify from '../assets/Dashboard_pic.png';
import youtube from '../assets/youtubee.png';
import fir from '../assets/auto_FIR.png';
import mjr from '../assets/MajorProject.jpg';
import routewise from '../assets/MCP.png';





const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: transparent;
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
  background: var(--section-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Overlay gradient that fades out on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%);
    transition: opacity 0.4s ease;
    opacity: 1;
    pointer-events: none;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.15);
  }

  ${ProjectCard}:hover &::after {
    opacity: 0;
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
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
  }
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
    background: var(--primary-color);
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5); /* Enhanced glowing shadow */
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
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4); /* Enhanced glowing shadow */
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 200px;
  }

  @media (max-width: 450px) {
    width: 80%;
    min-width: 130px;
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
      title: 'Verichain: GenAI-Powered Blockchain Evidence Manager (Major Project)',
      description: 'Developed a GenAI-powered blockchain platform ensuring tamper-proof digital evidence management through AI-based forgery detection and decentralized storage. Integrated Hyperledger Fabric, IPFS, and Zero-Knowledge Proofs for secure access and legal compliance.',
      image: mjr,
      technologies: ['Hyperledger Fabric', 'IPFS', 'Zero-Knowledge Proofs', 'GenAI', 'Blockchain', 'Smart Contracts', 'Decentralized Storage', 'AI-based Forgery Detection'],
      liveLink: '',
      githubLink: ''
    },

    {
      title: 'YouTube Data Scraping and Analysis using Python',
      description: 'In this project, I scraped data from YouTube using Python and performed an analysis of the data to uncover key trends and insights.Built a machine learning model to predict user engagement and forecast metrics such as likes and views, achieving 90% accuracy.',
      image: youtube,
      technologies: ['Python', 'Web Scraping', 'Machine Learning', 'Data Analysis'],
      liveLink: 'https://github.com/Preethesh29/Youtube_data-scraping_and_analysis/blob/main/Screenshot%202025-06-21%20094721.png',
      githubLink: 'https://github.com/Preethesh29/Youtube_data-scraping_and_analysis/tree/main'
    },
    {
      title: 'Auto Fir Registration System',
      description: 'The Auto FIR Registration System is an innovative software application designed to facilitate the efficient filing of First Information Reports (FIRs) for a range of incidents, including vehicle-related cases, theft, assault, murder, and suicide',
      image: fir,
      technologies: ['Python', 'PyQt5', 'SQLite', 'GUI'],
      liveLink: 'https://github.com/Preethesh29/Auto-FIR-Registration-System-/blob/main/Screenshots/Screenshot%202025-06-21%20093108.png',
      githubLink: 'https://github.com/Preethesh29/Auto-FIR-Registration-System-'
    },
    {
      title: 'Routewise - AI Route Optimization Platform',
      description: 'An intelligent route planning application powered by Ola Krutrim MCP that helps users optimize their travel routes, discover unique places, and get personalized travel recommendations.',
      image: routewise,
      technologies: ['React', 'Tailwind CSS', 'Ola Krutrim MCP', 'AI Route Optimization', 'Mapbox GL JS', 'Responsive Design '],
      liveLink: 'https://github.com/Preethesh29/Routewise_AI-Route-Optimization-Platform',
      githubLink: 'https://github.com/Preethesh29/Routewise_AI-Route-Optimization-Platform'
    },
    {
      title: 'Swiggy Dashboard',
      description: 'In this project, I performed an in-depth analysis of Swiggy\'s order data to uncover key trends and insights. The analysis focused on customer behavior, popular cuisines, peak order times, and delivery efficiency.',
      image: Swiggy,
      technologies: ['Power BI', 'DAX', 'Data Visualization', 'Data Cleaning', 'Data Transformation'],
      liveLink: 'https://github.com/Preethesh29/Swiggy_Data_Analysis/blob/main/Screenshot%202025-05-22%20211535.png',
      githubLink: 'https://github.com/Preethesh29/Swiggy_Data_Analysis'
    },
    {
      title: 'Shopify Data Analysis',
      description: 'The objective is to help stakeholders identify patterns in revenue generation, customer retention, and engagement trends to support data-driven decision-making.',
      image: Shopify,
      technologies: ['Power BI', 'Statistical Analysis', 'Data Modeling', 'DAX'],
      liveLink: 'https://github.com/Preethesh29/Shopify-Data-Analysis/blob/main/Dashboard_pic.png',
      githubLink: 'https://github.com/Preethesh29/Shopify-Data-Analysis'
    },
  ]

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent data analysis projects that demonstrate my analytical skills and business impact
          </motion.p>
        </ProjectsHeader>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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