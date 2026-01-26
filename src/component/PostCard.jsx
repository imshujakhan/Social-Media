import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Post-List-Store";
const PostCard = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags?.map((tag) => (
          <span key={tag} className="badge hashtag text-bg-primary ">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reactions.likes} people.
        </div>
      </div>
    </div>
  );
};

export default PostCard;
