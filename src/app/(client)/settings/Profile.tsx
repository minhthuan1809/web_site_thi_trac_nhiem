"use client";
import React, { useState } from "react";
import Input from "@/app/_components/common/Input";
import Icon from "@/app/_components/common/Icon";

export default function Profile() {
  const [formData, setFormData] = useState({
    studentId: {
      value: "20210533",
      placeholder: "Nhập mã sinh viên",
      label: "Mã sinh viên",
      icon: "HashIcon",
    },
    fullName: {
      value: "Nguyễn Minh Thuận",
      placeholder: "Nhập họ và tên",
      label: "Họ và tên",
      icon: "UserIcon",
    },
    dateOfBirth: {
      value: "18/09/2003",
      placeholder: "Nhập ngày sinh",
      label: "Ngày sinh",
      icon: "CalendarIcon",
    },
    gender: {
      value: "Nam",
      placeholder: "Nhập giới tính",
      label: "Giới tính",
      icon: "UserIcon",
    },
    birthPlace: {
      value: "Gia Lai",
      placeholder: "Nhập nơi sinh",
      label: "Nơi sinh",
      icon: "MapPinIcon",
    },
    hometown: {
      value: "Vạn Kim, Mỹ Đức, Hà Nội",
      placeholder: "Nhập quê quán",
      label: "Quê quán",
      icon: "HomeIcon",
    },
    nationality: {
      value: "Việt Nam",
      placeholder: "Nhập quốc tịch",
      label: "Quốc tịch",
      icon: "FlagIcon",
    },
    ethnicity: {
      value: "Kinh",
      placeholder: "Nhập dân tộc",
      label: "Dân tộc",
      icon: "UsersIcon",
    },
    religion: {
      value: "",
      placeholder: "Nhập tôn giáo",
      label: "Tôn giáo",
      icon: "HeartIcon",
    },
    background: {
      value: "Nông dân",
      placeholder: "Nhập thành phần xuất thân",
      label: "Thành phần xuất thân",
      icon: "UserIcon",
    },
    address: {
      value: "Làng Le 2, La Lang, Đức Cơ, Gia Lai",
      placeholder: "Nhập địa chỉ",
      label: "Địa chỉ",
      icon: "MapPinIcon",
    },

    subsidyType: {
      value: "Học sinh phổ thông",
      placeholder: "Nhập loại trợ cấp",
      label: "Loại trợ cấp",
      icon: "UserIcon",
    },
    homePhone: {
      value: "0355665985",
      placeholder: "Nhập điện thoại nhà riêng",
      label: "Điện thoại nhà riêng",
      icon: "PhoneIcon",
    },
    mobilePhone: {
      value: "0325397277",
      placeholder: "Nhập điện thoại di động",
      label: "Điện thoại di động",
      icon: "SmartphoneIcon",
    },
    email: {
      value: "20210533@eaut.edu.vn",
      placeholder: "Nhập email",
      label: "Email",
      icon: "MailIcon",
    },
    class: {
      value: "DCCNTT12.10.2",
      placeholder: "Nhập lớp",
      label: "Lớp",
      icon: "School",
    },
    major: {
      value: "Công nghệ thông tin",
      placeholder: "Nhập ngành học",
      label: "Ngành học",
      icon: "School",
    },
    interlock: {
      value: "K12",
      placeholder: "Nhập khóa",
      label: "Khóa",
      icon: "School",
    },
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof typeof formData],
        value,
      },
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
        {Object.entries(formData).map(([name, field], index) => (
          <Input
            key={index}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(value) => handleChange(name, value)}
            label={field.label}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
}
