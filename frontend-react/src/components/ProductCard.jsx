import { Rating, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, name, storage, imageUrl, price, discount, color } = product;

  return (
    <Link to={`/productdetail/${id}`} className="rounded-lg shadow-lg group p-2 hover:scale-105 transition-transform">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity"
          loading="lazy" 
        />
      </div>

      <div className="mx-2"> {/* Adjusted padding for better spacing */}
        <h3 className="text-lg font-semibold text-black truncate line-clamp-2 my-1">{name} {" "} {storage} {" "} {color}</h3>     

        <div className="items-center lg:flex"> {/* Adjusted layout */}
          <p className="px-1 mt-1 text-lg font-bold text-red-600">
            {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </p>
          {discount && (
            <p className="px-1 mt-1 text-sm font-medium text-gray-600 line-through">
              {discount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
          )}
        </div>    
      </div>

      <div className="my-4 flex items-center justify-center gap-2">
          <Rating value={4} className="text-amber-500" />
          <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5
          </Typography>
      </div>
    </Link>
  );
}
