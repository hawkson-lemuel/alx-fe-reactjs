import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#eaf4fc',
      color: '#333',
      width: '100vw',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '500px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            height: '100px',
            boxSizing: 'border-box',
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
