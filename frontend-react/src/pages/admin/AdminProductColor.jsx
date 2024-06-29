import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const AdminProductColor = () => {
  const [color, setColor] = useState('#ffffff');
  const [colorName, setColorName] = useState('');
  const [colorList, setColorList] = useState([]);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleAddColor = () => {
    if (colorName.trim() !== '' && color.trim() !== '') {
      setColorList([...colorList, { name: colorName, hex: color }]);
      setColorName('');
      setColor('#ffffff');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý mã màu sản phẩm</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tên màu
          </label>
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Chọn màu
          </label>
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Màu đã chọn
          </label>
          <div
            className="w-full h-16 rounded"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <button
          onClick={handleAddColor}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Lưu màu
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Danh sách màu</h2>
        {colorList.length > 0 ? (
          <ul>
            {colorList.map((colorItem, index) => (
              <li key={index} className="flex items-center mb-2">
                <div
                  className="w-8 h-8 rounded mr-4"
                  style={{ backgroundColor: colorItem.hex }}
                ></div>
                <span>{colorItem.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Chưa có màu nào được lưu.</p>
        )}
      </div>
    </div>
  );
};

export default AdminProductColor;
