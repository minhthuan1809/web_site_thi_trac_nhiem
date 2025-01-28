"use client";
import React, { useEffect, useState } from "react";
import Input from "@/app/_components/common/Input";
import Icon from "@/app/_components/common/Icon";
import { getUserInfo } from "@/app/service/Navbar_api";
import Loading from "@/app/_components/common/Loading";

export default function Profile() {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const dataUserInfo = async () => {
      const data = await getUserInfo();
      setFormData(data);
    };
    dataUserInfo();
  }, []);


if (!formData) {
  return <Loading/>
}
  return (
    <div className="flex flex-col gap-6 shadow-sm border border-gray-100 rounded-lg p-6">
      <div>
        <div className="flex items-center gap-2">
          <Icon icon="UserIcon" className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Thông tin cá nhân
          </h2>
        </div>
        <p className="text-gray-500 flex items-center gap-2 mt-2">
          <Icon icon="InfoIcon" className="text-gray-400" />
          {formData.role_user === "students" ? "Thông tin sinh viên" : "Thông tin giảng viên"}
        </p>
      </div>

      {formData.role_user === "students" && (
        <>
          {/* sinh viên */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              label="Họ và tên"
              value={formData.username}
              placeholder="Họ và tên"
              icon="UserIcon"
              onChange={() => {}}
            />
            <Input
              label="Email"
              value={formData.email}
              placeholder="Email"
              icon="Mail"
              onChange={() => {}}
            />
            <Input
              label="Mã sinh viên"
              value={formData.information_user.mav}
              placeholder="Mã sinh viên"
              icon="Fingerprint"
              onChange={() => {}}
            />
            <Input
              label="Lớp"
              value={formData.information_user.class}
              placeholder="Lớp"
              icon="Users"
              onChange={() => {}}
            />
            <Input
              label="Ngành học"
              value={formData.information_user.study}
              placeholder="Ngành học"
              icon="GraduationCap"
              onChange={() => {}}
            />
            <Input
              label="Khóa"
              value={formData.information_user.lock}
              placeholder="Khóa"
              icon="Key"
              onChange={() => {}}
            />
          </div>
        </>
      )}
      {/* giảng viên */}
      {formData.role_user === "lecturer" && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <Input
              label="Họ và tên"
              value={formData.username}
              placeholder="Họ và tên"
              icon="UserIcon"
              onChange={() => {}}
            />
            <Input
              label="Email"
              value={formData.email}
              placeholder="Email"
              icon="Mail"
              onChange={() => {}}
            />
            <Input
              label="Mã giảng viên"
              value={formData.information_teacher.mgv}
              placeholder="Mã giảng viên"
              icon="Fingerprint"
              onChange={() => {}}
            />
          </div>
        </>
      )}
    </div>
  );
}
