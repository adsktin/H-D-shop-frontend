import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BrandForm = ({ onSave, selectedBrand, onCancel }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    if (selectedBrand) {
      setName(selectedBrand.name);
      setLogo(selectedBrand.logo);
    } else {
      setName('');
      setLogo(null);
    }
  }, [selectedBrand]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return ;
    onSave({ id: selectedBrand ? selectedBrand.id : null, name, logo });
    setName('');
    setLogo(null);
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg font-bold mb-2" htmlFor="name">
         Tên thương hiệu
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-1/3 mx-24  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mx-24 text-lg  font-bold mb-2" htmlFor="logo">
          Logo
        </label>
        <input
          type="file"
          id="logo"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-1/3 mx-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-cyan-400 hover:bg-cyan-500 mx-24 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedBrand ? 'Lưu' : 'Thêm'}
        </button>
        {selectedBrand && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-black mr-[665px]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Hủy bỏ
          </button>
        )}
      </div>
    </form>
  );
};

BrandForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedBrand: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // Add this line to validate logo
  }),
  onCancel: PropTypes.func.isRequired,
};

BrandForm.defaultProps = {
  selectedBrand: null,
};

export default BrandForm;