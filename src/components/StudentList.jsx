import React from 'react';

const students = [
  {
    id: 1,
    studentName: 'John Doe',
    fatherName: 'Richard Doe',
    motherName: 'Emily Doe',
    class: '10th Grade',
    dob: '2005-04-12',
    mobileNo: '1234567890',
    address: '123 Main St, Anytown',
    admissionDate: '2023-08-01',
    busNo: 'B-12',
    blank1: '',
    uploadFile: 'document.pdf',
  },
  // Add more student data as needed
];

function StudentList() {
  return (
   <div className='table-auto w-full'>
    <h1 className='text-2xl font-bold'>Students List Panel</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quod quos dolor, assumenda necessitatibus maiores!</p>
     <div className="max-w-5xl table-auto mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center ">Student List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Student Name</th>
            <th className="px-4 py-2 text-left">Father's Name</th>
            <th className="px-4 py-2 text-left">Mother's Name</th>
            <th className="px-4 py-2 text-left">Class</th>
            <th className="px-4 py-2 text-left">Date of Birth</th>
            <th className="px-4 py-2 text-left">Mobile No.</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">Admission Date</th>
            <th className="px-4 py-2 text-left">Bus No.</th>
            <th className="px-4 py-2 text-left">Blank1</th>
            <th className="px-4 py-2 text-left">Upload File</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{student.studentName}</td>
              <td className="px-4 py-2">{student.fatherName}</td>
              <td className="px-4 py-2">{student.motherName}</td>
              <td className="px-4 py-2">{student.class}</td>
              <td className="px-4 py-2">{student.dob}</td>
              <td className="px-4 py-2">{student.mobileNo}</td>
              <td className="px-4 py-2">{student.address}</td>
              <td className="px-4 py-2">{student.admissionDate}</td>
              <td className="px-4 py-2">{student.busNo}</td>
              <td className="px-4 py-2">{student.blank1}</td>
              <td className="px-4 py-2">
                <a href={`/${student.uploadFile}`} className="text-blue-600 hover:underline">
                  {student.uploadFile}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
}

export default StudentList;
