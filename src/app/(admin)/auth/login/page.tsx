"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Input from '@/app/_components/common/Input';
import Image from 'next/image';

export default function PageAuth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Thêm logic đăng nhập tại đây
    // router.push("/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="absolute inset-0">
        <Image
          src="https://eaut.edu.vn/wp-content/uploads/2024/03/431387291_906973931168934_6989218719773471484_n.jpg"
          alt="Background"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <Card className="w-full max-w-md p-6 z-10">
        <CardHeader className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-center">Đăng nhập</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email" 
              placeholder="Nhập email của bạn"
              value={email}
              onChange={setEmail}
            />
            <Input
              value={password}
              onChange={setPassword}
              label="Mật khẩu"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
            <Button type="submit" color="primary">
              Đăng nhập
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Bạn chưa có tài khoản? Liên hệ quản trị viên
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
