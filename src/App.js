import './App.css';
import Router from './routes/Router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReceiptVerification from './components/Verification/ReceiptVerification';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/dashboard/Layout';
import Setup from './pages/dashboard/Setup';
import Settings from './pages/dashboard/Settings';
import Register from './pages/auth/Register';


function App() {
  return (
    <>
      <div className='appContainer'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/verification" element={<ReceiptVerification />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
