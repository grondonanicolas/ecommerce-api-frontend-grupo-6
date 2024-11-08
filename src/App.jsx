import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AuthContext from './context/AuthContext';
import HomePage from './pages/home/Home';
import LoginPage from './pages/auth/login/LoginPage';
import SignUpPage from './pages/auth/register/SignUpPage';

function App() {
  return (
    <Router>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />{' '}
          {/* Redirección a home */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </AuthContext>
    </Router>
  );
}

export default App;
