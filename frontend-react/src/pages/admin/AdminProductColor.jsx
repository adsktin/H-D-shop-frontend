import React, { useState, useEffect } from 'react';
import AdminAddProductColor from './AdminAddProductColor';
import AdminProductColorList from './AdminProductColorList';

const AdminProductColor = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  // Chức năng xử lý việc lưu hoặc cập nhật màu
  const handleSaveColor = (color) => {
    if (color.id) {
      // Cập nhật màu hiện có
      setColors(colors.map((c) => (c.id === color.id ? color : c)));
    } else {
      // Thêm màu mới
      color.id = new Date().getTime(); // Tạo ID duy nhất
      setColors([...colors, color]);
    }
    setSelectedColor(null); // Xóa màu đã chọn sau khi lưu
  };

  // Chức năng xử lý chỉnh sửa màu
  const handleEditColor = (color) => {
    setSelectedColor(color); // Chọn màu đã chọn để chỉnh sửa
  };

  // Chức năng xử lý việc xóa một màu
  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id)); // Lọc màu với ID đã cho
    setSelectedColor(null); // Xóa màu đã chọn sau khi xóa 
  };

return (
  <div className="bg-white mx-auto mt-8">
    <h1 className=" p-6 text-2xl font-bold mb-4">Quản lý màu</h1>
    <AdminAddProductColor onSave={handleSaveColor} selectedColor={selectedColor} onCancel={() => setSelectedColor(null)} />
    <AdminProductColorList colors={colors} onEdit={handleEditColor} onDelete={handleDeleteColor} />
  </div>
);
}

export default AdminProductColor;