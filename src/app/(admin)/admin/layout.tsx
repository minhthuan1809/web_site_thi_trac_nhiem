"use client";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import Icon from "@/app/_components/common/Icon";

export default function layout({ children }: { children: React.ReactNode }) {
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
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/admin" 
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <Icon icon="HomeIcon" className="w-5 h-5" />
                  <span>Admin</span>
                </Link>
              </li>
       
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-8 bg-gray-50">{children}</div>
    </div>
  );
}
