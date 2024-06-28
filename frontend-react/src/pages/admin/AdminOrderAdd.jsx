import React, { useState } from 'react';
import OrderList from './AdminOrdeList';

const OrderAdd = () => {
  const [orders, setOrders] = useState([
    // Sample orders data
    { id: 1, customerName: 'John Doe', total: 100, status: 'Chờ xác nhận' },
    { id: 2, customerName: 'Jane Smith', total: 150, status: 'Chờ xác nhận' },
  ]);

  const handleApproveOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: 'Chấp nhận' } : order
    );
    setOrders(updatedOrders);
  };

  const handleRejectOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: 'Từ chối' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-white mx-auto mt-8">
        {/* <OrderList/> */}
      <h1 className=" p-6 text-2xl font-bold mb-4">Đơn hàng</h1>
      <OrderList orders={orders} onApprove={handleApproveOrder} onReject={handleRejectOrder} />
    </div>
  );
};

export default OrderAdd;