import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { collection, getDocs ,deleteDoc,doc } from "firebase/firestore";
import { db } from "../../FireBase/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentList);
        console.log("Fetched Students:", studentList);
      } catch (error) {
        console.log("Error Fecthing Students:", error);
      }
    };
    fetchStudents();
  }, []);
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        const studentDocRef = doc(db, "students", id); // Ensure `doc` is imported
        await deleteDoc(studentDocRef);
        toast.success("Deleted Successfully");
        setStudents(students.filter((student) => student.id !== id));
        alert("Student deleted successfully!");
      } catch (error) {
        console.error("Error deleting student:", error.message, error.code);
        alert("Failed to delete the student. Please try again.");
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1
        style={{ fontFamily: "Pacifico, cursive" }}
        className="text-center mt-4 text-xl sm:text-2xl md:text-3xl font-semibold"
      >
        Student List
      </h1>

      <div className="overflow-x-auto mt-8 ">
        <table className="min-w-3xl border-collapse border border-gray-300 shadow-md text-black rounded-lg w-full">
          <thead>
            <tr className="bg-gray-600 text-white text-sm md:text-base font-bold text-center">
              <th className="py-2 px-3 border-r border-gray-200">Student ID</th>
              <th className="py-2 px-3 border-r border-gray-200">Name</th>
              <th className="py-2 px-3 border-r border-gray-200">Class</th>
              <th className="py-2 px-3 border-r border-gray-200">Roll No</th>
              <th className="py-2 px-3 border-r border-gray-200">Section</th>
                <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            {students.map((student) => (
              <tr
                key={student.id}
                className="bg-white text-center text-sm border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-2 px-3 border-r border-gray-200">
                  {student.studentId}
                </td>
                <td className="py-2 px-3 border-r border-gray-200">
                  {student.name}
                </td>
                <td className="py-2 px-3 border-r border-gray-200">
                  {student.className}
                </td>
                <td className="py-2 px-3 border-r border-gray-200">
                  {student.rollNumber}
                </td>
                <td className="py-2 px-3 border-r border-gray-200">
                  {student.section}
                </td>

              
                <td className="py-2 px-3 flex justify-center gap-2">
                  <button
                    onClick={() => navigate(`/admin-dashboard/edit-student/${student.id}`)}
                    className="bg-blue-500 text-white p-1 md:p-2 rounded-md hover:bg-blue-600"
                  >
                    <FiEdit className="text-sm md:text-lg" />
                  </button>

                  <button   onClick={() => handleDelete(student.id)} className="bg-red-500 text-white p-1 md:p-2 rounded-md hover:bg-red-600">
                    <FiTrash2 className="text-sm md:text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
