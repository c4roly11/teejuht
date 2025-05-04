import React, { createContext, useState } from "react";
import MainPage from "./components/MainPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister.jsx";
import Post from "./components/Post.jsx";
import MyAccount from "./components/MyAccount.jsx";
import NewPost from "./components/NewPost.jsx";
import Navbar from "./components/Navbar.jsx";
import BottomToolbar from "./components/BottomToolbar.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import StyleGuide from "./components/style_guide.jsx";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="app-container">
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

            <Route
              path="/category/:categoryName"
              element={
                <WithNavbar>
                  <CategoryPage />
                </WithNavbar>
              }
            />

            <Route
              path="/style-guide.html"
              element={
                <WithNavbar>
                  <StyleGuide />
                </WithNavbar>
              }
            />
          </Routes>
          <BottomToolbar />
        </div>
      </Router>
    </AuthContext.Provider>
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
