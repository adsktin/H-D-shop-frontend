// import React from 'react';
// import { Card, CardBody, Typography } from '@material-tailwind/react';

// const ProductSpecifications = ({ specifications }) => {
//     return (
//         <Card className="mt-4">
//             <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                     Specifications
//                 </Typography>
//                 <ul>
//                     {specifications.map((spec, index) => (
//                         <li key={index} className="mb-1">
//                             {spec.key}: {spec.value}
//                         </li>
//                     ))}
//                 </ul>
//             </CardBody>
//         </Card>
//     );
// };

// export default ProductSpecifications;
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export default function ProductSpecifications() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button variant="outlined" onClick={handleOpen} className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
        Thông số kỹ thuật</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-between items-center"> {/* Add flexbox for layout */}
          Thông số kỹ thuật
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            size="sm" // Make the button smaller
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="h-[50rem] overflow-scroll">
        <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Iphone 15 Pro Max</h3>
        {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> */}
      </div>
      <div className="mt-6 border-t border-gray-500">
        <dl className="divide-y divide-gray-500">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-gray-900">Màn hình</dt> */}
            <h3 className="text-base font-semibold leading-7 text-gray-900">Màn hình</h3>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Màn hình Super Retina XDR, Tấm nền OLED <br/>
            Kích thước màn hình 6.7 inches<br/>
            Độ phân giải màn hình 2796 x 1290-pixel<br/>
            Tần số quét 120Hz<br/>
            Kiểu màn hình Dynamic Island
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt> */}
            <h3 className="text-base font-semibold leading-7 text-gray-900">Camera sau</h3>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Camera chính: 48MP, 24 mm, ƒ/1.78<br/>
            Camera góc siêu rộng: 12 MP, 13 mm, ƒ/2.2<br/>
            Camera Tele: 12 MP<br/>
            Quay video<br/>
            4K@24/25/30/60 fps<br/>
            HD 1080p@25/30/60 fps<br/>
            HD 720p@30 fps<br/>
            <br/>
            Flash True Tone Thích Ứng<br/>
            Photonic Engine<br/>
            Deep Fusion<br/>
            HDR thông minh thế hệ 5<br/>
            Ảnh chân dung thế hệ mới với Focus và Depth Control<br/>
            Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ<br/>
            Chế độ Ban Đêm
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Camera trước</h3>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            12MP, ƒ/1.9<br/>
            Quay video<br/>
            4K@24/25/30/60 fps<br/>
            HD 1080p@25/30/60 fps
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Vi xử lí</h3>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Chipset: Apple A17 Pro 6 nhân<br/>
            Loại CPU: CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất<br/>
            GPU 6 nhân mới
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
         
        </dl>
      </div>
    </div>
        </DialogBody>
        {/* <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}