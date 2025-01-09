import React from "react";
import * as LucideIcons from "lucide-react";
import { Select, SelectItem } from "@nextui-org/react";

type IconName = keyof typeof LucideIcons;

const IconSelect = () => {
  const [selectedIcon, setSelectedIcon] = React.useState<IconName>("Activity");

  const icons = Object.keys(LucideIcons)
    .filter((key): key is IconName => key in LucideIcons)
    .map((key) => ({
      name: key,
      Icon: LucideIcons[key] as React.FC<any>
    }));

  const SelectedIcon = selectedIcon ? LucideIcons[selectedIcon] as React.FC<any> : null;

  return (
    <Select
      label="Chọn biểu tượng"
      placeholder="Chọn biểu tượng" 
      defaultSelectedKeys={["Activity"]}
      selectedKeys={[selectedIcon]}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as IconName;
        setSelectedIcon(selected);
      }}
      variant="bordered"
      size="sm"
      items={icons}
      classNames={{
        trigger: "h-10",
        value: "flex items-center",
        label: "text-sm p-1"
      }}
      labelPlacement="outside"
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-default-100">
              {SelectedIcon && React.createElement(SelectedIcon, { size: 18 })}
            </div>
            <span>{selectedIcon}</span>
          </div>
        ));
      }}
    >
      {icons.map((icon) => (
        <SelectItem
          key={icon.name}
          value={icon.name}
          textValue={icon.name}
          className="capitalize"
        >
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-default-100">
              {React.createElement(icon.Icon, { size: 18 })}
            </div>
            <span>{icon.name}</span>
          </div>
        </SelectItem>
      ))}
    </Select>
  );
};

export default IconSelect;