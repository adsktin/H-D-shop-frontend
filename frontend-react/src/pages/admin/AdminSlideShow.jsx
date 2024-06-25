import React, { useState } from 'react';

export default function SlideShow() {
  const [panels, setPanels] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedImages.length === 0) {
      alert('Vui lòng chọn một hoặc nhiều hình ảnh!');
      return;
    }

    const newPanels = selectedImages.map((image, index) => ({
      id: index + 1,
      image: URL.createObjectURL(image)
    }));

    setPanels([...panels, ...newPanels]);
    setSelectedImages([]);
  };
  const handleDelete = () => {
    setPanels([]);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-4">SlideShow</h1>
      <div className="flex flex-row ">

        <div className=" bg-white p-4 rounded shadow-md mb-4 mx-4 size-1/3 my-24">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="file" className="block text-black text-lg">Chọn hình ảnh</label>
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                multiple
                onChange={handleFileChange}
                className="mt-1 block w-full border-black-300 "
                required
              />
            </div>
            <button type="submit" className="bg-cyan-400 text-white px-4 py-2 rounded">
              Lưu
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 ml-4 rounded" onClick={() => handleDelete(panels.id)}>
              Xóa
            </button>
          </form>
        </div>

        {/* Ds Slide */}
        <div className=" bg-white p-4 rounded shadow-md mb-4 mx-4 w-2/3">
          <h2 className="text-xl font-semibold mb-2">Upload Slide </h2>
          {panels.length === 0 && (
            <div className="mx-60 size-1/3 text-center font-semibold">
              <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' className="rounded-lg w-full h-auto" />
              Không có hình ảnh
            </div>
          )}
          <div className="flex flex-wrap mx-4 ">
            {panels.map(panel => (
              <div key={panel.id} className="w-full md:w-1/3 p-4">
                <img src={panel.image} alt={`Panel ${panel.id}`} className="rounded-lg w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}