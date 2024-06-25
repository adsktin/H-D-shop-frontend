import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

const AdminAddProduct = ({ onSave, selectedProduct, onCancel }) => {
  const [productName, setProductName] = useState('');
  const [version, setVersion] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.productName);
      setVersion(selectedProduct.version);
      setPrice(selectedProduct.price.toString());
      setQuantity(selectedProduct.quantity.toString());
      setImageFile(selectedProduct.imageFile);
    } else {
      setProductName('');
      setVersion('');
      setPrice('');
      setQuantity('');
      setImageFile(null);
    }
  }, [selectedProduct]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productName.trim() === '' ||
      version.trim() === '' ||
      price.trim() === '' ||
      quantity.trim() === '' ||
      !imageFile
    ) {
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('version', version);
    formData.append('price', parseFloat(price));
    formData.append('quantity', parseInt(quantity));
    formData.append('imageFile', imageFile);

    onSave(formData, selectedProduct ? selectedProduct.id : null);
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
          Version
        </label>
        <input
          type="text"
          id="version"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageFile">
          Product Image
        </label>
        <input
          type="file"
          id="imageFile"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          accept="image/*"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedProduct ? 'Update' : 'Add'}
        </button>
        {selectedProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
    </div>
  );
};

AdminAddProduct.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedProduct: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    version: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    imageFile: PropTypes.instanceOf(File),
  }),
  onCancel: PropTypes.func.isRequired,
};

AdminAddProduct.defaultProps = {
  selectedProduct: null,
};

export default AdminAddProduct;