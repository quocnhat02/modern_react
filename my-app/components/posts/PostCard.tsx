import { Post } from '@/lib/features/posts/postSlice';
import Link from 'next/link';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <h3>
      <Link
        href={{
          pathname: '/posts',
          query: { id: post.id },
        }}
        className='text-purple-500'
      >
        {post.id}
      </Link>
    </h3>
  );
};

export default PostCard;
