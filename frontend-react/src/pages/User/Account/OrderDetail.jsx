import React from 'react';

export default function OrderDetailsPage({ order }) {

  return (
    <div className="mx-auto container my-4">
      <h1 className="text-2xl font-semibold mb-4">Chi tiết đơn hàng</h1>

      <div className="bg-white p-6 rounded shadow overflow-hidden">
        {/* Order Summary */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <p>
            <strong>Mã đơn hàng:</strong> {order.orderId}
          </p>
          <p>
            <strong>Ngày lập:</strong> {order.orderDate}
          </p>
          <p>
            <strong>Trạng thái:</strong> {order.status}
          </p>
          <p>
            <strong>Phương thức thanh toán:</strong> {order.paymentMethod || 'Chưa xác định'}
          </p>
        </div>

        {/* Product Details Table */}
        <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-center text-sm"> 
          <thead>
            <tr>
              <th className="border p-2">STT</th>
              <th className="border p-2">Mã sản phẩm</th>
              <th className="border p-2">Tên sản phẩm</th>
              <th className="border p-2">Phiên bản</th>
              <th className="border p-2">Màu sắc</th>
              <th className="border p-2">Số lượng</th>
              <th className="border p-2">Đơn giá</th>
              <th className="border p-2">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.productId}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.variant}</td>
                <td className="border p-2">{item.color}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">
                  {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
                <td className="border p-2">
                  {(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {/* Discount and Total */}
        <div className="mt-4 flex justify-end">
          <div className="text-right">
            <p>
              <strong>Giảm giá:</strong> {(order.discount || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
            <p className="text-lg font-semibold">
              <strong>Tổng cộng:</strong> {order.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
