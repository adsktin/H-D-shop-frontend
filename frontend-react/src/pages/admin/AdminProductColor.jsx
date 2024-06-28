import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AdminProductColor = ({ onSave, selectedColor, onCancel }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');

  useEffect(() => {
    if (selectedColor) {
      setName(selectedColor.name);
      setCode(selectedColor.code);
      setHex(selectedColor.hex);
      setRgb(hexToRgb(selectedColor.hex));
    } else {
      setName('');
      setCode('');
      setHex('');
      setRgb('');
    }
  }, [selectedColor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || code.trim() === '' || hex.trim() === '') return;
    onSave({ id: selectedColor ? selectedColor.id : null, name, code, hex });
    setName('');
    setCode('');
    setHex('');
    setRgb('');
  };

 const handleHexChange = (e) => {
    const hexValue = e.target.value;
    setHex(hexValue.toUpperCase()); // Ensure hex value is in uppercase
    if (hexValue.length === 7 && hexValue[0] === '#') {
      const r = parseInt(hexValue.slice(1, 3), 16);
      const g = parseInt(hexValue.slice(3, 5), 16);
      const b = parseInt(hexValue.slice(5, 7), 16);
      setRgb(`rgb(${r}, ${g}, ${b})`);
    }
  };

  const hexToRgb = (hex) => {
    let color = hex.replace('#', '');
    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg font-bold mb-2" htmlFor="name">
          Tên màu
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-1/3 mx-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg font-bold mb-2" htmlFor="code">
          Mã màu
        </label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="shadow appearance-none border rounded w-1/3 mx-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg font-bold mb-2" htmlFor="hex">
          Mã màu hex
        </label>
        <input
          type="text"
          id="hex"
          value={hex}
          onChange={handleHexChange}
          className="shadow appearance-none border rounded w-1/3 mx-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg font-bold mb-2" htmlFor="rgb">
          Hệ màu RGB
        </label>
        <input
          type="text"
          id="rgb"
          value={rgb}
          readOnly
          className="shadow appearance-none border rounded w-1/3 mx-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-cyan-400 hover:bg-cyan-500 mx-24  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedColor ? 'Sửa' : 'Thêm'}
        </button>
        {selectedColor && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-black mr-[665px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
           Hủy
          </button>
        )}
      </div>
    </form>
  );
};

AdminProductColor.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedColor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    code: PropTypes.string,
    hex: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
};

AdminProductColor.defaultProps = {
  selectedColor: null,
};

export default AdminProductColor;