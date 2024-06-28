import React, { useState } from 'react';
import OrderDetailsPage from './OrderDetail';

export default function AccountOrder() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: 'ip001',
      orderDate: '2024-06-25',
      status: 'Đang xử lý',
      total: 15000000,
      paymentMethod: "COD",
      items: [
        { productId: 'SP001', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP002', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP003', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP004', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
      ],
    },
    {
      id: 2,
      orderId: 'ss002',
      orderDate: '2024-06-20',
      status: 'Đã giao hàng',
      total: 12800000,
      paymentMethod: "ZaloPay",
      items: [
        { productId: 'SP002', name: 'Samsung Galaxy S23 Ultra', variant: '512GB/12GB', color: 'Green', quantity: 1, price: 12800000 },
      ],
    },
    {
      id: 3,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 4,
      orderId: 'ip001',
      orderDate: '2024-06-25',
      status: 'Đang xử lý',
      total: 15000000,
      paymentMethod: "COD",
      items: [
        { productId: 'SP001', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP002', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP003', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP004', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
      ],
    },
    {
      id: 5,
      orderId: 'ss002',
      orderDate: '2024-06-20',
      status: 'Đã giao hàng',
      total: 12800000,
      paymentMethod: "ZaloPay",
      items: [
        { productId: 'SP002', name: 'Samsung Galaxy S23 Ultra', variant: '512GB/12GB', color: 'Green', quantity: 1, price: 12800000 },
      ],
    },
    {
      id: 6,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 7,
      orderId: 'ip001',
      orderDate: '2024-06-25',
      status: 'Đang xử lý',
      total: 15000000,
      paymentMethod: "COD",
      items: [
        { productId: 'SP001', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP002', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP003', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP004', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
      ],
    },
    {
      id: 8,
      orderId: 'ss002',
      orderDate: '2024-06-20',
      status: 'Đã giao hàng',
      total: 12800000,
      paymentMethod: "ZaloPay",
      items: [
        { productId: 'SP002', name: 'Samsung Galaxy S23 Ultra', variant: '512GB/12GB', color: 'Green', quantity: 1, price: 12800000 },
      ],
    },
    {
      id: 9,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 10,
      orderId: 'ip001',
      orderDate: '2024-06-25',
      status: 'Đang xử lý',
      total: 15000000,
      paymentMethod: "COD",
      items: [
        { productId: 'SP001', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP002', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP003', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
        { productId: 'SP004', name: 'iPhone 15 Pro Max', variant: '256GB', color: 'Silver', quantity: 1, price: 15000000 },
      ],
    },
    {
      id: 11,
      orderId: 'ss002',
      orderDate: '2024-06-20',
      status: 'Đã giao hàng',
      total: 12800000,
      paymentMethod: "ZaloPay",
      items: [
        { productId: 'SP002', name: 'Samsung Galaxy S23 Ultra', variant: '512GB/12GB', color: 'Green', quantity: 1, price: 12800000 },
      ],
    },
    {
      id: 12,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 13,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 14,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 15,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 16,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 17,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 18,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 19,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 20,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 21,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 22,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 23,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 24,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 25,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 26,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 27,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 28,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 29,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 30,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    {
      id: 31,
      orderId: 'xi003',
      orderDate: '2024-06-18',
      status: 'Đã hủy',
      total: 10500000,
      paymentMethod: "Momo",
      items: [
        { productId: 'SP003', name: 'Xiaomi 13 Pro', variant: '256GB/8GB', color: 'Black', quantity: 1, price: 10500000 },
      ],
    },
    // ...other orders...
  ]);

  const [showDetailsForOrder, setShowDetailsForOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  const filteredOrders = orders.filter(order =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const totalOrders = filteredOrders.length;
  const totalAmount = filteredOrders.reduce((sum, order) => sum + order.total, 0);

  const handleViewDetails = (orderId) => {
    setShowDetailsForOrder(orderId);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
      if (currentPage <= 3) {
        endPage = maxPagesToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="mx-auto container my-4 h-full">
      <h1 className="font-semibold text-3xl leading-7 text-gray-900">Lịch sử mua hàng</h1>
      {/* <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-purple-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Tổng số đơn hàng</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Tổng số tiền</h2>
          <p className="text-2xl font-bold">
            {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </p>
        </div>
      </div> */}

      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Danh sách đơn hàng</h2>
          <label htmlFor="search" className="flex my-4 border-2 border-black px-2 rounded focus:outline focus:outline-blue-500">
            <div className="flex items-center pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm theo mã..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-sm px-3 py-2 focus:outline-none w-full"
            />
          </label>
        </div>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th className="border p-2">STT</th>
              <th className="border p-2">Mã đơn hàng</th>
              <th className="border p-2">Ngày đặt hàng</th>
              <th className="border p-2">Trạng thái</th>
              <th className="border p-2">Tổng tiền</th>
              <th className="border p-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order.id}>
                <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="border p-2">{order.orderId}</td>
                <td className="border p-2">{order.orderDate}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">{order.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(order.orderId)}
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="mx-2">
              Trang {currentPage} - Tổng trang {totalPages}
            </span>
            Đi tới trang
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              className="w-14 text-center border border-black rounded-md ml-2"
              min={1}
              max={totalPages}
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md bg-gray-200"
            >
              Trước
            </button>
            <div className="space-x-2">
              {renderPageNumbers()}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md bg-gray-200"
            >
              Sau
            </button>
          </div>
        </div>
      </div>

      {showDetailsForOrder && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative w-2/3">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowDetailsForOrder(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <OrderDetailsPage
              order={orders.find(order => order.orderId === showDetailsForOrder)}
              onClose={() => setShowDetailsForOrder(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
