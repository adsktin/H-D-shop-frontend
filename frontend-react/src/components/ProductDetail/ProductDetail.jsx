import React,{useState} from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
  Card, CardBody
} from "@material-tailwind/react";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs } from "@material-tailwind/react";
import ProductSpecifications from "./ProductSpecifications";
import Comment from "./Comment";


export function ProductDetail() {
  const [isLiked, setIsLiked] = useState(false); // State to track whether the product is liked

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Toggle the liked state when the button is clicked
  };
const product = {
    name: "iPhone 13 Pro Max 64Gb Màu Gold Chính Hãng",
    description: "Công nghệ màn hình: Màn hình Super Retina XDR, Tấm nền OLED, Dynamic Island, Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz, Màn hình Luôn Bật, Màn hình HDR, Tỷ lệ tương phản 2.000.000:1 , Màn hình True Tone, Màn hình có dải màu rộng (P3), Haptic Touch Độ phân giải: 1290 x 2796, Chính: 48MP, khẩu độ ƒ/1.78, Ultra Wide: 12MP, khẩu độ ƒ/2.2, Telephoto: 12MP, khẩu độ ƒ/2.8, Camera trước TrueDepth 12MP, khẩu độ ƒ/1.9 Kích thước màn hình: 6.7 inch Hệ điều hành: iOS 17 Vi xử lý: A17 Pro Bộ nhớ trong: 256GB RAM: 8GB Mạng di động: 2G, 3G, 4G, 5G Số khe SIM: SIM kép (nano SIM và eSIM), Hỗ trợ hai eSIM",
    image_url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-black-titanium-pure-back-iphone-15-pro-max-black-titanium-pure-front-2up-screen-usen.png",
    price: '32.200.000đ',
    specifications: [
        { key: "Display", value: "6.7-inch Super Retina XDR" },
        { key: "Chip", value: "A15 Bionic chip" },
        { key: "Camera", value: "Pro camera system" }
    ],
    colors: ["Silver", "Gold", "Graphite", "Titanxanh", "Titanvang"],
    versions: ["128GB", "256GB", "512GB", "1TB"],
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
    Titanxanh: [
      'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen.png',
      'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen.png',
  ],
  Titanvang: [
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
   <div className="mx-auto container">
     <Breadcrumbs fullWidth className="my-4">
      <a href="#" className="opacity-60">
        Trang chủ
      </a>
      <a href="#" className="opacity-60">
        Điện thoại
      </a>
      <a href="#">Iphone 13 Pro Max</a>
    </Breadcrumbs>
    <Card className="">  
     <CardBody>       
      <section className="py-6 px-6">
        <h1 className="text-3xl font-bold hidden md:block text-black">{productName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:flex">       
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
          
          </div>
          <div>
          <div> 
          <h1 className="text-3xl font-bold container mx-auto md:hidden">{productName}</h1>                        
                  <h1 className="mt-4 text-3xl font-semibold transition-all duration-300">                   
                      <span className="text-red-500">
                          {productPricesByVersion[selectedVersion] || product.price}
                      </span>
                  </h1>         
                  <div className="flex px-8 py-4 mt-4 gap-2 font-bold text-white bg-black justify-center w-full rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                      Giao hàng miễn phí tài thành phố Hồ Chí Minh
                  </div>                  
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
              {/* <p className="mt-4">{product.description}</p>  */}
              <div>
                  <button className="px-8 py-4 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-1/2">
                      Mua Ngay
                  </button>
                  <button className="px-8 py-4 mt-4 font-bold text-white bg-orange-500 rounded hover:bg-green-700 disabled:opacity-50 w-1/2" disabled={!productImagesByColor[selectedColor]}>
                      Thêm vào giỏ hàng
                  </button>
              </div>              
          </div>
            <div className="flex justify-between my-4">
              <div>
              Đánh giá
              </div>                
              <div className="">
                Thêm vào yêu thích
              <IconButton
            color={isLiked ? "red" : "gray"} // Change color based on liked state
            variant="text"
            className="shrink-0 mx-4"
            onClick={handleLikeClick} // Call handleLikeClick when clicked
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

          </IconButton>
              </div>
            </div>
            <div className="flex items-center gap-8 bg-gray-200 h-1/3 rounded-md justify-center">
            
              <Rating value={4} className="text-amber-500" />
              <Typography className="!text-3xl font-bold !text-gray-700">
                4.0/5 (100 reviews)
              </Typography>
              
            </div>
          </div>
        </div>
      </section>
    </CardBody>
    </Card>
    <div className="my-4"></div>
    <h1 className="text-3xl m-4">Thông tin chi tiết</h1>
    <Card>
      <CardBody>
        {product.name}
        <img src={product.image_url} alt="iphone" />
        {product.description}
        <ProductSpecifications/>
      </CardBody>
    </Card>
    <div className="my-4"></div>
    <Card>
      <CardBody>
        <Comment/>
      </CardBody>
    </Card>               
   </div> 
  );
}

export default ProductDetail;