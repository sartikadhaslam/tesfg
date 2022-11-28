import React from "react";
import NavbarFooterHomeLayout from "../../layout/NavbarFooterHomeLayout";
import SecItemBlog from "../../components/SecItemBlog";
import SecSearchCreateBlog from "../../components/SecSearchCreateBlog";
import SecSubscribe from "../../components/SecSubscribe";

export default function HomePage() {
  return (
    <NavbarFooterHomeLayout>
      <SecSearchCreateBlog />
      <SecItemBlog />
      <SecSubscribe />
    </NavbarFooterHomeLayout>
  );
}
