import React from 'react';

const invoices = [
  {
    id: 1,
    customerName: 'Nguyễn Văn A',
    address: '123 Đường ABC, Quận 1, TP. HCM',
    paymentMethod: 'COD',
    totalAmount: '500,000đ',
    orderDate: '2024-06-25',
    status: 'Đặt hàng thành công',
  },
  {
    id: 2,
    customerName: 'Trần Thị B',
    address: '456 Đường DEF, Quận 2, TP. HCM',
    paymentMethod: 'Momo',
    totalAmount: '1,200,000đ',
    orderDate: '2024-06-26',
    status: 'Không thành công',
  },
];

const Invoice = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hóa đơn xuất hàng</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tên khách hàng</th>
              <th className="py-2 px-4 border-b">Địa chỉ giao hàng</th>
              <th className="py-2 px-4 border-b">Phương thức thanh toán</th>
              <th className="py-2 px-4 border-b">Tổng tiền</th>
              <th className="py-2 px-4 border-b">Ngày đặt hàng</th>
              <th className="py-2 px-4 border-b">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="py-2 px-4 border-b">{invoice.customerName}</td>
                <td className="py-2 px-4 border-b">{invoice.address}</td>
                <td className="py-2 px-4 border-b">{invoice.paymentMethod}</td>
                <td className="py-2 px-4 border-b">{invoice.totalAmount}</td>
                <td className="py-2 px-4 border-b">{invoice.orderDate}</td>
                <td className="py-2 px-4 border-b">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
