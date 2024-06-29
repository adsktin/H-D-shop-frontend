import React, { useState } from 'react';

const initialOrders = [
  {
    id: 1,
    customerName: 'Nguyễn Văn A',
    address: '123 Đường ABC, Quận 1, TP. HCM',
    paymentMethod: 'COD',
    totalAmount: '500,000đ',
    orderDate: '2024-06-25',
    status: 'Thành công',
  },
  {
    id: 2,
    customerName: 'Trần Thị B',
    address: '456 Đường DEF, Quận 2, TP. HCM',
    paymentMethod: 'Momo',
    totalAmount: '1,200,000đ',
    orderDate: '2024-06-26',
    status: 'Chờ xác nhận',
  },
];

const AdminOrder = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleApproveOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: 'Thành công' } : order
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý đơn đặt hàng</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2  border-b">Tên khách hàng</th>
              <th className="py-2 px-4 border-b">Địa chỉ giao hàng</th>
              <th className="py-2 px-4 border-b">Phương thức thanh toán</th>
              <th className="py-2 px-4 border-b">Tổng tiền</th>
              <th className="py-2 px-4 border-b">Ngày đặt hàng</th>
              <th className="py-2 px-4 border-b">Trạng thái</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2  border-b ">{order.customerName}</td>
                <td className="py-2  border-b ">{order.address}</td>
                <td className="py-2 border-b text-center">{order.paymentMethod}</td>
                <td className="py-2  border-b text-center">{order.totalAmount}</td>
                <td className="py-2  border-b text-center">{order.orderDate}</td>
                <td className="py-2 border-b text-center">{order.status}</td>
                <td className="py-2 px-4 border-b text-center">
                  {order.status === 'Chờ xác nhận' && (
                    <button
                      onClick={() => handleApproveOrder(order.id)}
                      className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                      Duyệt
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
