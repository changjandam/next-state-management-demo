"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const EndPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-1/3">
      <h1 className="text-4xl mb-4">End Page</h1>
      <button className="w-fit" onClick={() => router.back()}>
        Back to previous page
      </button>
    </div>
  );
};

export default EndPage;
