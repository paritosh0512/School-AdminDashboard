import React from 'react';
import { useForm } from 'react-hook-form';

function AddSchool() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission
  };

  const handleReset = () => {
    reset();
  };

  const handleCancel = () => {
    // handle form cancel action (e.g., redirect or clear fields)
    console.log('Form cancelled');
  };

  return (
   <div>
    <h1 className='text-xl font-bold'>Add School Details</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis voluptate fugit ea alias ipsum asperiores blanditiis incidunt labore eos perferendis dolorum, totam dolore facere sequi itaque quos distinctio nisi.</h1>
     <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">Profile</label>
            <input
              type="text"
              {...register('profile', { required: 'Profile is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.profile ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.profile && (
              <p className="text-red-500 text-sm mt-1">{errors.profile.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Distributor</label>
            <input
              type="text"
              {...register('distributor', { required: 'Distributor is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.distributor ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.distributor && (
              <p className="text-red-500 text-sm mt-1">{errors.distributor.message}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">School Name</label>
            <input
              type="text"
              {...register('schoolName', { required: 'School Name is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.schoolName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.schoolName && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">School Email</label>
            <input
              type="email"
              {...register('schoolEmail', {
                required: 'School Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.schoolEmail ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.schoolEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolEmail.message}</p>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">School Mobile No.</label>
            <input
              type="tel"
              {...register('schoolMobileNo', {
                required: 'School Mobile No. is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid phone number',
                },
              })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.schoolMobileNo ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.schoolMobileNo && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolMobileNo.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">School Code</label>
            <input
              type="text"
              {...register('schoolCode', { required: 'School Code is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.schoolCode ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.schoolCode && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolCode.message}</p>
            )}
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">Allowed Fields</label>
            <input
              type="text"
              {...register('allowedFields', { required: 'Allowed Fields is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.allowedFields ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.allowedFields && (
              <p className="text-red-500 text-sm mt-1">{errors.allowedFields.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              {...register('status', { required: 'Status is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.status ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
            )}
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">Action</label>
            <input
              type="text"
              {...register('action', { required: 'Action is required' })}
              className={`w-full px-3 py-2 border rounded-lg ${
                errors.action ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.action && (
              <p className="text-red-500 text-sm mt-1">{errors.action.message}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleCancel}
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

export default AddSchool;
