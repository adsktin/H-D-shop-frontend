import React, { useState } from 'react';

// Dummy data for purchase orders
const initialOrders = [
  { id: 1, supplierId: 'SUP001', totalQuantity: 100, status: 'Thành công' },
  { id: 2, supplierId: 'SUP002', totalQuantity: 150, status: 'Chờ xác nhận' },
  { id: 3, supplierId: 'SUP003', totalQuantity: 200, status: 'Đang giao hàng' },
  { id: 4, supplierId: 'SUP004', totalQuantity: 250, status: 'Thành công' },
  { id: 5, supplierId: 'SUP005', totalQuantity: 300, status: 'Chờ xác nhận' },
  // Add more data as needed
];

// Dummy data for order details
const orderDetails = {
  1: [
    { receiptId: 'REC001', price: '100,000 VND', quantity: 50, product: 'Product A', color: 'Red', capacity: '64GB' },
    { receiptId: 'REC002', price: '200,000 VND', quantity: 50, product: 'Product B', color: 'Blue', capacity: '128GB' }
  ],
  2: [
    { receiptId: 'REC003', price: '300,000 VND', quantity: 75, product: 'Product C', color: 'Green', capacity: '256GB' },
    { receiptId: 'REC004', price: '400,000 VND', quantity: 75, product: 'Product D', color: 'Yellow', capacity: '512GB' }
  ],
  3: [
    { receiptId: 'REC005', price: '500,000 VND', quantity: 100, product: 'Product E', color: 'Black', capacity: '1TB' },
    { receiptId: 'REC006', price: '600,000 VND', quantity: 100, product: 'Product F', color: 'White', capacity: '2TB' }
  ]
};

export default function ImportBill() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  const handleViewDetails = (orderId) => {
    setSelectedOrder(orderId);
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const displayedOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hóa đơn nhập hàng</h1>
      
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Id nhà cung cấp</th>
              <th className="py-2 px-4">Tổng số lượng</th>
              <th className="py-2 px-4">Trạng thái</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4 text-center">{order.supplierId}</td>
                <td className="py-2 px-4 text-center">{order.totalQuantity}</td>
                <td className="py-2 px-4 text-center">{order.status}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleViewDetails(order.id)}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mt-4 mr-auto">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-gray-200"
          >
            Trước
          </button>
          <div className="space-x-2 px-2">Trang {currentPage} của  {totalPages}</div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-gray-200 "
          >
            Sau
          </button>
        </div>
      </div>

      {selectedOrder && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng cho ID đơn hàng: {selectedOrder}</h2>
          
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">ID biên lai</th>
                <th className="py-2 px-4 text-left">Giá</th>
                <th className="py-2 px-4 text-left">Số lượng</th>
                <th className="py-2 px-4 text-left">Sản phẩm</th>
                <th className="py-2 px-4 text-left">Màu</th>
                <th className="py-2 px-4 text-left">Dung lượng</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails[selectedOrder] ? (
                orderDetails[selectedOrder].map((detail, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{detail.receiptId}</td>
                    <td className="py-2 px-4">{detail.price}</td>
                    <td className="py-2 px-4">{detail.quantity}</td>
                    <td className="py-2 px-4">{detail.product}</td>
                    <td className="py-2 px-4">{detail.color}</td>
                    <td className="py-2 px-4">{detail.capacity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 text-center">Không có chi tiết có sẵn cho đơn đặt hàng này.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
