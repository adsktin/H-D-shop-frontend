import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const initialUsers = [
    { id: 1, name: 'Nguyen Van A', email: 'nguyenvana@example.com', phone: '0123456789', role: 'Admin', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Tran Thi B', email: 'tranthib@example.com', phone: '0987654321', role: 'Nhân viên', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Le Van C', email: 'levanc@example.com', phone: '0912345678', role: 'Khách hàng', image: 'path/to/image3.jpg' },
];
const AdminAccount = () => {
    const [accounts, setAccounts] = useState(initialUsers);
    const [editId, setEditId] = useState(null);
    const [editRole, setEditRole] = useState('');

    const handleEdit = (id, role) => {
        if (role !== 'Admin') {
          setEditId(id);
          setEditRole(role);
        }
      };
    
      const handleSave = (id) => {
        setAccounts(accounts.map(account =>
          account.id === id ? { ...account, role: editRole } : account
        ));
        setEditId(null);
      };
    
      const handleDelete = (id) => {
        const account = accounts.find(acc => acc.id === id);
        if (account.role !== 'Admin') {
          setAccounts(accounts.filter(account => account.id !== id));
        }
      };

    return (
        <div className='mx-auto container my-4'>
            <div>
                <h1 className="text-2xl font-semibold mb-6">Tài khoản</h1>
                <div className="flex bg-sec-100 py-2 px-5 rounded-md bg-white w-96 ml-auto">
                    <input className="bg-inherit outline-none w-96 ml-2 " placeholder='Search'></input>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>

                {/* Orders Table */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Danh sách tài khoản</h2>
                    {/* DS Tài khoản */}
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border-0">
                                <thead>
                                    <tr className="bg-gray-200">
                                        {/* <th className="border border-gray-300 px-4 py-2">ID</th> */}
                                        {/* <th className="py-2"></th> */}
                                        <th className="py-2">Họ và tên</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Số điện thoại</th>
                                        <th className="px-4 py-2">Vai trò</th>
                                        <th className="px-4 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts.map(account => (
                                        <tr key={account.id} className="text-center">
                                            {/* <img src={account.image} alt={account.name} className="w-24 h-24 object-cover rounded-full mx-auto" /> */}
                                            {/* <td className="border border-gray-300 px-4 py-2">1</td> */}
                                            <td className="px-4 py-2">{account.name}</td>
                                            <td className="px-4 py-2">{account.email}</td>
                                            <td className="px-4 py-2">{account.phone}</td>
                                            <td className="px-4 py-2">
                                                {editId === account.id ? (
                                                    <select
                                                        value={editRole}
                                                        onChange={(e) => setEditRole(e.target.value)}
                                                        className="border border-gray-300 rounded px-0 py-2"
                                                    >
                                                        {/* <option value="Admin">Admin</option> */}
                                                        <option value="Nhân viên">Nhân viên</option>
                                                        <option value="Khách hàng">Khách hàng</option>
                                                    </select>
                                                ) : (
                                                    account.role
                                                )}
                                            </td>
                                            <td className="py-2 px-4 ">
                                                {editId === account.id ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleSave(account.id)}
                                                            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2  rounded"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                                            </svg>

                                                        </button>
                                                        <button
                                                            onClick={() => setEditId(null)}
                                                            className="bg-black text-white px-4 py-2 ml-2 rounded"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>

                                                        </button>
                                                    </>
                                                ) : (
                                                    <>

                                                        <button
                                                            onClick={() => handleEdit(account.id, account.role)}
                                                            disabled={account.role === 'Admin'}
                                                            className={`px-4 py-2 rounded ${account.role === 'Admin' ? 'bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md'}`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                            </svg>
                                                        </button>

                                                        <button
                                                            onClick={() => handleDelete(account.id)}
                                                            disabled={account.role === 'Admin'}
                                                            className={`px-4 py-2 rounded ${account.role === 'Admin' ? 'bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md ml-2 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md ml-2'}`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminAccount;