import PostCard from "./PostCard";
import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching &&
        postList.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
