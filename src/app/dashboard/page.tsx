'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import StudentDashboard from '@/components/dashboards/student-dashboard';
import ArtistDashboard from '@/components/dashboards/artist-dashboard';
import StudioDashboard from '@/components/dashboards/studio-dashboard';

const DashboardPage = () => {
  const { user, role, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (!mounted || loading) return <p>Loading...</p>;

  switch (role) {
    case 'student':
      return <StudentDashboard />;
    case 'artist':
      return <ArtistDashboard />;
    case 'studio':
      return <StudioDashboard />;
    default:
      return <p>Unauthorized</p>;
  }
};

export default DashboardPage;
