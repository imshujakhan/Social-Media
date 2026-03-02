import "./App.css";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import Footer from "../component/Footer";
import PostListProvider from "../store/Post-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="content">
        <SideBar />
        <div className="main-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
