import { Providers } from "@/app/providers";
import Link from "next/link";

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
     
        {children}
      
    </Providers>
  );
}

