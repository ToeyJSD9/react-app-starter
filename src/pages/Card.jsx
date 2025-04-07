import React from "react";
import { useState, useEffect } from "react";

import { API_URL } from "../data/constants";
const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div>
      <button className='bg-red-400 tex'>
      <h2 className="text-6xl"> test </h2>
      {posts.map((post) => (
        <p key={posts.id}>{posts.title}</p>
        
      ))}
      </button>
    </div>
  );
};

export default Card;
