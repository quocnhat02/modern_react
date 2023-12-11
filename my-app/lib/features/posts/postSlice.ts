import { API_POSTS } from '@/constants';
import { RootState } from '@/lib/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  loading: boolean;
  posts: Array<Post>;
  error: string | undefined;
}

const initialState: PostState = {
  loading: false,
  posts: [],
  error: undefined,
};

export const getPosts = async () => {
  const res = await axios.get(API_POSTS);

  return res.data;
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await getPosts();
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Array<Post>>) => {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Array<Post>>) => {
        state.loading = false;
        state.posts = action.payload;
      }
    );
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
