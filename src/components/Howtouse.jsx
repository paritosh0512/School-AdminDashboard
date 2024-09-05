import React from 'react';
import { FaStepForward } from 'react-icons/fa';

function Howtouse() {
  const steps = [
    {
      step: 1,
      title: 'Login to Admin Panel',
      description: 'Enter your credentials to access the admin panel.',
    },
    {
      step: 2,
      title: 'Navigate to Dashboard',
      description: 'The dashboard provides an overview of the key metrics and options.',
    },
    {
      step: 3,
      title: 'Manage Users',
      description: 'Add, edit, or remove users from the “Manage Users” section.',
    },
    {
      step: 4,
      title: 'Update Content',
      description: 'Navigate to the content section to update or add new content.',
    },
    {
      step: 5,
      title: 'View Reports',
      description: 'Access detailed reports on user activity and system performance.',
    },
    {
      step: 6,
      title: 'Logout',
      description: 'Once your tasks are complete, securely log out of the admin panel.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Use Admin Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <FaStepForward className="text-2xl text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">Step {step.step}</h3>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Howtouse;
