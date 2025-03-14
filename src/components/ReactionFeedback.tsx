'use client'
import React, { useState } from "react";
import Image from "next/image";

const reactions = [
    { id: 1, label: "Hữu ích", icon: <Image alt="" src='/icons/thumbs_up.svg' width={48} height={48} />, count: 1 },
    { id: 2, label: "Yêu thích", icon: <Image alt="" src='/icons/green_heart.svg' width={48} height={48} />, count: 2 },
    { id: 3, label: "Thú vị", icon: <Image alt="" src='/icons/star-struck.svg' width={48} height={48} />, count: 0 },
    { id: 4, label: "Bất ngờ", icon: <Image alt="" src='/icons/hushed-face.svg' width={48} height={48} />, count: 1 },
    { id: 5, label: "Nhàm chán", icon: <Image alt="" src='/icons/yawning-face.svg' width={48} height={48} />, count: 0 },
    { id: 6, label: "Tức giận", icon: <Image alt="" src='/icons/pouting-face.svg' width={48} height={48} />, count: 0 },
];

const ReactionFeedback:React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-[900px] mx-auto">
            <h3 className="text-center text-[20px] text-[#33404A] font-extrabold">Bạn thấy bài viết như thế nào?</h3>
            <p className="text-center text-[#33404A] text-[16px] mb-3">4 phản hồi</p>
            <div className="flex justify-between items-center px-[50px]">
                {reactions.map((reaction) => (
                    <button
                        key={reaction.id}
                        className={`flex flex-col cursor-pointer items-center px-2 py-1 rounded-lg border transition-all ${selected === reaction.id ? "border-[#10805B]" : "border-transparent"
                            }`}
                        onClick={() => setSelected(reaction.id)}
                    >
                        <div className="text-xl">{reaction.icon}</div>
                        <span className={`font-bold text-[16px] ${selected === reaction.id ? "text-[#10805B]" : "text-[#33404A]"
                            }`}>{reaction.count}</span>
                        <span className={`text-[16px] text-medium ${selected === reaction.id ? "text-[#10805B]" : "text-[#33404A]"
                            }`}>{reaction.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
export default ReactionFeedback