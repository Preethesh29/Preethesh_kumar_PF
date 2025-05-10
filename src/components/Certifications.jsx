const CertificationsSection = styled.section`
  background: var(--section-bg);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`

const CertificationsContainer = styled.div`
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

const CertificationsHeader = styled.div`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const CertificateCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`

const CertificateImage = styled.div`
  width: 100%;
  height: 200px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CertificateContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    color: var(--light-text);
    margin-bottom: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`

const CertificateLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    text-decoration: underline;
  }
` 