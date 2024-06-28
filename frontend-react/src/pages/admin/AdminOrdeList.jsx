import React from 'react';
import PropTypes from 'prop-types';

const OrderList = ({ orders, onApprove, onReject }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Tên khách hàng</th>
            <th className="border border-gray-300 px-4 py-2">Tổng giá</th>
            <th className="border border-gray-300 px-4 py-2">Trạng thái</th>
            <th className="border border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">{order.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{order.customerName}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">${order.total}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{order.status}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => onApprove(order.id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Chấp nhận
                      </button>
                      <button
                        onClick={() => onReject(order.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
                      >
                        Từ chối
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">
               Không có hóa đơn
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default OrderList;