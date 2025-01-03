"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);

  const dataUrl = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Câu hỏi",
      href: "/questions",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Giới thiệu",
      href: "/about",
    },
  ];
  return (
    <>
      <nav className="bg-white h-auto shadow-lg">
        <div className="mx-auto px-4">
          <div className="flex w-[95%] mx-auto justify-around items-center h-20">
            <div className="w-40">
              <Link href="/" className="w-full h-full">
                <Image
                  src="https://eaut.edu.vn/wp-content/uploads/2018/11/logo-1.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="w-full h-full"
                  priority
                />
              </Link>
            </div>
            <div className="flex gap-8">
              {dataUrl.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`${
                    pathname === item.href ? "text-blue-500" : "text-gray-500"
                  } hover:text-blue-500 transition-colors duration-300 text-lg`}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <button className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-lg">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
