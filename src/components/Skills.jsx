import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const GlowingCardContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  border-radius: 15px;
  /* Extra space for the glow border */
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: -2px; /* This creates the 2px glowing border size */
    border-radius: 17px;
    background: radial-gradient(
      600px circle at var(--mouse-x, -500px) var(--mouse-y, -500px),
      rgba(139, 92, 246, 0.8), /* Purple Royal primary color */
      transparent 40%
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  .card-content {
    background: var(--section-bg);
    border-radius: 15px;
    padding: 2rem;
    height: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;

    h3 {
      color: var(--text-color);
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }
`

const SkillList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const SkillItem = styled(motion.div)`
  background: var(--section-bg);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
  /* Ensure it lifts nicely over background */
  position: relative;
  z-index: 2;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
  }
`

const GlowingCard = ({ index, children }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Tilt 
      tiltMaxAngleX={10} 
      tiltMaxAngleY={10} 
      scale={1.02} 
      transitionSpeed={2500} 
      className="parallax-effect"
      glareEnable={false}
    >
      <GlowingCardContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
      >
        <div className="card-content">
          {children}
        </div>
      </GlowingCardContainer>
    </Tilt>
  );
};

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
      skills: ['Dashboard Creation',  'Data Modeling']
    },
    {
      category: 'Tools & Others',
      skills: ['GitHub', 'Jupyter Notebooks', 'VS Code', 'Machine Learning Basics','Cursor','Quadratic']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are the tools and technologies I use to analyze data and create meaningful insights
          </motion.p>
        </SkillsHeader>
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <GlowingCard key={category.category} index={index}>
              <h3>{category.category}</h3>
              <SkillList
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {category.skills.map((skill) => (
                  <SkillItem key={skill} variants={itemVariants}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </GlowingCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills