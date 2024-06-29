import React, { useState } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

// Dummy data for reviews
const initialReviews = [
  { id: 1, email: 'user1@example.com', comment: 'Sản phẩm tuyệt', date: '2024-06-01', rating: 4.5 },
  { id: 2, email: 'user2@example.com', comment: 'Không tệ.', date: '2024-06-02', rating: 3 },
  { id: 3, email: 'user3@example.com', comment: 'Sản phẩm tuyệt vời và giao hàng nhanh.', date: '2024-06-03', rating: 5 }
];

export default function EvaluateComment() {
  const [reviews /*,setReviews*/] = useState(initialReviews);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Đánh giá bình luận</h1>

      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 ">Email</th>
              <th className="py-2 px-4 ">Bình luận</th>
              <th className="py-2 px-4 ">Ngày bình luận</th>
              <th className="py-2 px-4 ">Đánh giá</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-b">
                <td className="py-2 px-4 text-center">{review.email}</td>
                <td className="py-2 px-4 text-center">{review.comment}</td>
                <td className="py-2 px-4 text-center">{review.date}</td>
                <td className="py-2 px-4 text-center">
                  <div className="flex items-center ml-16">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        {index + 0.5 < review.rating ? (
                          <FaStar className="text-yellow-500" />
                        ) : index < review.rating ? (
                          <FaStarHalf className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-yellow-500" />
                        )}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
