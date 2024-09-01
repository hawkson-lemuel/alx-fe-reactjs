import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

function BlogPost() {
  const { id } = useParams();
  return <div className="container">Blog Post ID: {id}</div>;
}

export default BlogPost;
