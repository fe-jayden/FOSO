"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [dotPosition, setDotPosition] = useState({ left: 0, width: 0, visible: false });
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname();

  const languages: Language[] = useMemo(
    () => [
      { code: 'vn', name: 'Tiếng Việt', flag: 'https://flagcdn.com/h24/vn.png' },
      { code: 'en', name: 'English', flag: 'https://flagcdn.com/h24/gb.png' },
      { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/h24/fr.png' },
    ],
    []
  );

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const navItems: NavItem[] = useMemo(
    () => [
      { name: 'Về chúng tôi', href: '/about' },
      {
        name: 'Giới thiệu',
        href: '/introduce',
        submenu: [
          { name: 'Về OSO', href: '/introduce/oso' },
          { name: 'Đội ngũ', href: '/introduce/team' },
        ],
      },
      {
        name: 'Tài nguyên',
        href: '/resources',
        submenu: [
          { name: 'Blog', href: '/resources/blog' },
          { name: 'Hướng dẫn', href: '/resources/guides' },
        ],
      },
      { name: 'Liên hệ', href: '/contact' },
    ],
    []
  );

  const updateDotPosition = (items: NavItem[], refs: (HTMLLIElement | null)[], path: string) => {
    const activeIndex = items.findIndex(
      (item) => item.href === path || (item.submenu && item.submenu.some((subItem) => subItem.href === path))
    );

    if (activeIndex !== -1) {
      const activeItem = refs[activeIndex];
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        setDotPosition({
          left: offsetLeft + offsetWidth / 2 - 4,
          width: 8,
          visible: true,
        });
        return;
      }
    }
    setDotPosition((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseEnter = (index: number) => {
    const item = navItemsRef.current[index];
    if (item) {
      const { offsetLeft, offsetWidth } = item;
      setDotPosition({
        left: offsetLeft + offsetWidth / 2 - 4,
        width: 8,
        visible: true,
      });
    }
  };

  const handleMouseLeave = () => {
    updateDotPosition(navItems, navItemsRef.current, pathname);
  };

  const handleMenuHover = (name: string | null) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSubmenuOpen(name);
    if (!name) {
      timeoutRef.current = setTimeout(() => setSubmenuOpen(null), 700);
    }
  };

  useEffect(() => {
    updateDotPosition(navItems, navItemsRef.current, pathname);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  return (
    <header className="bg-white rounded-full shadow-md py-3 fixed top-0 left-0 right-0 z-50 mx-auto max-w-[1400px] w-full">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-32">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image alt="Logo" width={134} height={55} src="/images/foso_logo.png" />
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex text-gray-800 font-medium relative min-h-[30px]"
          onMouseLeave={() => handleMenuHover(null)}>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.submenu && item.submenu.some((subItem) => subItem.href === pathname));
            return (
              <li
                key={item.name}
                ref={(el) => { (navItemsRef.current[index] = el) }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative group inline-block min-w-[113px] before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-2 before:z-50"
              >
                <div className="flex items-center justify-center" onMouseEnter={() => handleMenuHover(item.submenu ? item.name : null)}>
                  <Link
                    href={item.href}
                    className={`${isActive ? 'font-bold' : ''} hover:font-bold hover:leading-[1.5] text-[14px] transition-colors py-2`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <span className="ml-1 text-gray-600">
                      <svg
                        className={`w-4 h-4 inline-block transition-transform duration-200 ${submenuOpen === item.name ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  )}
                </div>

                {item.submenu && submenuOpen === item.name && (
                  <div
                    className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={() => handleMenuHover(item.name)}
                    onMouseLeave={() => handleMenuHover(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${pathname === subItem.href ? 'font-bold' : ''
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
          <span
            className="absolute -bottom-1 w-2 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: '#1AD598',
              transform: `translateX(${dotPosition.left}px)`,
              opacity: dotPosition.visible ? 1 : 0,
              willChange: 'transform, opacity',
            }}
          />
        </ul>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${pathname === item.href ? 'font-bold' : ''} text-gray-800`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`${pathname === subItem.href ? 'font-bold' : ''} block text-gray-600`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-3 bg-gray-100 transition-colors cursor-pointer"
            >
              <Image src="/icons/icon_vn.svg" alt={`${selectedLanguage.name} Flag`} width={24} height={24} />
              <span className="text-gray-800 font-medium">{selectedLanguage.code.toUpperCase()}</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <Image src={lang.flag} alt={`${lang.name} Flag`} width={20} height={20} className="mr-2" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="bg-[#1AD598] text-[#052B1E] text-[14px] border border-[#A1ECD4] rounded-full py-2 px-5 flex items-center space-x-2 cursor-pointer transition-colors max-w-full">
            <span className="font-bold md:truncate">Trở thành khách hàng</span>
            <div className="bg-black w-[1.375rem] h-[1.375rem] rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/arrowUpRight.svg"
                alt="arrowUpRight"
                className="w-[0.875rem] h-[0.875rem]"
                width={14}
                height={14}
              />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;