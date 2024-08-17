function About() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#f0f8ff',
        color: '#333',
        lineHeight: '1.6',
        width: '100vw',
        minHeight: '100vh',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Us</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', textAlign: 'center' }}>
          Our company has been providing top-notch services since 1990. We specialize in various fields including technology,
          marketing, and consultancy. We pride ourselves on our commitment to quality and customer satisfaction.
        </p>
      </div>
    );
  }
  
  export default About;
  