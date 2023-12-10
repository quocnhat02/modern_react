import React from 'react';
import PostsList from '../../../components/posts/PostsList';

const PostsListMemoized = React.memo(PostsList);

export default function Posts() {
  return (
    <div>
      <h1>Posts Page</h1>
      <PostsListMemoized />
    </div>
  );
}
