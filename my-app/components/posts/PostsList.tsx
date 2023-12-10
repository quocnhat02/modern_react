'use client';

import usePosts from '@/hooks/usePosts';
import React from 'react';

const PostsList = () => {
  const { posts } = usePosts();

  console.log('list');

  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post) => <li key={post.id}>{post.title}</li>)}
    </>
  );
};

export default PostsList;
