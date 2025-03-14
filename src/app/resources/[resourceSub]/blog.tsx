'use client'
import { mockArticles } from '@/app/mockData';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import PromoCard from '@/components/PromoCard';
import type { NextPage } from 'next';
import Image from 'next/image';

const Blog: NextPage = () => {

  return (
    <div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          alt=""
          src="/images/saly-42.png"
          className="absolute -left-12 lg:-left-25 top-0 w-[120px] md:w-[150px] lg:w-[195px]"
          width={195}
          height={188}
        />
        <div className="flex items-center flex-col text-center py-16 lg:py-0">
          <p className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.5] lg:leading-[100px] font-normal">
            Blog{' '}
            <span className="text-[32px] sm:text-[48px] lg:text-6xl font-extrabold bg-gradient-to-r from-[#53B086] to-[#85EEB3] bg-clip-text text-transparent">
              FOSO
            </span>{' '}
            –
          </p>
          <p className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.5] lg:leading-[100px] font-normal mt-2">
            Cập Nhật Tin Tức
            <span className="relative inline-block ml-2 font-extrabold">
              <span className="relative z-10 text-[32px] sm:text-[48px] lg:text-[64px]">Mới Nhất</span>
              <span className="absolute left-0 bottom-2 lg:bottom-5 w-full h-3 lg:h-6 bg-[#A8F0DC] rounded-full" />
            </span>
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#33404A] font-medium mt-4 max-w-2xl">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
        <Image
          alt=""
          src="/images/frame-161.png"
          className="absolute -right-12 lg:-right-28 top-0 w-[120px] md:w-[150px] lg:w-[195px]"
          width={195}
          height={188}
        />
      </div>

      <section className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-6">
          <div className="flex-1 lg:max-w-[1000px]">
            <h2 className="font-extrabold text-[#050505] text-[24px] sm:text-[30px] lg:text-[36px] leading-[150%] lg:leading-[200%] mb-6">
              Tất cả bài viết
            </h2>

            <section className="relative bg-gradient-to-r from-[#0046C0] to-[#0073E6] text-white p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col lg:flex-row items-center justify-between overflow-hidden">
              <div className="max-w-lg z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Gia nhập cộng đồng <br /> FMRP – Kết nối, chia sẻ, cùng phát triển!
                </h2>
                <button className="cursor-pointer mt-6 px-6 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-[#0046C0] transition">
                  Tham Gia Ngay
                  <span>→</span>
                </button>
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0">
                <Image
                  width={432}
                  height={360}
                  src="/images/group.png"
                  alt="Community Illustration"
                  className="w-full max-w-[300px] mx-auto lg:max-w-[432px]"
                />
              </div>
            </section>

            <section className="pt-8 lg:pt-12 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {mockArticles?.map(card => (
                <ArticleCard
                  title={card.title}
                  key={card.id}
                  id={card.id}
                  createdAt={card?.createdAt}
                />
              ))}
            </section>

            <section className="py-8 lg:py-[50px]">
              <Pagination />
            </section>
          </div>
          <div className="flex-1 lg:max-w-[400px] w-full lg:w-[400px]">
            <aside className="w-full bg-white p-6 sm:p-8 rounded-lg">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Tìm Kiếm</h3>
                <div className="flex items-center w-full bg-white shadow-md rounded-2xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết"
                    className="flex-1 bg-transparent outline-none text-gray-500 placeholder-gray-400 text-base sm:text-lg"
                  />
                  <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-[#15AA7A] rounded-lg shadow-md transition">
                    <Image
                      alt="MagnifyingGlass"
                      src="/icons/MagnifyingGlass.svg"
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Danh Mục</h3>
                <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                  <li className="flex justify-between">
                    <span>Tất cả</span><span className="text-gray-400">108</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thiết Kế Website</span><span className="text-gray-400">36</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thiết Kế App Mobile</span><span className="text-gray-400">13</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quản Lý Sản Xuất</span><span className="text-gray-400">25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quản Lý Bán Hàng</span><span className="text-gray-400">22</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Báo Chí Nói Về FOSO</span><span className="text-gray-400">7</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tin Tức FOSO</span><span className="text-gray-400">5</span>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="mt-8 flex flex-col gap-y-6 ">
              <PromoCard />
              <PromoCard />
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Blog;