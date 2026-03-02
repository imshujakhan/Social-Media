import PostCard from "./PostCard";
import Welcome from "./Welcome";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListContext } from "../store/Post-List-Store";
import { API_BASE_URL, ENDPOINTS } from "../config/api";
import Loading from "./Loading";

const PostList = () => {
  const { postList, setPosts } = useContext(PostListContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}`);
        const data = await response.json();
        setPosts(data.reverse());
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts]);

  if (loading) return <Loading />;

  return (
    <div className="posts-container">
      {postList.length === 0 ? (
        <Welcome />
      ) : (
        postList.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;