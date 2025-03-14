import { mockArticles } from "@/app/mockData";
import ArticleCard from "@/components/ArticleCard";
import PromoCard from "@/components/PromoCard";
import ReactionFeedback from "@/components/ReactionFeedback";
import TableOfContents from "@/components/TableOfContents";
import { IArticle } from "@/types/mock";
import Image from "next/image";
import React, { JSX } from "react";

interface IArticleRendererProps {
    article?: IArticle;
}

const ArticleRenderer: React.FC<IArticleRendererProps> = ({ article }) => {
    return (
        <div>
            {article?.sections?.map((section, index) => {
                if (section.type === "image") {
                    return (
                        <div key={index} className="w-full">
                            <Image
                                src={section.src}
                                alt={section.alt}
                                width={700}
                                height={300}
                                className="w-full h-auto object-cover object-center rounded-lg"
                            />
                        </div>
                    );
                }

                if (section.type === "text") {
                    return (
                        <p
                            key={index}
                            className="text-[18px] lg:text-[20px] leading-[150%] text-[#231F20] mb-4"
                        >
                            {section.content}
                        </p>
                    );
                }

                if (section.type === "heading") {
                    const Tag = `h${section.level}` as keyof JSX.IntrinsicElements;
                    return (
                        <Tag
                            key={index}
                            className="font-extrabold leading-[150%] text-[18px] lg:text-[20px] text-[#15AA7A] mb-3"
                        >
                            {section.content}
                        </Tag>
                    );
                }

                if (section.type === "list") {
                    return (
                        <ul key={index} className="list-disc pl-6 space-y-2 mb-4">
                            {section.items.map((item: string, i: number) => (
                                <li key={i} className="text-gray-700 text-[18px] lg:text-[20px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default function ArticleDetail({ params }: { params: { id: string } }) {
    const detailArticle = mockArticles.find((art) => art.id === params?.id);

    return (
        <div className="container mx-auto px-8 flex gap-8">
            <div className="flex-1 max-w-[900px] py-10">
                <div className="flex items-center justify-between bg-white p-4 w-full rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/images/foso_logo.png"
                            alt="FOSO Logo"
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <p className="text-gray-500 text-sm">Tác giả</p>
                            <p className="text-lg lg:text-xl font-semibold">{detailArticle?.owner}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 text-gray-600 text-sm">
                        <div className="flex items-center space-x-2">
                            <Image src="/icons/calendarBlank.svg" alt="Calendar" height={24} width={24} />
                            <span>Cập nhật vào: {detailArticle?.updateAt}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src="/icons/clock.svg" alt="Clock" height={24} width={24} />
                            <span>10 phút đọc</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-[#050505] my-6">
                    {detailArticle?.title}
                </h1>
                <ArticleRenderer article={detailArticle} />
                <section className="my-6 w-full">
                    <ReactionFeedback />
                </section>
                <section className="my-6">
                    <h2 className="text-[#050505] text-2xl lg:text-[36px] font-extrabold mb-4">
                        Bài viết liên quan
                    </h2>
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                        {mockArticles?.slice(0, 3)?.map((card) => (
                            <ArticleCard
                                title={card.title}
                                key={card.id}
                                id={card.id}
                                createdAt={card?.createdAt}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <div className="flex-1 max-w-[366px]">
                <TableOfContents sections={detailArticle?.sections} />
                <section className="mt-6 flex flex-col gap-6 hidden lg:flex">
                    <PromoCard />
                    <PromoCard />
                </section>
            </div>
        </div>
    );
}