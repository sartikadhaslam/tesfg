import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Event() {
  const router = useRouter();
  const event = router.query.eventDetail;

  console.log(router);

  return (
    <div className="h-[5000px]">
      <div className="bg-red-500 flex justify-center fixed">
        <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      </div>
      <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      <h1 className="text-3xl font-bold underline">Hello Event!</h1>
      <div>
        <h1>{event}</h1>
      </div>
    </div>
  );
}
