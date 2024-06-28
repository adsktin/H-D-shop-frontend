import React, { useState } from 'react';

export default function AccountComment() {
  const [comments, setComments] = useState([
    {
      id: 1,
      userId: 'user123',
      productId: 'product456',
      content: 'Sản phẩm này rất tuyệt vời!',
      createdAt: '2024-06-27T10:00:00Z',
    },
    {
      id: 2,
      userId: 'user789',
      productId: 'product456',
      content: 'Tôi đã mua sản phẩm này và rất hài lòng.',
      createdAt: '2024-06-26T15:30:00Z',
    },
    // ... thêm các bình luận mẫu khác
  ]);

  const [searchDate, setSearchDate] = useState('');
  const [searchContent, setSearchContent] = useState('');

  const filteredComments = comments.filter(comment => {
    const dateMatch = !searchDate || comment.createdAt.startsWith(searchDate);
    const contentMatch = !searchContent || comment.content.toLowerCase().includes(searchContent.toLowerCase());
    return dateMatch && contentMatch;
  });
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  const handleCreateComment = () => {
    const newCommentObj = {
      id: comments.length + 1, // Tạo ID mới
      userId: 'user123', // Giả định ID người dùng
      productId: 'product456', // Giả định ID sản phẩm
      content: newComment,
      createdAt: new Date().toISOString(),
    };
    setComments([newCommentObj, ...comments]); // Thêm bình luận mới vào đầu danh sách
    setNewComment(''); // Xóa nội dung trong textarea
  };

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
    const commentToEdit = comments.find(comment => comment.id === commentId);
    setEditedComment(commentToEdit.content);
  };

  const handleSaveEdit = () => {
    setComments(comments.map(comment =>
      comment.id === editingCommentId ? { ...comment, content: editedComment } : comment
    ));
    setEditingCommentId(null);
    setEditedComment('');
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };
  // ... (Các hàm handleCreateComment, handleEditComment, handleDeleteComment giữ nguyên)

  return (
    <div className="mx-auto container my-4">
      <h2>Bình luận của tôi</h2>

      {/* Tìm kiếm theo ngày và nội dung */}
      <div className="flex gap-4 justify-end">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className='mb-4 border px-2'
          placeholder="Tìm theo ngày"
        />       
        <label htmlFor="search" className="flex mb-4 border px-2 rounded focus:outline focus:outline-blue-500">
        <div className="flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          className="rounded-sm px-3 py-2 focus:outline-none w-full"
          placeholder="Tìm theo nội dung"
        />
      </label>
      </div>

      {/* Bảng danh sách bình luận */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Ngày</th>
            <th className="border p-2">Nội dung</th>
            <th className="border p-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredComments.map(comment => (
            <tr key={comment.id}>
              <td className="border p-2 text-center">{comment.createdAt.slice(0, 10)}</td>
              {/* Hiển thị nội dung bình luận hoặc textarea chỉnh sửa */}
              <td className="border p-2">
                {editingCommentId === comment.id ? (
                  <textarea 
                    value={editedComment} 
                    onChange={(e) => setEditedComment(e.target.value)} 
                    className='w-full'
                  />
                ) : (
                  <p>{comment.content}</p>
                )}
              </td>
              <td className="border p-2 text-center">
                {editingCommentId === comment.id ? (
                  <button onClick={handleSaveEdit} className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white mr-2">Lưu</button>
                ) : (
                  <>
                    <button onClick={() => handleEditComment(comment.id)}
                         className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white mr-2">Chỉnh sửa</button>
                    <button onClick={() => handleDeleteComment(comment.id)}
                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white mr-2">Xóa</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
