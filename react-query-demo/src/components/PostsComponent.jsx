import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
    console.log('fetching Posts');
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
    const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
  
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={() => {console.log('refetching posts'); refetch()}}>Refetch Posts</button>
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default PostsComponent;
