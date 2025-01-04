"use client";
import React, { useState } from "react";
import Input from "@/app/_components/common/Input";
import Icon from "@/app/_components/common/Icon";

export default function Change_password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col gap-6 shadow-sm border border-gray-100 rounded-lg p-6">
      <div>
        <div className="flex items-center gap-2">
          <Icon icon="KeySquare" className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Đổi mật khẩu</h2>
        </div>
        <p className="text-gray-500 flex items-center gap-2 mt-2">
          <Icon icon="ShieldEllipsisIcon" className="text-gray-400" />
          Vui lòng nhập mật khẩu hiện tại và mật khẩu mới của bạn
        </p>
      </div>
      <Input
        placeholder="Nhập mật khẩu hiện tại"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e)}
        type="password"
        label="Mật khẩu hiện tại"
        icon={"LockIcon"}
      />
      <Input
        placeholder="Nhập mật khẩu mới"
        value={newPassword}
        onChange={(e) => setNewPassword(e)}
        type="password"
        label="Mật khẩu mới"
        icon={"LockIcon"}
      />
      <Input
        placeholder="Xác nhận mật khẩu mới"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e)}
        type="password"
        label="Xác nhận mật khẩu mới"
        icon={"LockIcon"}
      />
      <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors mt-2">
        Cập nhật mật khẩu
      </button>
    </div>
  );
}
