'use client';

import PostCard from '@/components/posts/PostCard';
import usePosts from '@/api/usePosts';
import { useParams } from 'next/navigation';
import React from 'react';

const PostsListMemoized = React.memo(PostCard);

export default function PostDetail() {
  const { id } = useParams();
  const { posts, isLoading, isError } = usePosts();
  const post = posts?.find((p: any) => p.id == id);

  return (
    <>
      {isLoading ? (
        <h2>Loading post...</h2>
      ) : posts?.length && post ? (
        <div>
          <h1>Post Detail Page with id: {`${id}`}</h1>
          <PostsListMemoized title={post.title} />
        </div>
      ) : (
        <h3>Not found post with id: {id}</h3>
      )}
    </>
  );
}
