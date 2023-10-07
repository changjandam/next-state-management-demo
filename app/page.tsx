'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col w-1/3'>
      <h1 className='text-4xl mb-4'>Home Page</h1>
      <Link href='/use-state'>Page with useState</Link>
      <Link href='/use-search-params'>Page with searchParams</Link>
      <Link href='/use-zustand'>Page with zustand</Link>
    </main>
  );
}
