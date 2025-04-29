import MainPage from "./components/MainPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister.jsx";
import Post from "./components/Post.jsx";
import MyAccount from "./components/MyAccount.jsx";
import NewPost from "./components/NewPost.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WithNavbar>
              <MainPage />
            </WithNavbar>
          }
        />
        <Route
          path="/post/:id"
          element={
            <WithNavbar>
              <Post />
            </WithNavbar>
          }
        />
        <Route path="/login" element={<LoginRegister />} />
        <Route
          path="/account"
          element={
            <WithNavbar>
              <MyAccount />
            </WithNavbar>
          }
        />
        <Route
          path="/new-post"
          element={
            <WithNavbar>
              <NewPost />
            </WithNavbar>
          }
        />
      </Routes>
    </Router>
  );

  function WithNavbar({ children }) {
    return (
      <>
        <Navbar />
        <div className="pt-3">{children}</div>
      </>
    );
  }
}

export default App;
