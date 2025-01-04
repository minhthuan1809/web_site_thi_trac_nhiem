"use client";
import { Input as InputNextUI } from "@nextui-org/react";
import { Mail } from "lucide-react";
import { useState } from "react";
//thuan
export default function Input({
  placeholder,
  label,
  value,
  onChange,
  type,
  icon,
}: {
  placeholder: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <InputNextUI
        classNames={{
          inputWrapper: "w-full mt-[1rem]",
        }}
        startContent={icon}
        type={type}
        label={label}
        labelPlacement={"outside"}
        maxLength={30}
        placeholder={placeholder}
        variant="bordered"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
