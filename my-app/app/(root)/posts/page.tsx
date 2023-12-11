import React from 'react';
import PostsList from '../../../components/posts/PostsList';

const PostsListMemoized = React.memo(PostsList);

import { FC } from 'react';
import { API_POSTS } from '@/constants';

interface PostProps {
  searchParams: {
    id: string;
  };
}

export const getPosts = async () => {
  const res = await fetch(API_POSTS, { cache: 'force-cache' });
  const data = await res.json();
  return data;
};

const Posts: FC<PostProps> = async ({ searchParams }) => {
  const posts = await getPosts();

  if (searchParams?.id) {
    return (
      <div>
        <h2>Post</h2>
        <p>{searchParams.id}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Posts Page</h1>
        <PostsListMemoized posts={posts} />
      </div>
    );
  }
};

export default Posts;
