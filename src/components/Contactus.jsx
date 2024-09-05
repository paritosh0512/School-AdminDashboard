import React, { useState } from 'react';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      valid = false;
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      valid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form data after submission
      setErrors({}); // Clear errors
    }
  };

  return (
   <div>
    <h1 className='text-3xl font-bold'>Contact Us</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere esse nobis ex vel laborum nisi earum ipsum praesentium molestias enim!</p>
     <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.subject ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            required
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            rows="5"
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
          <button
            type="reset"
            onClick={() => {
              setFormData({ name: '', email: '', subject: '', message: '' });
              setErrors({});
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default Contactus;
