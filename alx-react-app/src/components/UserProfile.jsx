import React from 'react';

const UserProfile = (props) => {
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
    },
    age: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '8px',
    },
    bio: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.age}>Age: {props.age}</p>
      <p style={styles.bio}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
