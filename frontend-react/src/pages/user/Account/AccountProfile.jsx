import React, { useState } from 'react';

export default function AccountProfile() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoError, setPhotoError] = useState(''); 

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

      if (allowedTypes.includes(file.type)) {
        setPhotoError(''); // Clear error if valid type

        const reader = new FileReader();
        reader.onloadend = () => setProfilePhoto(reader.result);
        reader.readAsDataURL(file);
      } else {
        setProfilePhoto(null); 
        setPhotoError('File không hợp lệ. Vui lòng chọn file hình ảnh.');
      }
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic Form Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.streetAddress) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Client-Side Phone Number Validation (Example)
    const phoneRegex = /^\+84\d{9,10}$/; 
    if (!phoneRegex.test(formData.phone)) {
      alert('Số điện thoại không hợp lệ.');
      return;
    }

    // Handle Form Submission (e.g., send to API)
    try {
      // Replace with your actual API submission logic
      const response = await fetch('/api/updateProfile', {
        method: 'POST',
        body: JSON.stringify({ ...formData, profilePhoto }),
      });

      if (response.ok) {
        // Success handling
        console.log('Profile updated successfully');
      } else {
        // Error handling
        console.error('Error updating profile:', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };
    return (
      <div className="mx-auto container my-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="font-semibold text-3xl leading-7 text-gray-900">Thông tin cá nhân</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
          Ảnh đại diện
          </label>
          <div className="mt-2 flex items-center gap-x-3">
          {profilePhoto ? (
          <img
            src={profilePhoto}
            alt="Profile"
            className="h-40 w-40 rounded-sm object-cover"
          />
          ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          )}

          <button
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => document.getElementById('photo').click()} // Trigger file input
          >
          Thay đổi
          </button>

          <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden" // Hide the default input
          />
          </div>
          </div>
          </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                Họ và tên
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="bg-gray-200 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="bg-gray-200 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>  
            <div className="col-span-full">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Số điện thoại
                </label>
                <div className="mt-2">
                  <input
                    type="tel" // Use "tel" for phone input
                    name="phone"
                    id="phone"
                    autoComplete="tel" // Use "tel" for autoComplete
                    placeholder="+84"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-200 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Địa chỉ
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  placeholder='vd: 123 đường lê đực thọ, phường 6, quận gò vấp, thành phố hồ chí minh'
                  className="bg-gray-200 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          </div>
        </div>

        {photoError && <p className="text-red-500 mt-2">{photoError}</p>} 

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
    )
  }
  