import { useState, useContext } from "react";
import { AiFillDelete, AiFillEdit, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PostList } from "../store/Post-List-Store";
import { getAuth } from "../utils/auth";
import { API_BASE_URL, ENDPOINTS } from "../config/api";

const PostCard = ({ post }) => {
  const { deletePost, updatePost } = useContext(PostList);
  const user = getAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: post.title, content: post.content });
  const [isLiked, setIsLiked] = useState(post.likes?.includes(user?.id));
  const [likesCount, setLikesCount] = useState(post.likes?.length || 0);

  const isOwner = user?.id === post.userId;

  const handleDelete = async () => {
    if (window.confirm("Delete this post?")) {
      try {
        await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}/${post.id}`, {
          method: "DELETE",
        });
        deletePost(post.id);
      } catch (err) {
        alert("Failed to delete post");
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedPost = {
        ...post,
        title: editData.title,
        content: editData.content,
        updatedAt: new Date().toISOString(),
      };

      await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      updatePost(updatedPost);
      setIsEditing(false);
    } catch (err) {
      alert("Failed to update post");
    }
  };

  const handleLike = async () => {
    try {
      const newLikes = isLiked
        ? post.likes.filter((id) => id !== user.id)
        : [...(post.likes || []), user.id];

      const updatedPost = { ...post, likes: newLikes };

      await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      updatePost(updatedPost);
      setIsLiked(!isLiked);
      setLikesCount(newLikes.length);
    } catch (err) {
      alert("Failed to like post");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          {post.userAvatar && (
            <img src={post.userAvatar} alt={post.userName} className="rounded-circle me-2" width="40" height="40" />
          )}
          <div>
            <h6 className="mb-0">{post.userName}</h6>
            <small className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small>
          </div>
        </div>

        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            />
            <textarea
              className="form-control mb-2"
              rows="3"
              value={editData.content}
              onChange={(e) => setEditData({ ...editData, content: e.target.value })}
            />
            <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <div className="mb-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="badge bg-primary hashtag">
                  #{tag}
                </span>
              ))}
            </div>
          </>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-outline-danger btn-sm" onClick={handleLike}>
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />} {likesCount}
          </button>
          
          {isOwner && !isEditing && (
            <div>
              <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setIsEditing(true)}>
                <AiFillEdit /> Edit
              </button>
              <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                <AiFillDelete /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;