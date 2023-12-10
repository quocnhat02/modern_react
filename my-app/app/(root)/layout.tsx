import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className='flex gap-4 w-full p-5 bg-blue-300'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/posts'}>Posts</Link>
      </nav>
      <main className='p-5 min-h-[85vh]'>{children}</main>
      <footer className='text-green-600 text-lg font-bold p-5 bg-red-300'>
        Footer
      </footer>
    </div>
  );
};

export default Layout;
