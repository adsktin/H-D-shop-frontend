import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (newPassword !== confirmNewPassword) {
      setError("New passwords don't match");
      return;
    }

    // Add more validation as needed (e.g., password strength)

    // Process the password change (e.g., make an API call)
    // ...

    // Clear the form and error state
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setError('');
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="current-password" className=''>Mật khẩu cũ:</label>
          {/* <input
            type="password"
            id="current-password"
            value={currentPassword}
            className='focus:border-oulined-none'
            onChange={(e) => setCurrentPassword(e.target.value)}
          /> */}
          <input       
          name="password" 
          type="password"
          id="current-password"
          placeholder='Nhập mật khẩu cũ' 
          required
          autoFocus                 
          class="block w-full bg-gray-200 px-2 border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                     
          
        </div>
               
        <div>
          <label htmlFor="new-password">Mật khẩu mới:</label>
          {/* <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          /> */}
          <input       
          name="new-password" 
          type="password"
          id="new-password"
          placeholder='Nhập mật khẩu mới' 
          required
          autoFocus                 
          class="block w-full bg-gray-200 px-2 border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                     
          
        </div>
        <div>
          <label htmlFor="confirm-new-password">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirm-new-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
           <input       
          name="confirm-new-password" 
          type="password"
          id="confirm-new-password"
          placeholder='Xác nhận mật khẩu mới' 
          required
          autoFocus                 
          class="block w-full bg-gray-200 px-2 border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                     
          
        </div>
        {error && <p className="error">{error}</p>}
        <div className='flex space-x-4 justify-end my-4'>
          <Button variant='outlined' type="reset">Hủy</Button>
          <Button variant='gradient' type="submit">Lưu Thay đổi</Button>
        </div>
      </form>
    </div>
  );
}
