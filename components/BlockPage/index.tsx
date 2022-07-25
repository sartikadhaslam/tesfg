import React from "react";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";
import InputStyled from "../shared/InputStyled";
import CardBlog from "../Cards/CardBlog";

export default function BlogPage() {
  return (
    <NavbarFooterLayout>
      <InputStyled placeholder={"cari sesuatu"} className="w-full" />
      <h1>isi dari blog</h1>
      
    </NavbarFooterLayout>
  );
}
