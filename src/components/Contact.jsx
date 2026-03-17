import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const ContactSection = styled.section`
  background: transparent;
`

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
`

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
`

const ContactInfo = styled.div`
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  p {
    color: var(--light-text);
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-color);

  svg {
    color: var(--primary-color);
    font-size: 1.2rem;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: var(--text-color);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>
        <ContactContent>
          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
            <ContactDetails>
              <ContactDetail>
                <FaEnvelope style={{ color: 'white' }} />
                <a href="mailto:preethesh.kumar29@gmail.com">preethesh.kumar29@gmail.com</a>
              </ContactDetail>
            </ContactDetails>
            <SocialLinks>
              <motion.a
                href="https://github.com/Preethesh29"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/preethesh-kumar-b5aa25294/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/preethesh__kumar_/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaInstagramSquare />
              </motion.a>
              <motion.a
                href="https://wa.me/919353579647"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <FaWhatsapp />
              </motion.a>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact