import PostCard from './PostCard';
import { Post } from '@/lib/features/posts/postSlice';

const PostsList = ({ posts }: { posts: Array<Post> }) => {
  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export default PostsList;
