"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbItem {
    name: string;
    href: string;
}

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    console.log(pathname?.split('/').length)

    const generateBreadcrumb = (): BreadcrumbItem[] => {
        const paths = pathname.split('/').filter((path) => path);
        const breadcrumbItems: BreadcrumbItem[] = [
            { name: 'Trang chủ', href: '/' },
        ];
        const routerMap: Record<string, string> = { about: 'Về chúng tôi', introduce: 'Giới thiệu', oso: 'Về OSO', team: 'Đội ngũ', resources: 'Tài nguyên', blog: 'Blog', guides: 'Hướng dẫn', contact: 'Liên hệ' }
        let currentPath = '';
        paths.forEach((path) => {
            currentPath += `/${path}`;
            breadcrumbItems.push({
                name: routerMap[path] || path,
                href: currentPath,
            });
        });

        return breadcrumbItems;
    };
    const breadcrumbItems = generateBreadcrumb();

    if (pathname === '/') {
        return null;
    }
    return (
        <div className={`flex item-center ${pathname?.split('/').length < 4 ? 'justify-center' : 'justify-start'} mt-4 text-[14px] text-[#050505]`}>
            {breadcrumbItems.map((item, index) => (
                <span key={item.href}>
                    {index < breadcrumbItems.length - 1 ? (
                        <Link
                            href={item.href}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <span className="text-gray-800 font-bold">{item.name}</span>
                    )}
                    {index < breadcrumbItems.length - 1 && (
                        <span className="mx-2">{'>'}</span>
                    )}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumb;