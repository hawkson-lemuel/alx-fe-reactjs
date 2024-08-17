function Services() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#f7f7f7',
      color: '#444',
      textAlign: 'center',
      width: '100vw',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Services</h1>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        fontSize: '1.2rem',
      }}>
        <li style={{ marginBottom: '10px' }}>💻 Technology Consulting</li>
        <li style={{ marginBottom: '10px' }}>📈 Market Analysis</li>
        <li style={{ marginBottom: '10px' }}>🚀 Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
