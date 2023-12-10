import useSWR from 'swr';

export default function usePosts() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    (...args) => fetch(...args).then((res) => res.json())
  );

  return {
    posts: data,
    isLoading,
    isError: error,
  };
}
