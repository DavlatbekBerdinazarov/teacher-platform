import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SingleCoursePage from "./pages/SingleCoursePage";
import ContactPage from "./pages/ContactPage";
import EnterCodePage from "./pages/EnterCodePage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// TEACEHR SECTION

function App() {
  useEffect ( () => {

    
    let token = window.localStorage.getItem("accessToken");
  

    let decoded = jwtDecode('Bearer ' + token);
    let currentUnixTime = Math.floor(Date.now() / 1000);

    let  timeDifference = decoded.exp - currentUnixTime;

    if (timeDifference > 0) {
      console.log('JWT hali amal qilishga ruhsat berilgan');
    } else {
      console.log('JWT muddati tugagan');
      localStorage.removeItem('accessToken');
    }
  } )
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/single/:id" element={<SingleCoursePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/verify-code" element={<EnterCodePage />} />
            <Route path="*" element={<NotFound to="/" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
