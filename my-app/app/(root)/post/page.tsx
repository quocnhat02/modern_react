import { FC } from 'react';

interface PostProps {
  searchParams: {
    id: string;
  };
}

const Post: FC<PostProps> = ({ searchParams }) => {
  return (
    <div>
      <h2>Post</h2>
      <p>{searchParams.id}</p>
    </div>
  );
};

export default Post;
