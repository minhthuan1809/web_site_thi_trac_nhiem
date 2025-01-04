import React from "react";
import NavBar from "../_components/navbar/NavBar";
import Footer from "../_components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
