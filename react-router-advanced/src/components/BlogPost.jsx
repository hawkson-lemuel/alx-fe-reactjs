import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

function BlogPost() {
  const { postId } = useParams();
  return <div className="container">Blog Post ID: {postId}</div>;
}

export default BlogPost;
