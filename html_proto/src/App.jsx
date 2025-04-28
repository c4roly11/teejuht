import MainPage from "./components/MainPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister.jsx';
import Post from './components/Post.jsx';
import MyAccount from './components/MyAccount.jsx';
import NewPost from './components/NewPost.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
