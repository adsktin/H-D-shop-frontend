import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const initialProducts = [
  { id: 1, name: 'IPhone 13 Pro Max ', imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg', version: '256GB', color: 'Red', quantity: '1', price: '13.690.000đ' },
  { id: 2, name: 'SamSung S24 Ultra ', imageSrc: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/s/ss-s24-ultra-vang-222.png', version: '256GB', color: 'Blue', quantity: '1', price: '28.990.000đ' },
  { id: 3, name: 'IPhone 13 Pro Max ', imageSrc: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-15-pro-max_3.png', version: '256GB', color: 'White', quantity: '1', price: '29.390.000đ' },
];

export default function AdminProduct() {
  const [products, setProducts] = useState(initialProducts);
  const [isAdding, setIsAdding] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    image: '',
    name: '',
    version: '',
    color: '',
    price: '',
    quantity: 0
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (editProduct) {
          setEditProduct({ ...editProduct, imageSrc: e.target.result });
        } else {
          setNewProduct({ ...newProduct, imageSrc: e.target.result });
        }
      };
      reader.readAsDataURL(file);
    }
  });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ image: '', name: '', version: '', color: '', price: '', quantity: 0 });
    setIsAdding(false);
  };

  const handleEditProduct = () => {
    setProducts(products.map(product => product.id === editProduct.id ? editProduct : product));
    setEditProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="mx-auto p-4 ">
      {/* Danh sách sản phẩm */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2 py-4 ml-2">Danh sách sản phẩm</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Hình ảnh</th>
              <th className="py-2 px-4 border-b text-left">Tên sản phẩm</th>
              <th className="py-2 px-4 border-b text-left">Phiên bản</th>
              <th className="py-2 px-4 border-b text-left">Màu</th>
              <th className="py-2 px-4 border-b text-left">Giá</th>
              <th className="py-2 px-4 border-b text-left">Số lượng</th>
              <th className="py-2 px-4 border-b text-left"></th>
            </tr>
          </thead>
          <tbody id="product-list">
            {products.map((product) => (
              <tr key={product.id} data-id={product.id}>
                <td className="py-2 px-4 border-b size-28">
                  <img src={product.imageSrc} alt="product" className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.version}</td>
                <td className="py-2 px-4 border-b">{product.color}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.quantity}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-2 py-1 rounded mr-2" onClick={() => setIsAdding(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2" onClick={() => setEditProduct(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mr-2" onClick={() => handleDeleteProduct(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thêm sản phẩm */}
      {isAdding && (
        <div className="mb-6 p-4 border rounded border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
          <div {...getRootProps({ className: 'dropzone border border-dashed p-4 mb-4' })}>
            <input {...getInputProps()} />
            <p>Kéo và thả hình ảnh vào đây hoặc nhấp để chọn một hình ảnh</p>
          </div>
          {newProduct.imageSrc && <img src={newProduct.imageSrc} alt="Preview" className="mb-4 w-32 h-32 object-cover" />}
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Phiên bản"
            value={newProduct.version}
            onChange={(e) => setNewProduct({ ...newProduct, version: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Màu"
            value={newProduct.color}
            onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Giá"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={handleAddProduct}
            className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-4 rounded mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
            </svg>
          </button>
          <button
            onClick={() => setIsAdding(false)}
            className="bg-black text-white py-2 px-4 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      )}

      {/* Cập nhật sản phẩm */}
      {editProduct && (
        <div className="mt-6 p-4 border rounded border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Cập nhật sản phẩm</h2>
          <div {...getRootProps({ className: 'dropzone border border-dashed p-4 mb-4' })}>
            <input {...getInputProps()} />
            <p>Kéo và thả hình ảnh vào đây hoặc nhấp để chọn một hình ảnh</p>
          </div>
          {editProduct.imageSrc && <img src={editProduct.imageSrc} alt="Preview" className="mb-4 w-32 h-32 object-cover" />}
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Phiên bản"
            value={editProduct.version}
            onChange={(e) => setEditProduct({ ...editProduct, version: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Màu"
            value={editProduct.color}
            onChange={(e) => setEditProduct({ ...editProduct, color: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Giá"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={editProduct.quantity}
            onChange={(e) => setEditProduct({ ...editProduct, quantity: Number(e.target.value) })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={handleEditProduct}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
            </svg>
          </button>
          <button
            onClick={() => setEditProduct(null)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
