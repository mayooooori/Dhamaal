'use client';

import { useAuth } from '@/context/authContext';
import DashboardNavbar from '../dashboard-components/dashboard-navbar';
import Sidebar from '../dashboard-components/sidebar';

const ArtistDashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading...</p>;

  const formattedUser = {
    displayName: user.displayName || 'User',
    email: user.email || '',
    photoURL: user.photoURL || '',
    profileLink: `/profile/${user.uid}`, // Example profile link
    logout, // Passing logout function
  };

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <Sidebar role='artist' />

      {/* Main Content Area */}
      <div className='flex flex-col flex-1'>
        {/* Navbar with user */}
        <DashboardNavbar user={formattedUser} />

        {/* Dashboard Content */}
        <main className='p-6'>
          <h1 className='text-2xl font-bold'>Artist Dashboard</h1>
          {/* Add your dashboard sections here */}
        </main>
      </div>
    </div>
  );
};

export default ArtistDashboard;
