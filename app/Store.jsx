import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/PostsSlice";
import usersReducer from "../features/users/UsersSlice";
export const Store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});
