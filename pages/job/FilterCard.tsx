import React from "react";

interface FilterCardProps {
  children: React.ReactNode;
}

export default function FilterCard(props: FilterCardProps) {
  return (
    <div className="block p-3 rounded-lg shadow-lg bg-pink-800 max-w-sm">
      {/* children */}
      {props.children}
    </div>
  );
}
