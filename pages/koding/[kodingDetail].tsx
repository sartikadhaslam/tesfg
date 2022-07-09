import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function koding() {
  const router = useRouter();
  const koding = router.query.kodingDetail;

  console.log(router);

  return (
    <div className="h-[5000px]">
      <div className="bg-red-500 flex justify-center fixed">
        <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      </div>
      <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      <h1 className="text-3xl font-bold underline">Hello koding!</h1>
      <div>
        <h1>{koding}</h1>
      </div>
    </div>
  );
}
