import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  STUDENT_NOTES,
  STUDENT_ASSIGNMENTS,
  STUDENT_QUIZZES,
  STUDENT_PROFILE,
} from "../../constants/appConstants";
import { getUserById } from "../../services/userServices";
// import axios from "axios";

const StudentDashboard = () => {
  const { userId, token } = useSelector((state) => state.auth);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserById(userId, token);
        
        // const response = await axios.get(`http://localhost:5183/api/User/${userId}`,{
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   }})

          setUser(response.data); 

      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    if (userId) {
      fetchUserInfo();
    }
  }, [userId, token]);

  // if (!user) {
  //   return <div  className="min-h-screen text-center"><h1 className="text-xl font-semibold my-48">Loading...</h1></div>;
  // }

  return (<div className="p-6 min-h-screen">
    <div className="mb-16 text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Welcome, {user.firstName}!
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8">
        Explore your resources and manage your assignments, quizzes, and profile.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Notes Card */}
      <Link
        to={STUDENT_NOTES}
        className="block p-6 bg-[#28425A] text-white rounded-lg hover:bg-[#9CBAC0] transition duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Notes</h2>
        <p className="text-sm sm:text-base">
          View notes uploaded by your teachers.
        </p>
      </Link>

      {/* Assignments Card */}
      <Link
        to={STUDENT_ASSIGNMENTS}
        className="block p-6 bg-[#28425A] text-white rounded-lg hover:bg-[#9CBAC0] transition duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Assignments</h2>
        <p className="text-sm sm:text-base">
          Submit your assignments and check deadlines.
        </p>
      </Link>

      {/* Quizzes Card */}
      <Link
        to={STUDENT_QUIZZES}
        className="block p-6 bg-[#28425A] text-white rounded-lg hover:bg-[#9CBAC0] transition duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Quizzes</h2>
        <p className="text-sm sm:text-base">
          Attempt quizzes and track your performance.
        </p>
      </Link>

      {/* Profile Card */}
      <Link
        to={STUDENT_PROFILE}
        className="block p-6 bg-[#28425A] text-white rounded-lg hover:bg-[#9CBAC0] transition duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Profile</h2>
        <p className="text-sm sm:text-base">
          Manage your profile and update your information.
        </p>
      </Link>
    </div>
  </div>
  );
};

export default StudentDashboard;
