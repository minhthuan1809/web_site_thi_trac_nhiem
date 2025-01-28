"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import Icon from "../common/Icon";
import {
  getLogo,
  getNavBtn,
  getNavItems,
  getUserInfo,
} from "@/app/service/Navbar_api";
import { deleteCookie, getCookie } from "cookies-next";
import { toast } from "react-toastify";

export default function NavBar() {
  const pathname = usePathname();
  const [logo, setLogo] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const [btnNav, setBtnNav] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLogo();
      const dataNavItems = await getNavItems();
      const dataNavBtn = await getNavBtn();
      const dataUserInfo = await getUserInfo();

      if (dataUserInfo.error) { // kiểm tra tk bị khóa
        toast.dismiss();
        router.push("/login");
        deleteCookie("jwt");
        toast.info("bạn cần đăng nhập lại !");
      }

      setLogo(data.data.navbar.logo.url);
      setItems(dataNavItems.data.navbar.items);
      setBtnNav(dataNavBtn.data.navbar.btn_nav);
      setUserInfo(dataUserInfo);
    };
    fetchData();
  }, [logo]);

  const handleLogout = () => {
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      deleteCookie("jwt");
      router.push("/login");
    }
  };

  return (
    <>
      <nav className="bg-white h-auto shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex w-[95%] mx-auto justify-around items-center h-20">
            <div className="w-40 overflow-hidden h-[60%] rounded-md">
              <Link href="/" className="w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${logo}`}
                  alt="logo"
                  width={150}
                  height={150}
                  className="w-full h-full"
                  priority
                />
              </Link>
            </div>
            <div className="flex gap-8">
              {items.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target={item.target}
                  className={`${
                    (pathname.includes(item.url) && item.url !== "/") ||
                    (pathname === "/" && item.url === "/")
                      ? "text-blue-500"
                      : "text-gray-500"
                  } hover:text-blue-500 transition-colors duration-300 text-lg`}>
                  {item.title}
                </Link>
              ))}
            </div>
            {getCookie("jwt") ? (
              <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="border text-2xl flex justify-center items-center w-14 h-14 border-2 border-black bg-blue-800 text-white rounded-full p-1">
                    <span >
                    {userInfo?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium font-semibold">
                      {userInfo.username}
                    </p>
                    <p className="text-gray-500">{userInfo.email}</p>
                  </div>
                </div>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible transition-all duration-300 border border-gray-100">
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-blue-50">
                    <Icon icon="UserIcon" className="w-5 h-5" />
                    <span className="font-medium">Thông tin cá nhân</span>
                  </Link>
                  <Link
                    href="/exam"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-blue-50">
                    <Icon icon="BookOpenCheck" className="w-5 h-5" />
                    <span className="font-medium">Bài thi</span>
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
                    <Icon icon="LogOut" className="w-5 h-5" />
                    <span className="font-medium" onClick={handleLogout}>
                      Đăng xuất
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                {btnNav.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    target={item.target}
                    className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-lg">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
