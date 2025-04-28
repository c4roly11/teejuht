import MainPage from "./components/MainPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;