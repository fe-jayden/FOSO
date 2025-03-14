import Image from "next/image";
import React, { useState } from "react";

export interface IPaginationProps {
    totalPages?: number
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`w-8 h-8 rounded-lg cursor-pointer text-[16px] font-medium ${currentPage === i ? "bg-green-100 text-black font-bold" : "text-gray-600 hover:text-blue-500"
                            }`}
                    >
                        {i}
                    </button>
                );
            } else if (i === 2 || i === totalPages - 1) {
                pages.push(<span key={i} className="text-gray-400">...</span>);
            }
        }
        return pages;
    };

    return (
        <div className="flex text-[16px] items-center justify-between w-full mx-auto text-gray-500 text-sm mt-4 font-semibold">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 disabled:text-gray-300 hover:text-blue-500 cursor-pointer"
            >
                <Image alt="ArrowLeft" src='/icons/ArrowLeft.svg' width={24} height={24} /> Trang trước
            </button>

            <div className="flex items-center gap-2">{renderPageNumbers()}</div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 disabled:text-gray-300 hover:text-blue-500 cursor-pointer"
            >
                Trang kế tiếp <Image alt="ArrowLeft" src='/icons/ArrowRight.svg' width={24} height={24} />
            </button>
        </div>
    );
}
export default Pagination