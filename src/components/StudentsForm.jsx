import React from 'react';
import { useForm } from 'react-hook-form';

function StudentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
   <div>
    <h1 className='text-xl font-bold'>Add School Details</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis voluptate fugit ea alias ipsum asperiores blanditiis incidunt labore eos perferendis dolorum, totam dolore facere sequi itaque quos distinctio nisi.</h1>
     <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Student Details Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Row: Student Name & Father's Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700">Student Name</label>
            <input
              type="text"
              {...register('studentName', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.studentName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm mt-1">Student Name is required</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Father's Name</label>
            <input
              type="text"
              {...register('fatherName', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.fatherName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.fatherName && (
              <p className="text-red-500 text-sm mt-1">Father's Name is required</p>
            )}
          </div>
        </div>

        {/* Second Row: Mother's Name & Class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700">Mother's Name</label>
            <input
              type="text"
              {...register('motherName', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.motherName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.motherName && (
              <p className="text-red-500 text-sm mt-1">Mother's Name is required</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Class</label>
            <input
              type="text"
              {...register('class', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.class ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.class && (
              <p className="text-red-500 text-sm mt-1">Class is required</p>
            )}
          </div>
        </div>

        {/* Third Row: DOB & Mobile No */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register('dob', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.dob ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">Date of Birth is required</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Mobile No</label>
            <input
              type="tel"
              {...register('mobileNo', {
                required: 'Mobile No is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid mobile number',
                },
              })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.mobileNo ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.mobileNo && (
              <p className="text-red-500 text-sm mt-1">{errors.mobileNo.message}</p>
            )}
          </div>
        </div>

        {/* Fourth Row: Address & Admission Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              {...register('address', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">Address is required</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Admission Date</label>
            <input
              type="date"
              {...register('admissionDate', { required: true })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.admissionDate ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.admissionDate && (
              <p className="text-red-500 text-sm mt-1">
                Admission Date is required
              </p>
            )}
          </div>
        </div>

        {/* Fifth Row: Bus No & Blank1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700">Bus No</label>
            <input
              type="text"
              {...register('busNo')}
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Blank1</label>
            <input
              type="text"
              {...register('blank1')}
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Sixth Row: Upload File */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload File</label>
          <input
            type="file"
            {...register('fileUpload')}
            className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Buttons: Save, Reset, Cancel */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default StudentForm;
