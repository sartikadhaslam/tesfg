import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Article() {
  const router = useRouter();
  const article = router.query.articleTitle;

  console.log(router);

  return (
    <div className="h-[5000px]">
      <div className="bg-red-500 flex justify-center fixed">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <h1>{article}</h1>
      </div>
    </div>
  );
}
