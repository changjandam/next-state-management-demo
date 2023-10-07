"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchParamsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let query = searchParams.get("q");

  if (!query) {
    query = "";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    router.push(`${pathname}?q=${value}`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">use searchParams Page</h1>
      <input
        type="text"
        className="border w-80"
        defaultValue={query}
        onChange={handleChange}
      />
      <Link href="/end">go to End Page</Link>
    </div>
  );
};

export default SearchParamsPage;
