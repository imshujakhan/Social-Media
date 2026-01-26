import "./App.css";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import CreatePost from "./component/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/Post-List-Store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  console.log("Component Rendered");

  return (
    <PostListProvider>
      <div className="content">
        {" "}
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div>
          {" "}
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
