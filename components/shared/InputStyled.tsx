import React from "react";

type InputStyledProps = {
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputStyled(props: InputStyledProps) {
  const {
    placeholder = "Cari Posisi Pekerjaan",
    onChange = () => null,
    className = "",
  } = props;

  return (
    <div
      className={`rounded-3xl leading-10 bg-gray-500 placeholder:px-5 ${className}`}
    >
      <i className={"ml-4 mr-2"}>X</i>
      <input
        className={`bg-transparent border-0`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
