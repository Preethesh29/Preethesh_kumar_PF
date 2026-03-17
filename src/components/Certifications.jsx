import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import freeCodeCampImg from '../assets/Freecodecamp.jpg';
import pandas from '../assets/DataSciencewithpandas.jpg';
import uiuxs from '../assets/uiux.png';
import Deloitte from '../assets/deloitte.png';


const CertificationsSection = styled(motion.section)`
  background: transparent;
  padding: 100px 0;
`;

const CertificationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CertificationsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
`;

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: var(--section-bg);
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
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CertificationImage = styled(motion.div)`
  width: 100%;
  height: 200px;
  background: var(--section-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img, object {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--section-bg);
  }
`;

const CertificationContent = styled(motion.div)`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    color: var(--light-text);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .issuer {
    color: var(--primary-color);
    font-weight: 500;
  }

  .btn {
    margin-top: auto;
    width: 100%;
    text-align: center;
  }
`;

const Certification = () => {
  const certifications = [
    {
      title: "Data Science with Pandas workshop",
      issuer: "SJEC",
      date: "2024",
      link: pandas,
      image: pandas
    },
    {
      title: "UI/UX Design Workshop",
      issuer: "SJEC",
      date: "2024",
      link: uiuxs,
      image: uiuxs
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "2024",
      link: freeCodeCampImg,
      image: freeCodeCampImg
    },
    {
      title: "Data	Analytics	Job	Simulation",
      issuer: "Deloitte(Forage)",
      date: "2025",
      link: Deloitte,
      image: Deloitte
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderImage = (image) => {
    if (image.endsWith('.pdf')) {
      return (
        <object
          data={image}
          type="application/pdf"
          className="pdf-preview"
        >
          <div className="pdf-placeholder">
            <span>PDF Preview</span>
          </div>
        </object>
      );
    }
    return <img src={image} alt="certification" />;
  };

  return (
    <CertificationsSection
      id="certifications"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <CertificationsContainer>
        <CertificationsHeader variants={headerVariants}>
          <motion.h2
            variants={headerVariants}
          >
            Certifications
          </motion.h2>
        </CertificationsHeader>
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CertificationImage variants={imageVariants}>
                {renderImage(cert.image)}
              </CertificationImage>
              <CertificationContent variants={contentVariants}>
                <motion.h3
                  variants={contentVariants}
                >
                  {cert.title}
                </motion.h3>
                <motion.p 
                  className="issuer"
                  variants={contentVariants}
                >
                  {cert.issuer}
                </motion.p>
                <motion.p 
                  className="date"
                  variants={contentVariants}
                >
                  {cert.date}
                </motion.p>
                {cert.credentialId && (
                  <motion.p 
                    className="credential-id"
                    variants={contentVariants}
                  >
                    Credential ID: {cert.credentialId}
                  </motion.p>
                )}
                <motion.a 
                  href={cert.link} 
                  className="btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={contentVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              </CertificationContent>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsContainer>
    </CertificationsSection>
  );
};

export default Certification; 