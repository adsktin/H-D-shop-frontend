import React from 'react';
import ProductSpecifications from './ProductSpecifications';
import ProductReviews from './ProductReviews';
import Comment from './comment';

const ProductDetail = () => {
    const data = [
        {
          imgelink:
          "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_1.jpg"        },
        {
          imgelink:
          "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png"        },
        {
          imgelink:
          "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_3.jpg"        },
        {
          imgelink:
          "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png"        },
        {
          imgelink:
          "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_3.jpg"        },
      ];
      const [active, setActive] = React.useState(
        "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_3.jpg"      );
    const product = {
        name: "iPhone 13 Pro Max 64Gb Màu Gold Chính Hãng",
        description: "The latest iPhone with A15 Bionic chip and Pro camera system.",
        price: '32.200.000đ',
        specifications: [
            { key: "Display", value: "6.7-inch Super Retina XDR" },
            { key: "Chip", value: "A15 Bionic chip" },
            { key: "Camera", value: "Pro camera system" }
        ],
        colors: ["Silver", "Gold", "Graphite"],
        versions: ["128GB", "256GB", "512GB"],
    };
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
    const [selectedVersion, setSelectedVersion] = React.useState(product.versions[0]);
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0); // Bắt đầu bằng hình ảnh đầu tiên

    const productImagesByColor = {
    Silver: [
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen.png',
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
    ],
    Gold: [
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen.png',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen.png',
    ],
    Graphite: [
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png',
    ],
};
    const productPricesByVersion = {
        '128GB': '32.200.000đ',
        '256GB': '34.200.000đ',
        '512GB': '36.200.000đ',
    };
      const productNamesByColorAndVersion = {
    Silver: {
      '128GB': "iPhone 13 Pro Max 128GB Màu Silver Chính Hãng",
      '256GB': "iPhone 13 Pro Max 256GB Màu Silver Chính Hãng",
      '512GB': "iPhone 13 Pro Max 512GB Màu Silver Chính Hãng",
    },
    Gold: {
      '128GB': "iPhone 13 Pro Max 128GB Màu Gold Chính Hãng",
      '256GB': "iPhone 13 Pro Max 256GB Màu Gold Chính Hãng",
      '512GB': "iPhone 13 Pro Max 512GB Màu Gold Chính Hãng",
    },
    Graphite: {
      '128GB': "iPhone 13 Pro Max 128GB Màu Graphite Chính Hãng",
      '256GB': "iPhone 13 Pro Max 256GB Màu Graphite Chính Hãng",
      '512GB': "iPhone 13 Pro Max 512GB Màu Graphite Chính Hãng",
    },
  };

  const productName = productNamesByColorAndVersion[selectedColor]?.[selectedVersion] || product.name;

    return (
       <div>
         {/* <h1 className="text-3xl font-bold container mx-auto">{product.name}</h1> */}
          <h1 className="text-3xl font-bold container mx-auto">{productName}</h1> 
        <div className="container p-4 mx-auto md:flex">       
            <div className="gap-4">                          
                <div>
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px] transition-opacity duration-300"
                        src={
                            productImagesByColor[selectedColor]?.[selectedImageIndex] ||
                            '/path/to/default/image.jpg'
                        }
                        alt={selectedColor || 'Product Image'}
                        style={{ opacity: productImagesByColor[selectedColor] ? 1 : 0.5 }}
                    />
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {(productImagesByColor[selectedColor] || []).map((image, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setSelectedImageIndex(index)}
                                src={image}
                                className={`object-cover object-center h-20 max-w-full rounded-lg cursor-pointer ${
                                    index === selectedImageIndex ? 'border-2 border-blue-500' : ''
                                }`}
                                alt={`Product Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>                       
                <h2 className="mt-4 text-2xl font-semibold transition-all duration-300">
                    Giá:{" "}
                    <span className="text-red-500">
                        {productPricesByVersion[selectedVersion] || product.price}
                    </span>
                </h2>         

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Phiên bản:</h3>
                {product.versions.map((version) => (
                    <label
                        key={version}
                        className="inline-flex items-center p-2 mr-2 border border-gray-300 rounded-md"
                    >
                        <input
                            type="radio"
                            value={version}
                            checked={selectedVersion === version}
                            onChange={() => setSelectedVersion(version)}
                            className="mr-2"
                        />
                        {version}
                    </label>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Màu sắc:</h3>
                {product.colors.map((color) => (
                    <label
                        key={color}
                        className="inline-flex items-center p-2 mr-2 border border-gray-300 rounded-md"
                    >
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                            className="mr-2"
                        />
                        {color}
                    </label>
                ))}
            </div>
            <p className="mt-4">{product.description}</p> 
            <div>
                <button className="px-8 py-4 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Mua Ngay
                </button>
                <button className="px-8 py-4 mt-4 font-bold text-white bg-orange-500 rounded hover:bg-green-700 disabled:opacity-50" disabled={!productImagesByColor[selectedColor]}>
                    Thêm vào giỏ hàng
                </button>
            </div>              
        </div>
        </div>
           
        <ProductSpecifications specifications={product.specifications} />          
        <ProductReviews productId={1} />
        <Comment/>
       </div>
    );
};

export default ProductDetail;
