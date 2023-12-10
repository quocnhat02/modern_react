import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className='flex gap-4 w-full p-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
