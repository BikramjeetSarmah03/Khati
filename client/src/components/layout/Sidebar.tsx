import React from "react";

type SidebarProps = {
  open: boolean;
};

export default function Sidebar({ open }: SidebarProps) {
  return (
    <div
      className={`p-4 w-40 fixed z-[999] min-h-screen bg-white shadow-xl transition-all duration-500 ${
        open ? "left-0" : "-left-80"
      }`}>
      Sidebar
    </div>
  );
}
