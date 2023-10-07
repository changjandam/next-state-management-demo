"use client";

import Link from "next/link";
import { useState } from "react";

const UseStatePage = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">use useState Page</h1>
      <input
        type="text"
        className="border"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href="/end">go to End Page</Link>
    </div>
  );
};

export default UseStatePage;
