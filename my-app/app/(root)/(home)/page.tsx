import React from 'react';
import PostsList from '../../../components/posts/PostsList';

const PostsListMemoized = React.memo(PostsList);

export default function Home() {
  return (
    <div>
      <h1 className='text-red-600'>Home Page</h1>
      <PostsListMemoized />
    </div>
  );
}
