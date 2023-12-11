import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/lib/features/counter/counterSlice';
import postReducer from '@/lib/features/posts/postSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const storeRef = { current: store };

export default store;
