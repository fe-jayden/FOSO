import { IArticleSection } from "@/types/mock";
import React from "react";

type ISection = Omit<IArticleSection, 'alt'>

interface TableOfContentsProps {
    sections?: ISection[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
    const headings = sections?.filter((section) => section.type === "heading");

    return (
        <div className=" pl-4">
            <h3 className="text-lg font-semibold mb-2">Nội Dung Bài Viết</h3>
            <ul className="list-none space-y-1">
                {headings?.map((heading, index) => (
                    <li key={index} className={`pl-${(heading.level || 2) * 2}`}>
                        <a
                            href={`#${heading.src}`}
                            className="text-[#33404A] hover:text-[#15AA7A]"
                        >
                            {heading.content}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
