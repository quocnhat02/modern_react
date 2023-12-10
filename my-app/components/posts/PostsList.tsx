'use client';

import usePosts from '@/api/usePosts';
import React from 'react';

const PostsList = () => {
  const { posts, isLoading, isError } = usePosts();

  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post: any) => <li key={post.id}>{post.title}</li>)}
    </>
  );
};

export default PostsList;
