'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/authContext';

const Navbar: React.FC = () => {
  const { user, role } = useAuth();
  const profileLink = role === 'admin' ? '/admin-dashboard' : '/dashboard';

  return (
    <div className='pt-20'>
      <nav className='bg-[#F2BF0C] fixed top-0 left-0 w-full z-50 shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/'>
                <Image
                  src='/logo.png'
                  alt='Dhamaal Logo'
                  width={90}
                  height={36}
                  priority
                />
              </Link>
            </div>

            {/* Links for Desktop */}
            <div className='hidden lg:flex items-center space-x-6 ml-auto'>
              <Link
                href='/'
                className='text-gray-800 hover:text-black font-semibold text-sm'
              >
                Home
              </Link>
              <Link
                href='/search'
                className='text-gray-800 hover:text-black font-semibold text-sm'
              >
                Classes
              </Link>
              <Link
                href='/artists'
                className='text-gray-800 hover:text-black font-semibold text-sm'
              >
                Explore Artists
              </Link>
              <Link
                href='/rent-studio'
                className='text-gray-800 hover:text-black font-semibold text-sm'
              >
                Rent a Studio
              </Link>

              {/* Profile Avatar OR Login/Register */}
              {user ? (
                <div className='flex items-center space-x-4'>
                  <Link href={profileLink}>
                    <Avatar className='cursor-pointer border-2 border-white shadow-md'>
                      <AvatarImage src={user?.photoURL || ''} alt='Profile' />
                      <AvatarFallback>
                        {user?.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    href='/login'
                    className='border border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-md font-medium text-sm'
                  >
                    Login
                  </Link>
                  <Link
                    href='/sign-up'
                    className='bg-blue-600 text-white px-4 py-2 rounded-md border border-blue-600 font-medium text-sm'
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Version */}
            <div className='lg:hidden flex items-center justify-end w-full space-x-4'>
              <Link
                href='/'
                className='border border-gray-400 text-gray-800 bg-white px-4 py-2 rounded-md font-medium text-sm'
              >
                Home
              </Link>

              {/* Profile Avatar OR Login */}
              {user ? (
                <div className='flex items-center space-x-2'>
                  <Link href={profileLink}>
                    <Avatar className='cursor-pointer border-2 border-white shadow-md'>
                      <AvatarImage src={user?.photoURL || ''} alt='Profile' />
                      <AvatarFallback>
                        {user?.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              ) : (
                <Link
                  href='/login'
                  className='border border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-md font-medium text-sm'
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Banner */}
      <div className='lg:hidden flex justify-center gap-3 py-2 px-4 z-50 mt-[2rem]'>
        <Link
          href='/classes'
          className='bg-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-md shadow-md'
        >
          Classes
        </Link>
        <Link
          href='/artists'
          className='bg-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-md shadow-md'
        >
          Explore Artists
        </Link>
        <Link
          href='/rent-studio'
          className='bg-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-md shadow-md'
        >
          Rent a Studio
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
