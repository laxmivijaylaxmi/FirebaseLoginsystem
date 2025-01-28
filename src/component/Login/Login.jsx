// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import { db, auth } from "../../FireBase/FireBaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // Removed setDoc because we are not storing passwords in Firestore

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     try {
//       // Attempt to sign in the user with email and password
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Store user data in Firestore if necessary (without password)
//       await setDoc(doc(db, "users", user.uid), {
//         email: email,
//       });

//       toast.success("Login successful!");

    
//       navigate("/admin-dashboard");

//     } catch (err) {
//       toast.error("Failed to login: " + err.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-5 h-screen justify-center space-y-6">
//       <div className="border shadow-lg p-8 w-80 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg">
//         <form onSubmit={handleSubmit} className="space-y-6 text-black">
//           <h2 className="text-3xl font-bold text-center text-white">
//           Login
//           </h2>

//           <div>
//             <label htmlFor="email" className="block text-gray-300 text-sm font-semibold">
//               Email
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
//               <AiOutlineMail className="text-gray-400 text-xl mr-2" />
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 id="email"
//                 className="w-full bg-transparent focus:outline-none"
//                 placeholder="Enter Your Email"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block text-gray-300 text-sm font-semibold">
//               Password
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
//               <AiOutlineLock className="text-gray-400 text-xl mr-2" />
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 id="password"
//                 className="w-full bg-transparent focus:outline-none"
//                 placeholder="Enter Your Password"
//               />
//               <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//                 {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-teal-800 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       <div className="text-sm text-gray-600">
//         Don't have an account?{" "}
//         <Link to="/signup" className="text-teal-400 hover:underline">
//           Create one
//         </Link>
//         .
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../../FireBase/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Import setDoc and doc from Firestore

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Attempt to sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore (without storing the password)
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        uid: user.uid, // Add any additional details if required
      });

      toast.success("Login successful!");

      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Login error:", err.message); // Log the error for debugging
      toast.error("Failed to login: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 h-screen justify-center space-y-6">
      <div className="border shadow-lg p-8 w-80 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <h2 className="text-3xl font-bold text-center text-white">Login</h2>

          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineMail className="text-gray-400 text-xl mr-2" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                id="email"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-semibold">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineLock className="text-gray-400 text-xl mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                id="password"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter Your Password"
              />
              <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-800 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
      <div className="text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-teal-400 hover:underline">
          Create one
        </Link>
        .
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

