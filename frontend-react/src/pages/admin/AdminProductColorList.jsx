import React from 'react';
import PropTypes from 'prop-types';

const AdminProductColorList = ({ colors, onEdit, onDelete }) => {
    return (
        <div className="container border-8 mt-4">
            <h1 className=" bg-gray-200 p-2 px-6 text-2xl font-bold">Danh sách màu</h1>
            <div className="mt-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {colors.map((color) => (
                        <li key={color.id} className="p-4 border rounded-md flex justify-between items-center">
                            <div>
                                <div className="flex items-center">
                                    <div
                                        className="w-10 h-10 rounded-full mr-4"
                                        style={{ backgroundColor: color.hex }}
                                    ></div>
                                    <div>
                                        <p className="font-bold">{color.name}</p>
                                        <p className="text-gray-600">{color.code}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => onEdit(color)}
                                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-1 px-2 rounded mr-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => onDelete(color.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

AdminProductColorList.propTypes = {
    colors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AdminProductColorList;
