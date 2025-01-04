"use client";
import React, { useState } from "react";
import Input from "@/app/_components/common/Input";
import Icon from "@/app/_components/common/Icon";

export default function Profile() {
  const [formData, setFormData] = useState({
    studentId: "20210533",
    fullName: "Nguyễn Minh Thuận",
    dateOfBirth: "18/09/2003",
    gender: "Nam",
    birthPlace: "Gia Lai",
    hometown: "Vạn Kim, Mỹ Đức, Hà Nội",
    nationality: "Việt Nam",
    ethnicity: "Kinh",
    religion: "",
    background: "Nông dân",
    address: "Làng Le 2, La Lang, Đức Cơ, Gia Lai",
    ward: "Xã Ia Lang",
    district: "Đức Cơ",
    city: "Gia Lai",
    studentType: "Học sinh phổ thông",
    subsidyType: "Học sinh phổ thông",
    homePhone: "0355665985",
    mobilePhone: "0325397277",
    email: "20210533@eaut.edu.vn",
    idNumber: "064203004587",
    notificationAddress: "Làng Le 2, La Lang, Đức Cơ, Gia Lai",
    currentAddress: "Làng Le 2, La Lang, Đức Cơ, Gia Lai",
  });

  const inputFields = [
    {
      name: "studentId",
      placeholder: "Nhập mã sinh viên",
      label: "Mã sinh viên",
      icon: "HashIcon",
    },
    {
      name: "fullName",
      placeholder: "Nhập họ và tên",
      label: "Họ và tên",
      icon: "UserIcon",
    },
    {
      name: "dateOfBirth",
      placeholder: "Nhập ngày sinh",
      label: "Ngày sinh",
      icon: "CalendarIcon",
    },
    {
      name: "gender",
      placeholder: "Nhập giới tính",
      label: "Giới tính",
      icon: "UserIcon",
    },
    {
      name: "birthPlace",
      placeholder: "Nhập nơi sinh",
      label: "Nơi sinh",
      icon: "MapPinIcon",
    },
    {
      name: "hometown",
      placeholder: "Nhập quê quán",
      label: "Quê quán",
      icon: "HomeIcon",
    },
    {
      name: "nationality",
      placeholder: "Nhập quốc tịch",
      label: "Quốc tịch",
      icon: "FlagIcon",
    },
    {
      name: "ethnicity",
      placeholder: "Nhập dân tộc",
      label: "Dân tộc",
      icon: "UsersIcon",
    },
    {
      name: "religion",
      placeholder: "Nhập tôn giáo",
      label: "Tôn giáo",
      icon: "HeartIcon",
    },
    {
      name: "background",
      placeholder: "Nhập thành phần xuất thân",
      label: "Thành phần xuất thân",
      icon: "UserIcon",
    },
    {
      name: "address",
      placeholder: "Nhập địa chỉ",
      label: "Địa chỉ",
      icon: "MapPinIcon",
    },
    {
      name: "ward",
      placeholder: "Nhập phường/xã",
      label: "Phường/Xã",
      icon: "MapIcon",
    },
    {
      name: "district",
      placeholder: "Nhập quận/huyện",
      label: "Quận/Huyện",
      icon: "MapIcon",
    },
    {
      name: "city",
      placeholder: "Nhập tỉnh/thành phố",
      label: "Tỉnh/Thành phố",
      icon: "MapIcon",
    },
    {
      name: "homePhone",
      placeholder: "Nhập điện thoại nhà riêng",
      label: "Điện thoại nhà riêng",
      icon: "PhoneIcon",
    },
    {
      name: "mobilePhone",
      placeholder: "Nhập điện thoại di động",
      label: "Điện thoại di động",
      icon: "SmartphoneIcon",
    },
    {
      name: "email",
      placeholder: "Nhập email",
      label: "Email",
      icon: "MailIcon",
    },
    {
      name: "idNumber",
      placeholder: "Nhập số CMND/CCCD",
      label: "Số CMND/CCCD",
      icon: "CreditCardIcon",
    },
    {
      name: "notificationAddress",
      placeholder: "Nhập địa chỉ báo tin",
      label: "Địa chỉ báo tin",
      icon: "MapPinIcon",
    },
    {
      name: "currentAddress",
      placeholder: "Nhập nơi ở hiện nay",
      label: "Nơi ở hiện nay",
      icon: "HomeIcon",
    },
  ];

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          Thông tin sinh viên
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {inputFields.map((field, index) => (
          <Input
            key={index}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
            onChange={(value) => handleChange(field.name, value)}
            label={field.label}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
}
