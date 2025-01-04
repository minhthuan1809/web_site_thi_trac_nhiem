"use client";
import { Input as InputNextUI } from "@nextui-org/react";
import Icon from "./Icon";

interface InputProps {
  placeholder: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  icon?: string;
}

export default function Input({
  placeholder,
  label,
  value,
  onChange,
  type,
  icon,
}: InputProps) {
  console.log(icon);

  return (
    <div className="w-full">
      <InputNextUI
        classNames={{
          inputWrapper: "w-full mt-[1rem]",
        }}
        startContent={icon && <Icon icon={icon} className="text-gray-400" />}
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
