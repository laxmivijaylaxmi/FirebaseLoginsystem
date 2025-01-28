// import React, { useState } from "react";
// import SignUp from "./component/SignUp/SignUp";
// import Login from "./component/Login/Login";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./component/theme/Theme";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Sidebar from "./component/Sidebar/Sidebar";
// import AdminDashBoard from "./Pages/AdminDashBoard";
// import Student from "./component/AddStudent/Student";
// import StudentList from "./component/AddStudent/StudentList";
// import Payment from "./Pages/Payment";
// import Courses from "./Pages/Courses";
// import Attendance from "./Pages/Attendance";
// import EditStudent from "./component/AddStudent/EditStudent";

// const App = () => {
//   const [theme, colorMode] = useMode();
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Router>
//           <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
//           <Routes>
//             <Route path="/" element={<Navigate to="/login" />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/admin-dashboard" element={<AdminDashBoard />} />
//             <Route path="/students-page" element={<Student/>}/>
//             <Route path="/student-list" element={<StudentList/>}/>
//             <Route path="/edit-student/:id" element={<EditStudent/>}/>
//            <Route path="/courses" element={<Courses/>}/>
//            <Route path="/attendance" element={<Attendance/>}/>
//            <Route path="/payments" element={<Payment/>}/>
//           </Routes>
//         </Router>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import SignUp from "./component/SignUp/SignUp";
import Login from "./component/Login/Login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./component/theme/Theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";
import AdminDashBoard from "./Pages/AdminDashBoard";
import Student from "./component/AddStudent/Student";
import StudentList from "./component/AddStudent/StudentList";
import Payment from "./Pages/Payment";
import Courses from "./Pages/Courses";
import Attendance from "./Pages/Attendance";
import EditStudent from "./component/AddStudent/EditStudent";
import { auth } from "./FireBase/FireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState(null);

  // Check for user authentication state on load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user if authenticated
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Protected Route for Admin Dashboard
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />; // Redirect to login if no user is authenticated
    }
    return children;
  };

  // Layout for Admin Pages (with Sidebar)
  const AdminLayout = () => (
    <div >
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route
  path="/admin-dashboard"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<AdminDashBoard />} />
  <Route path="students-page" element={<Student />} />
  <Route path="student-list" element={<StudentList />} />
  <Route path="edit-student/:id" element={<EditStudent />} />
  <Route path="courses" element={<Courses />} />
  <Route path="attendance" element={<Attendance />} />
  <Route path="payments" element={<Payment />} />
</Route>

          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

