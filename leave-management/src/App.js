import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import DashBoard from './pages/dashboard';
import Profile from './pages/profile';
import MyLeaveRequest from './pages/myLeaveRequest';
import LeaveCoveringRequest from './pages/leaveCoveringRequest';
import './assest/FA 6.4.0 Pro/css/all.min.css';
import AdminDashboard from './pages/adminDashboard';
import LeaveRequestView from './pages/leaveRequest';
import AddEmployee from './pages/addEmployee';
import LeaveRequestHistory from './pages/leaveRequestHistory';
import { SnackbarProvider } from 'notistack'; 
import Sheduel from './pages/shedule';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Profile/view" element={<Profile />} />
            <Route path="/LeaveCoveringRequest" element={<LeaveCoveringRequest />} />
            <Route path='/Profile/MyLeaveRequest' element={<MyLeaveRequest />} />
            <Route path='/AdminDashboard' element={<AdminDashboard />} />
            <Route path='/LeaveRequests' element={<LeaveRequestView />} />
            <Route path='/AddEmployees' element={<AddEmployee />} />
            <Route path='/Profile/leaveRequestHistory' element={<LeaveRequestHistory/>}/>
            <Route path='/Sheduel' element={<Sheduel/>}/>
          </Routes>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

