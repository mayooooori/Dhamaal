import ProfileForm from '@/components/dashboard-components/profile-forms-page';

export default function ProfilePage() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Profile</h1>
      <ProfileForm />
    </div>
  );
}
