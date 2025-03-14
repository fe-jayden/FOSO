import Image from "next/image";
import React from "react";

export interface IPromoCardProps {
  src?: string;
}

const PromoCard: React.FC<IPromoCardProps> = ({ src = "/images/1425926236.png" }) => {
  return (
    <div className="bg-gradient-to-b from-[#0066FF] to-[#003399] text-white rounded-2xl flex flex-col items-center shadow-lg py-15">
      <Image
        src={src}
        alt="MRP Demo"
        width={300}
        height={250}
        className="w-full rounded-lg mb-4 object-cover"
      />

      <div className="text-center">
        <p className="text-base sm:text-lg lg:text-xl font-semibold mb-1">Miễn phí dùng thử</p>
        <div className="flex items-center justify-center gap-2">
          <Image 
            src="/images/mrp-logo.png" 
            alt="MRP Logo" 
            width={24} 
            height={24} 
            className="h-6 w-auto" 
          />
          <span className="bg-green-500 text-xs px-2 py-1 rounded-md">Beta</span>
        </div>
      </div>

      <button className="w-full sm:w-[280px] lg:w-[300px] flex items-center justify-center gap-2 bg-white text-blue-700 font-medium px-4 py-2 sm:py-3 mt-4 rounded-full border border-white shadow-md hover:bg-gray-100 transition">
        Trải Nghiệm Ngay
        <Image 
          alt="arrowUpRight" 
          src="/icons/arrowUpRight.svg" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      </button>
    </div>
  );
};

export default PromoCard;