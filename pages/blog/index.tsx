import React from "react";
import SecItemBlog from "../../components/SecItemBlog";
import SecSearchCreateBlog from "../../components/SecSearchCreateBlog";
import SecSubscribe from "../../components/SecSubscribe";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";

export default function BlogPage() {
  return (
    <>
    <NavbarFooterLayout>
      <SecSearchCreateBlog />
      <SecItemBlog />
      <SecSubscribe />
    </NavbarFooterLayout>
    </>
  );
}
