import React, { useState } from 'react';

const initialPaymentMethods = [
    { id: 1, name: 'COD', description: 'Thanh toán khi nhận hàng' },
    { id: 2, name: 'Momo', description: 'Thanh toán qua ví điện tử Momo' },
];

export default function AdminpPaymentMethods() {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
    const [isAdding, setIsAdding] = useState(false);
    const [editMethod, setEditMethod] = useState(null);
    const [newMethod, setNewMethod] = useState({ name: '', description: '' });

    const handleAddMethod = () => {
        setPaymentMethods([...paymentMethods, { ...newMethod, id: Date.now() }]);
        setNewMethod({ name: '', description: '' });
        setIsAdding(false);
    };

    const handleEditMethod = () => {
        setPaymentMethods(paymentMethods.map(method =>
            method.id === editMethod.id ? editMethod : method
        ));
        setEditMethod(null);
    };

    const handleDeleteMethod = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    return (
        <div className="mx-auto p-4 ">
            <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-2 py-4 ml-2">Quản lý phương thức thanh toán</h2>
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded"
                    onClick={() => setIsAdding(true)}
                >
                    Thêm phương thức
                </button>
            </div>

            {/* Danh sách phương thức thanh toán */}
            <div className="bg-white p-4 rounded shadow-md">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Tên phương thức</th>
                            <th className="py-2 px-4 border-b">Mô tả</th>
                            <th className="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentMethods.map(method => (
                            <tr key={method.id}>
                                <td className="py-2 px-4 text-center border-b">{method.name}</td>
                                <td className="py-2 px-4 text-center border-b">{method.description}</td>
                                <td className="py-2 px-4 text-center border-b flex space-x-2">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2  "
                                        onClick={() => setEditMethod(method)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleDeleteMethod(method.id)}
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
            </div>

            {/* Add Payment Method */}
            {isAdding && (
                <div className="mt-6 p-4 border rounded border-gray-300 bg-white">
                    <h2 className="text-xl font-semibold mb-4">Thêm phương thức thanh toán</h2>
                    <input
                        type="text"
                        placeholder="Tên phương thức"
                        value={newMethod.name}
                        onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Mô tả"
                        value={newMethod.description}
                        onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <button
                        onClick={handleAddMethod}
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

            {/* Edit Payment Method */}
            {editMethod && (
                <div className="mt-6 p-4 border rounded border-gray-300 bg-white">
                    <h2 className="text-xl font-semibold mb-4">Cập nhật phương thức thanh toán</h2>
                    <input
                        type="text"
                        placeholder="Tên phương thức"
                        value={editMethod.name}
                        onChange={(e) => setEditMethod({ ...editMethod, name: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Mô tả"
                        value={editMethod.description}
                        onChange={(e) => setEditMethod({ ...editMethod, description: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <button
                        onClick={handleEditMethod}
                        className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2  rounded"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setEditMethod(null)}
                        className="bg-black text-white px-4 py-2 ml-2 rounded"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
