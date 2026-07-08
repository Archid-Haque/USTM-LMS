import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Course from './pages/course/course';
import Courses from './pages/course/Courses';
import Profile from './pages/profile/profile';
import Learnings from './pages/learning/learnings';
import Home from './pages/landing/Home';
import DUsers from './pages/dashBoard/DUsers';
import DCourses from './pages/dashBoard/DCourses';
import Assessment from './pages/assessment/Assessment';
import ErrorPage from './pages/error/ErrorPage';
import AddQuestions from './pages/dashBoard/AddQuestions';
import Performance from './pages/profile/Performance';
import certificate from './pages/assessment/certificate';
import Forum from './pages/course/forum';

// =======================
// Admin Pages
// =======================
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentsPage from './pages/admin/StudentsPage';
import TeachersPage from './pages/admin/TeachersPage';
import CoursesPage from './pages/admin/CoursesPage';
import AssignmentsPage from './pages/admin/AssignmentsPage';
import ReportsPage from './pages/admin/ReportsPage';
import SettingsPage from './pages/admin/SettingsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Dashboard */}
          <Route path="/addquestions/:id" element={<AddQuestions />} />

          {/* =======================
              ADMIN ROUTES
          ======================== */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<StudentsPage />} />
          <Route path="/admin/teachers" element={<TeachersPage />} />
          <Route path="/admin/courses" element={<CoursesPage />} />
          <Route path="/admin/assignments" element={<AssignmentsPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />

          {/* =======================
              AUTHENTICATION
          ======================== */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />

          {/* =======================
              USER ROUTES
          ======================== */}
          <Route path="/" Component={Home} />
          <Route path="/courses" Component={Courses} />
          <Route path="/course/:id" Component={Course} />
          <Route path="/discussion/:id" Component={Forum} />
          <Route path="/certificate/:courseId" Component={certificate} />
          <Route path="/assessment/:id" Component={Assessment} />
          <Route path="/profile" Component={Profile} />
          <Route path="/Learnings" Component={Learnings} />
          <Route path="/Dcourses" Component={DCourses} />
          <Route path="/Dusers" Component={DUsers} />
          <Route path="/Performance" Component={Performance} />

          {/* =======================
              ERROR PAGE
          ======================== */}
          <Route path="*" Component={ErrorPage} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;