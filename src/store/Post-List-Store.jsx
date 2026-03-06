import { createContext, useReducer, useCallback } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  updatePost: () => {},
  deletePost: () => {},
  setPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload.posts;
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "UPDATE_POST":
      return currentPostList.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload.postId);
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const setPosts = useCallback((posts) => {
    dispatchPostList({ type: "SET_POSTS", payload: { posts } });
  }, []);

  const addPost = useCallback((post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  }, []);

  const updatePost = useCallback((post) => {
    dispatchPostList({ type: "UPDATE_POST", payload: post });
  }, []);

  const deletePost = useCallback((postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  }, []);

  return (
    <PostList.Provider value={{ postList, setPosts, addPost, updatePost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;