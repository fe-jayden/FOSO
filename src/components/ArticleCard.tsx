"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IArticleCardProps {
    id?: string | number
    title: string
    createdAt: string
}

const ArticleCard: React.FC<IArticleCardProps> = ({ id, title, createdAt }) => {
    return (
        <div
            className="bg-white overflow-hidden cursor-pointer transition-all hover:shadow-lg p-4 rounded-lg"
            aria-label="Đi tới bài viết về BOM"
        >
            <Link href={`/resources/blog/${id}`} passHref className='max-w-sm'>
                <div className="relative">
                    <img
                        src="/images/article.png"
                        alt="BOM là gì?"
                        className="w-full rounded-lg"
                    />
                </div>

                <div className="mt-4">
                    <span className="bg-[#E2F0FE] text-[#0F4F9E] text-xs font-medium px-3 py-2 rounded-lg">
                        Quản Lý Sản Xuất
                    </span>
                    <h3 className="text-lg mt-3 font-semibold text-gray-900 leading-tight">
                        {title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
                        <div className="flex items-center space-x-1">
                            <Image src='/icons/calendarBlank.svg' alt='' height={14} width={14} />
                            <span>{createdAt}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Image src='/icons/clock.svg' alt='' height={14} width={14} />
                            <span>10 phút đọc</span>
                        </div>
                    </div>
                    <p className="mt-4 text-[#667F93] font-medium flex items-center gap-1 hover:underline">
                        Khám phá thêm →
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ArticleCard;
