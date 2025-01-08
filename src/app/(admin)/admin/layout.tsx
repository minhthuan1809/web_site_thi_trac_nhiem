"use client";
import Link from "next/link";
import { Avatar, Button } from "@nextui-org/react";
import Icon from "@/app/_components/common/Icon";
import { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const dataNav = [
    {
      name: "Trang Chủ",
      icon: "House",
      href: "/admin/dashboard",
    },
    {
      name: "Quản Lý Người Dùng",
      icon: "UsersIcon",
      href: "/admin/users",
    },
    {
      name: "Quản Lý Bài Viết",
      icon: "PostIcon",
      href: "/admin/posts",
    },
    {
      name: "Phân Quyền",
      icon: "FolderTree",
      href: "/admin/permission",
    },
    {
      name: "Giao Diện",
      icon: "LayoutDashboard",
      href: "/admin/LayoutDashboard",
      data: [
        {
          name: "Logo",
          icon: "House",
          href: "/admin/logo",
        },
        {
          name: "Chân Trang",
          icon: "Footprints",
          href: "/admin/footer",
        },
        {
          name: "Menu",
          icon: "MenuIcon",
          href: "/admin/menu",
        },
      ],
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <div>
              <h1 className="text-lg font-semibold">Admin</h1>
              <p className="text-sm text-gray-500">admin@eaut.edu.vn</p>
            </div>
          </div>
          <nav className="mt-6">
            <div className="flex flex-col h-[calc(100vh-120px)]">
              <ul className="space-y-2">
                {dataNav.map((item, index) => {
                  return (
                    <li key={index}>
                      <div
                        onClick={() => item.data && setIsOpen(!isOpen)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Icon icon={item.icon} className="w-5 h-5" />
                        <span>{item.name}</span>
                        {item.data && (
                          <Icon
                            icon={isOpen ? "ChevronUpIcon" : "ChevronDownIcon"}
                            className="w-4 h-4 ml-auto"
                          />
                        )}
                      </div>
                      {item.data && isOpen && (
                        <ul className="ml-4 space-y-2 mt-2">
                          {item.data.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                              >
                                <Icon icon={subItem.icon} className="w-4 h-4" />
                                <span>{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto">
                <Button className="w-full text-white border border-red-500 bg-red-500 hover:bg-transparent focus:bg-transparent hover:text-red-500">
                  Đăng Xuất
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-8 bg-gray-50">{children}</div>
    </div>
  );
}
