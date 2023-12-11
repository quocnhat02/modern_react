// 'use client';

import PostCard from '@/components/posts/PostCard';
import { API_POSTS } from '@/constants';
import { useParams } from 'next/navigation';
import React from 'react';

export const getPosts = async () => {
  const res = await fetch(API_POSTS, { cache: 'force-cache' });
  const data = await res.json();
  return data;
};

const PostsListMemoized = React.memo(PostCard);

export default function PostDetail({ id }: { id: number }) {
  // const { id } = useParams();
  // const post = posts?.find((p: any) => p.id == id);

  return (
    <>
      {/* {isLoading ? (
        <h2>Loading post...</h2>
      ) : posts?.length && post ? (
        <div>
          <h1>Post Detail Page with id: {`${id}`}</h1>
          <PostsListMemoized title={post.title} />
        </div>
      ) : (
        <h3>Not found post with id: {id}</h3>
      )} */}
    </>
  );
}
