"use client";
import { useState } from "react";
import Input from "@/app/_components/common/Input";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Icon from "@/app/_components/common/Icon";
import { requestLoginStudent } from "@/app/service/login_api";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("student");

  const handleLogin = (e: any) => {
    e.preventDefault();
    requestLoginStudent(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Phần bên trái - Hình ảnh */}
        <div className="hidden md:block relative overflow-hidden p-4">
          <img
            className="w-full h-full object-contain m-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_ngh%E1%BB%87_%C4%90%C3%B4ng_%C3%81_2015.png"
            alt="logo"
          />
        </div>

        {/* Phần bên phải - Form đăng nhập */}
        <div className="flex flex-col justify-center px-8 py-12 space-y-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-4xl font-bold text-blue-800 mb-6 tracking-tight">
              Đăng Nhập
            </h2>
            <p className="text-center text-gray-500 ">
              Chào mừng bạn quay trở lại! Vui lòng nhập thông tin.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className={`w-full bg-gradient-to-r text-gray-500  rounded-xl py-4 font-medium  transition-all duration-300 shadow-lg hover:shadow-xl ${
                type === "student"
                  ? "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white"
                  : ""
              }`}
              onClick={() => setType("student")}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="GraduationCap" className="w-7 h-7" size={30} />
                <span>Sinh viên</span>
              </div>
            </Button>
            <Button
              onClick={() => setType("teacher")}
              className={`w-full bg-gradient-to-r text-gray-500 rounded-xl py-4 font-medium  transition-all duration-300 shadow-lg hover:shadow-xl ${
                type === "teacher"
                  ? "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800  text-white"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="School" className="w-6 h-6" size={30} />
                <span>Giảng viên</span>
              </div>
            </Button>
          </div>
          <form className="space-y-6">
            <Input
              placeholder="Nhập email của trường"
              value={email}
              onChange={(e) => setEmail(e)}
              icon={"Mail"}
              label="Email"
            />
            <Input
              placeholder="Nhập mật khẩu"
              value={password}
              label="Mật khẩu"
              onChange={(e) => setPassword(e)}
              type="password"
              icon={"Lock"}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-lg"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
