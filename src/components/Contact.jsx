import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const ContactSection = styled.section`
  background: var(--section-bg);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`

const ContactContainer = styled.div`
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

const ContactHeader = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ContactInfo = styled.div`
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
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  a {
    color: var(--text-color);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    &:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`

const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 0.7rem;
      font-size: 0.95rem;
    }

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;

    @media (max-width: 768px) {
      min-height: 120px;
    }
  }
`

const SubmitButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }

  &:hover {
    background: var(--secondary-color);
  }
`

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("6cecTVum8F_pO9Tl1") // Replace with your public key
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Preethesh Kumar', // Replace with your name
      }

      await emailjs.send(
        'service_e2jlnjh', // Replace with your service ID
        'template_o45tic4', // Replace with your template ID
        templateParams
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeader>
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </ContactHeader>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: 'green', marginTop: '1rem' }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: 'red', marginTop: '1rem' }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </ContactForm>
          </motion.div>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact 