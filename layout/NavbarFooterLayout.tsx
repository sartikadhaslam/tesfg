import React from "react";

interface NavbarFooterLayoutProps {
  children: React.ReactNode;
}

export default function NavbarFooterLayout(props: NavbarFooterLayoutProps) {
  return (
    <div className="h-screen">
      {/* navbar */}
      <div className="bg-red-500">
        <h1>navbar</h1>
      </div>

      {/* children */}
      {props.children}

      {/* footer */}
      <div className="bg-[EC407A] h-screen">
        <h1>footer</h1>
      </div>
    </div>
  );
}
