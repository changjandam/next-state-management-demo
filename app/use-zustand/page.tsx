'use client';

import Link from 'next/link';
import { useStore } from './store';

const UseZustandPage = () => {
  const { query, setQuery } = useStore();
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl mb-4'>use zustand Page</h1>
      <input
        type='text'
        className='border w-80'
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href='/end'>go to End Page</Link>
    </div>
  );
};

export default UseZustandPage;
