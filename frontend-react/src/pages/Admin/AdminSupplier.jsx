import React, { useState } from 'react';

const initialSuppliers = [
    { id: 1, name: 'ABC Corp.', contactName: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'XYZ Ltd.', contactName: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', address: '456 Elm St' },
];

export default function AdminSupplier() {
    const [suppliers, setSuppliers] = useState(initialSuppliers);
    const [isAdding, setIsAdding] = useState(false);
    const [editSupplier, setEditSupplier] = useState(null);
    const [newSupplier, setNewSupplier] = useState({
        id: '',
        name: '',
        contactName: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleAddSupplier = () => {
        setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);
        setNewSupplier({ id: '', name: '', contactName: '', email: '', phone: '', address: '' });
        setIsAdding(false);
    };

    const handleEditSupplier = () => {
        setSuppliers(suppliers.map(supplier => supplier.id === editSupplier.id ? editSupplier : supplier));
        setEditSupplier(null);
    };

    const handleDeleteSupplier = (id) => {
        setSuppliers(suppliers.filter(supplier => supplier.id !== id));
    };

    return (
        <div className="mx-auto p-4 ">
            <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-2 py-4 ml-2">Quản lý nhà cung cấp</h2>

                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 my-2 rounded"
                >
                    Thêm Nhà Cung Cấp
                </button>

                {isAdding && (
                    <div className="mb-6 p-4 text-black border rounded border-gray-300">
                        <h2 className="text-xl font-semibold mb-4">Thêm Nhà Cung Cấp Mới</h2>
                        <input
                            type="text"
                            placeholder="Tên Nhà Cung Cấp"
                            value={newSupplier.name}
                            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Tên Liên Hệ"
                            value={newSupplier.contactName}
                            onChange={(e) => setNewSupplier({ ...newSupplier, contactName: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email Liên Hệ"
                            value={newSupplier.email}
                            onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="tel"
                            placeholder="Số Điện Thoại"
                            value={newSupplier.phone}
                            onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Địa Chỉ"
                            value={newSupplier.address}
                            onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <button
                            onClick={handleAddSupplier}
                            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                        >
                            Lưu
                        </button>
                        <button
                            onClick={() => setIsAdding(false)}
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Hủy
                        </button>
                    </div>
                )}

                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="w-full border-b">
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">Tên Nhà Cung Cấp</th>
                            <th className="py-2 px-4">Tên Liên Hệ</th>
                            <th className="py-2 px-4">Email Liên Hệ</th>
                            <th className="py-2 px-4">Số Điện Thoại</th>
                            <th className="py-2 px-4">Địa Chỉ</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map(supplier => (
                            <tr key={supplier.id} className="w-full border-b">
                                <td className="py-2 px-4 text-center">{supplier.id}</td>
                                <td className="py-2 px-4 text-center">{supplier.name}</td>
                                <td className="py-2 px-4 text-center">{supplier.contactName}</td>
                                <td className="py-2 px-4 text-center">{supplier.email}</td>
                                <td className="py-2 px-4 text-center">{supplier.phone}</td>
                                <td className="py-2 px-4 text-center">{supplier.address}</td>
                                <td className="py-2 px-4 flex space-x-2">
                                    <button
                                        onClick={() => setEditSupplier(supplier)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2  "
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleDeleteSupplier(supplier.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {editSupplier && (
                    <div className="mt-6 p-4 border rounded border-gray-300">
                        <h2 className="text-xl font-semibold mb-4">Cập Nhật Nhà Cung Cấp</h2>
                        <input
                            type="text"
                            placeholder="Tên Nhà Cung Cấp"
                            value={editSupplier.name}
                            onChange={(e) => setEditSupplier({ ...editSupplier, name: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Tên Liên Hệ"
                            value={editSupplier.contactName}
                            onChange={(e) => setEditSupplier({ ...editSupplier, contactName: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email Liên Hệ"
                            value={editSupplier.email}
                            onChange={(e) => setEditSupplier({ ...editSupplier, email: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="tel"
                            placeholder="Số Điện Thoại"
                            value={editSupplier.phone}
                            onChange={(e) => setEditSupplier({ ...editSupplier, phone: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Địa Chỉ"
                            value={editSupplier.address}
                            onChange={(e) => setEditSupplier({ ...editSupplier, address: e.target.value })}
                            className="border p-2 mb-2 w-full"
                        />
                        <button
                            onClick={handleEditSupplier}
                            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2  rounded"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setEditSupplier(null)}
                            className="bg-black text-white px-4 py-2 ml-2 rounded"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
