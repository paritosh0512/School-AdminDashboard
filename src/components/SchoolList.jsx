import React from 'react';

function SchoolList() {
  // Sample data for the table
  const schoolList = [
    {
      id: 1,
      profile: 'path/to/profile1.jpg',
      distributor: 'Distributor A',
      schoolName: 'School A',
      schoolEmail: 'schoolA@example.com',
      schoolMobileNo: '1234567890',
      schoolCode: 'S001',
      allowedFields: 'Field1, Field2',
      status: 'Active',
    },
    {
      id: 2,
      profile: 'path/to/profile2.jpg',
      distributor: 'Distributor B',
      schoolName: 'School B',
      schoolEmail: 'schoolB@example.com',
      schoolMobileNo: '0987654321',
      schoolCode: 'S002',
      allowedFields: 'Field3, Field4',
      status: 'Inactive',
    },
    // Add more rows as needed
  ];

  return (
   <div>
    <h1 className='text-xl font-bold'>School List Detils</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, dignissimos.</p>
     <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Sr. No.</th>
              <th className="py-2 px-4 border-b">Profile</th>
              <th className="py-2 px-4 border-b">Distributor</th>
              <th className="py-2 px-4 border-b">School Name</th>
              <th className="py-2 px-4 border-b">School Email</th>
              <th className="py-2 px-4 border-b">School Mobile No.</th>
              <th className="py-2 px-4 border-b">School Code</th>
              <th className="py-2 px-4 border-b">Allowed Fields</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {schoolList.map((school, index) => (
              <tr key={school.id}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">
                  <img
                    src={school.profile}
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">{school.distributor}</td>
                <td className="py-2 px-4 border-b text-center">{school.schoolName}</td>
                <td className="py-2 px-4 border-b text-center">{school.schoolEmail}</td>
                <td className="py-2 px-4 border-b text-center">{school.schoolMobileNo}</td>
                <td className="py-2 px-4 border-b text-center">{school.schoolCode}</td>
                <td className="py-2 px-4 border-b text-center">{school.allowedFields}</td>
                <td className="py-2 px-4 border-b text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      school.status === 'Active'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {school.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
}

export default SchoolList;
