"use client";
import Input from "@/app/_components/common/Input";
import IconSelect from "@/app/_components/ui/SelectIcon";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function EditFooter() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [copyright, setCopyright] = useState("");

  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="flex flex-col gap-4">
      {/* //Cập nhật thông tin chân trang */}
      <div className="shadow-lg p-4 border rounded-2xl w-4/5 m-auto bg-white p-10">
        <h1 className="text-3xl font-bold">Cập nhật thông tin chân trang</h1>
        <Input
          placeholder="Tiêu đề"
          value={title}
          onChange={setTitle}
          label="Tiêu đề"
        />
        <Input
          placeholder="Mô tả"
          value={description}
          onChange={setDescription}
          label="Mô tả"
        />
        <Input
          placeholder="Bản quyền"
          value={copyright}
          onChange={setCopyright}
          label="Bản quyền"
        />
        <Button className="bg-blue-500 text-white mt-4">Cập nhật</Button>
      </div>
      {/* //Cập nhật thông tin Mạng Xã Hội */}
      <div className="shadow-lg p-4 border rounded-2xl w-4/5 m-auto bg-white">
        <h1 className="text-3xl font-bold">Thông tin Mạng Xã Hội</h1>
        <div className="flex gap-4">
        <IconSelect />
          <Input
            placeholder="Link"
            value={link}
            onChange={setLink}
            label="Link"
          />
        </div>
        <Button className="bg-blue-500 text-white mt-4">Cập nhật</Button>
      </div>
    </div>
  );
}
