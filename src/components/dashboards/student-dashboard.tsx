'use client';

import { useAuth } from '@/context/authContext';
import DashboardNavbar from '../dashboard-components/dashboard-navbar';
import Sidebar from '../dashboard-components/sidebar';

const StudentDashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <Sidebar role='student' />

      {/* Main Content Area */}
      <div className='flex flex-col flex-1'>
        {/* Navbar with user */}
        <DashboardNavbar user={user} />

        {/* Dashboard Content */}
        <main className='p-6'>
          <h1 className='text-2xl font-bold'>
            Welcome to the Student Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
