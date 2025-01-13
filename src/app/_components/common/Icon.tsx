
import * as LucideIcons from "lucide-react";

interface IconProps {
  icon?: string;
  className?: string;
}

export default function Icon({ icon, className }: IconProps) {
  const IconComponent = icon ? (LucideIcons as any)[icon] : null;
  return IconComponent ? (
    <IconComponent className={className} size={20} />
  ) : null;
}
