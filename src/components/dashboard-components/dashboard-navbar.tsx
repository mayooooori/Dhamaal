'use client';

import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface User {
  photoURL?: string | null;
  email?: string | null;
  displayName?: string | null;
  profileLink?: string;
}

const DashboardNavbar = ({ user }: { user: User }) => {
  const router = useRouter();

  return (
    <nav className='flex items-center justify-between bg-white px-6 py-4 border-b shadow-md'>
      {/* Home Button */}
      <button
        onClick={() => router.push('/')}
        className='flex items-center gap-2 text-gray-700 hover:text-black transition'
      >
        <Home size={20} />
        <span className='font-medium'>Home</span>
      </button>

      {/* User Info */}
      <div className='flex items-center space-x-2'>
        <Link href={user.profileLink || '#'}>
          <Avatar className='cursor-pointer border-2 border-white shadow-md'>
            <AvatarImage src={user?.photoURL || ''} alt='Profile' />
            <AvatarFallback>
              {user?.displayName?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
        </Link>
        <span className='font-medium text-gray-800'>
          {user?.displayName || 'User'}
        </span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
