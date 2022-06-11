import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './StyledGlobal.css';
import LoginApp from './pages/login';
import { Sidebar } from './components/sidebar/sidebar';
import UseUser from './hooks/useUser';
import { NotFound } from './pages/not-found';
function App() {
  const { isLogged } = UseUser();

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLogged ? <Navigate to="dashboard" replace /> : <LoginApp />
            }
          />
          <Route
            exact
            path="dashboard/*"
            element={isLogged ? <Sidebar /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
