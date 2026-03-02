import { Link, useNavigate } from "react-router-dom";
import { getAuth, clearAuth } from "../utils/auth";

const Header = () => {
  const user = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <header className="p-3" style={{ background: "#1877f2" }}>
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
            <h4 className="mb-0">📱 Social Media</h4>
          </Link>
          
          {user && (
            <div className="d-flex align-items-center gap-3">
              {user.avatar && (
                <img src={user.avatar} alt={user.name} className="rounded-circle" width="40" height="40" />
              )}
              <span className="text-white fw-semibold">{user.name}</span>
              <button className="btn btn-light btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;