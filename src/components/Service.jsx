import React from 'react';
import { FaChalkboardTeacher, FaBook, FaBus, FaLaptop } from 'react-icons/fa';

function Service() {
  const services = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />,
      title: 'Experienced Faculty',
      description: 'Highly qualified teachers dedicated to providing the best education.',
    },
    {
      icon: <FaBook className="text-4xl text-green-500 mb-4" />,
      title: 'Comprehensive Curriculum',
      description: 'A well-rounded curriculum designed to develop students in all areas.',
    },
    {
      icon: <FaBus className="text-4xl text-yellow-500 mb-4" />,
      title: 'Safe Transportation',
      description: 'Safe and reliable school bus service for students.',
    },
    {
      icon: <FaLaptop className="text-4xl text-red-500 mb-4" />,
      title: 'Modern Facilities',
      description: 'State-of-the-art facilities with the latest technology and resources.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
