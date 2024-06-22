import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        // ... (các trường khác)
      });
      const [errors, setErrors] = useState({}); // Lưu thông tin lỗi

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate dữ liệu
    // ...

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Đăng ký thành công
      } else {
        // Xử lý lỗi từ server
      }
    } catch (error) {
      // Xử lý lỗi mạng
    }
  };
  return (
    <div className=''>
        <div className="m-0 grid place-items-center px-4 py-8">
            <Card color="white" className='px-12 py-12 shadow-2xl lg:w-1/3'>
                <Typography variant="h2" color="blue" className='text-center'>
                ĐĂNG NHẬP
                </Typography>
                <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full">
                    <div className="mb-1 flex flex-col gap-2">
                        <Typography variant="h6" color="black" className="">
                        Email
                        </Typography>                       
                          <input 
                          id="email" 
                          name="email" 
                          type="email" 
                          autocomplete="email" 
                          placeholder='name@gmail.com' 
                          required
                          autoFocus                 
                          class="block w-full bg-gray-200 px-2 border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                     
                        <Typography variant="h6" color="black" className="">
                        Mật khẩu
                        </Typography>
                        <div className="relative"> {/* Đặt input và icon vào một div relative */}
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"} 
                            autocomplete="current-password"
                            placeholder="********"
                            required
                            className="block w-full bg-gray-200 px-2 border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <div 
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)} // Xử lý sự kiện click
                          >
                            {showPassword ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-5 w-5 text-black">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>                  
                            ) : (                            
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-5 w-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                            )}
                          </div>
                        </div>
                    </div>
                    <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-between"
                    >
                      <Checkbox
                        label={
                          <Typography color="blue-gray" className="flex font-medium">
                            Ghi nhớ
                          </Typography>
                        }
                      />                                
                    <a href="/forgot-password" className="font-medium text-blue-500">
                      Quên mật khẩu?
                    </a>
                    </Typography>

                    <Button className="my-4 py-4" size="lg" fullWidth>
                        ĐĂNG NHẬP
                    </Button>
                    <Typography color="gray" className="my-4 text-center font-normal">
                        Bạn chưa có tài khoản?{" "}
                        <Link to="/signup" className="font-medium text-blue-500">Đăng Ký</Link>
                        {/* <a href="/login" className="font-medium text-blue-500">
                        Đăng Ký
                        </a>                     */}
                    </Typography>
                    <div className="flex items-center">
                        <hr className="w-full border-t border-gray-500" />
                        <span className="px-4">OR</span>
                        <hr className="w-full border-t border-gray-500" />
                    </div>
                    <div className='mt-4'>
                        <Button variant='outlined' className=' mx-auto flex rounded-full items-center gap-2 justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            ĐĂNG NHẬP BẰNG GOOGLE
                        </Button>
                    </div>
                </form>
            </Card>
            
        </div> 
    </div>
  );
}

export default Login;
