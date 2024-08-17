import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
    }}>
      <Link to="/" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.2rem',
      }}>Home</Link>
      <Link to="/about" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.2rem',
      }}>About</Link>
      <Link to="/services" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.2rem',
      }}>Services</Link>
      <Link to="/contact" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.2rem',
      }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
