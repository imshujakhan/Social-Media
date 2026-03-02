import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from "../store/Post-List-Store";
import { getAuth } from "../utils/auth";
import { API_BASE_URL, ENDPOINTS } from "../config/api";

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: "", content: "", tags: "" });
  const [loading, setLoading] = useState(false);
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const user = getAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newPost = {
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar || "",
        title: formData.title,
        content: formData.content,
        tags: formData.tags.split(" ").filter((tag) => tag.trim()),
        likes: [],
      };

      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const createdPost = await response.json();
      addPost(createdPost);
      navigate("/");
    } catch (err) {
      alert("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="posts-container">
      <form onSubmit={handleSubmit} className="create-post">
        <h2 className="mb-4">Create New Post</h2>

        <div className="mb-3">
          <label className="form-label">Post Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="What's on your mind?"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Post Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="4"
            value={formData.content}
            onChange={handleChange}
            placeholder="Share your thoughts..."
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags (space-separated)</label>
          <input
            type="text"
            className="form-control"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., react javascript webdev"
          />
          <small className="text-muted">Separate tags with spaces</small>
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
          {loading ? "Publishing..." : "📤 Publish Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;