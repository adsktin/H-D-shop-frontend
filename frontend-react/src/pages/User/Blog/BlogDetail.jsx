import React from 'react'
import {
  Typography,
  Card, CardBody
} from "@material-tailwind/react";
export default function BlogDetail() {
  return (
    <div className='mx-auto container my-4'>    
        <Card>         
            <CardBody>
                <Typography variant="h2" color="black" className="my-4 text-center">
                    iPhone 15 Series chính thức ra mắt
                </Typography>
                 <Typography variant="h5" color="black" className="my-4">
                    Sự kiện iPhone 15. iPhone 15 Series chính thức ra mắt vào 0h ngày 13/09/2023 tại sự kiện Wonderlust được tổ chức bởi Apple cùng Apple Watch Series 9 và Apple Watch Ultra 2. 
                </Typography>
                <Typography variant="h7" color="gray" className="my-2">
                    Chính thức, iPhone 15 đã ra mắt vào lúc 10 giờ ngày 12/9/2023 tại California, tức khoảng 0 giờ ngày 13/9/2023 theo giờ Việt Nam. Theo dữ liệu năm ngoái, sau khoảng 10 ngày từ khi ra mắt (ngày 21/9 – 22/9), iPhone 15 Series sẽ được mở bán với mức giá khởi điểm từ 799 USD (dự kiến tại Viettel Store khoảng 22.990.000 VNĐ). Thời gian sản phẩm lên kệ tại các cửa hàng, đại lý ủy quyền của Apple tại Việt Nam năm nay sẽ sớm hơn mọi năm khoảng 1 tháng, từ ngày 29/9/2023 bắt đầu mở bán                 </Typography>
            </CardBody>
            <div className='flex justify-center' >
                 <img src="https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg" alt="" className="w-1/2 rounded-lg p-4" />
            </div>
        </Card> 
    </div>
  )
}
