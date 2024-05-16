import React from "react";

   const productImages = {
    black: [
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/maxresdefault%20(1).jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/maxresdefault%20(1).jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/maxresdefault%20(1).jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg',

        // ...
    ],
    white: [
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/apple-iphone-11-64gb-6.1.jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/ip11_white-2.jpg',
        // ...
    ],
    green: [
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/11_Green.jpg',
        'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/iPhone-11-Green-9to5Mac.jpg',
        // ...
    ],
    // Thêm ảnh cho các màu khác
    };
export function FeaturedImageGallery() {
  const [selectedColor, setSelectedColor] = React.useState('black'); // Khởi tạo với màu mặc định
  const [activeImage, setActiveImage] = React.useState(productImages[selectedColor][0]);
 
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setActiveImage(productImages[color][0]); // Đặt hình ảnh đầu tiên của màu được chọn làm hình ảnh chính
  };

  return (
    <div className="flex gap-4">
      <div className="mx-auto">
        <img 
          src={activeImage}
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          alt="Điện thoại"
        />
        {/* Phần hiển thị hình ảnh nhỏ*/}
        <div className="flex ">
            {productImages[selectedColor].map((image, index) => (
          <div key={index}>
            <img
              onClick={() => setActiveImage(image)}
              src={image}
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
        ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {/* Thay đổi màu cho các nút màu sắc*/}
        {Object.keys(productImages).map((color) => (
          <div key={color}>
            <button 
              onClick={() => handleColorChange(color)}
              className={`w-20 h-8 rounded-lg border 
                ${color === selectedColor ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)} 
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
}
