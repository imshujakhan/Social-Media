import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white sidebar" style={{ width: "200px", borderRight: "1px solid #e4e6eb" }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 text-decoration-none" style={{ color: "#1877f2" }}>
        <span className="fs-5 fw-bold">Menu</span>
      </Link>
      <hr style={{ borderColor: "#e4e6eb" }} />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            style={{
              color: location.pathname === '/' ? '#1877f2' : '#050505',
              background: location.pathname === '/' ? '#e7f3ff' : 'transparent',
              fontWeight: 500
            }}
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link 
            to="/create-post" 
            className={`nav-link ${location.pathname === '/create-post' ? 'active' : ''}`}
            style={{
              color: location.pathname === '/create-post' ? '#1877f2' : '#050505',
              background: location.pathname === '/create-post' ? '#e7f3ff' : 'transparent',
              fontWeight: 500
            }}
          >
            ✏️ Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;