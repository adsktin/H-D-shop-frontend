import React, { useState } from 'react';
import AdminAddProduct from './AdminAddProduct';

export default function AdminProduct() {
  const [products, setProducts] = useState([
    { id: 1, name: 'IPhone 13 Pro Max ', imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg', version: '256GB',quantity:'1', price: '13.690.000đ'},
    { id: 2, name: 'SamSung S24 Ultra ', imageSrc: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/s/ss-s24-ultra-vang-222.png', version: '256GB',quantity:'1', price: '28.990.000đ'},
    { id: 3, name: 'IPhone 13 Pro Max ', imageSrc: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-15-pro-max_3.png', version: '256GB',quantity:'1', price: '29.390.000đ' },
  ]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (productName && productPrice) {
      if (productId) {
        updateProduct(productId, productName, productPrice);
      } else {
        addProduct(productName, productPrice);
      }

      setProductName('');
      setProductPrice('');
      setProductId(null);
    }
  };

  const addProduct = (name, price) => {
    const newProduct = { id: new Date().getTime(), name, price };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, name, price) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, name, price } : product
    );
    setProducts(updatedProducts);
  };

  const editProduct = (id) => {
    const product = products.find(product => product.id === id);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductId(product.id);
  };

  const deleteProduct = (id) => {
    const filteredProducts = products.filter(product => product.id !== id);
    setProducts(filteredProducts);
  };
  return (
    <div className="mx-auto p-4 ">
      {/* <!-- Danh sách sản phẩm --> */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold text-transform: uppercase mb-2 py-4 ml-2">Danh sách sản phẩm</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
            <th className="py-2 px-4 border-b ">Hình ảnh</th>
              <th className="py-2 px-4 border-b text-left">Tên sản phẩm</th>
              <th className="py-2 px-4 border-b text-left">Nội dung</th>
              <th className="py-2 px-4 border-b text-left">Số lượng</th>
              <th className="py-2 px-4 border-b text-left">Giá</th>
              <th className="py-2 px-4 border-b text-left"></th>
            </tr>
          </thead>
          <tbody id="product-list">
            {products.map((product) => (
              <tr key={product.id} data-id={product.id}>
                <td className="py-2 px-4 border-b size-28"><img src={product.imageSrc}></img></td>
                <td className="py-2 px-4 border-b">{product.name}</td>       
                <td className="py-2 px-4 border-b">{product.version}</td>
                <td className="py-2 px-4 border-b">{product.quantity}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={() => addProduct(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <button className="bg-cyan-400 text-white px-2 py-1 rounded mr-2" onClick={() => editProduct(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded mr-2" onClick={() => deleteProduct(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
      <AdminAddProduct/>
    </div>
  );
}