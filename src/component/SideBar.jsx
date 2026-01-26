const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item">
          {" "}
          <a
            href="#"
            onClick={() => setSelectedTab("Home")}
            className={`nav-link text-white ${selectedTab === "Home" ? "active" : ""}`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            href="#"
            onClick={() => setSelectedTab("Create")}
            className={`nav-link text-white ${selectedTab === "Create" ? "active" : ""}`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default SideBar;
