'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { signUpUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signUpUser(name, email, password, role);
      console.log('Sign-up successful! Redirecting...');
      router.push('/'); // Ensure redirection happens
    } catch (error) {
      if (error instanceof Error) {
        console.error('Sign-up error:', error.message);
        setError(error.message);
      } else {
        console.error('Sign-up error:', error);
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Image
        src='/logo.png'
        alt='Logo'
        width={150}
        height={150}
        className='mb-8 rounded-lg'
      />
      <div className='w-[400px] p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-center m-5 text-2xl font-semibold'>Sign Up</h1>

        {/* Role Selection Tabs */}
        <Tabs
          defaultValue='student'
          onValueChange={setRole}
          className='w-full mb-4'
        >
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='student'>Student</TabsTrigger>
            <TabsTrigger value='artist'>Artist</TabsTrigger>
            <TabsTrigger value='studio'>Studio</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Additional field based on role */}
          {role === 'artist' && (
            <Input type='text' placeholder='Portfolio Link (optional)' />
          )}
          {role === 'studio' && (
            <Input type='text' placeholder='Studio Name' required />
          )}

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <Button type='submit' className='w-full' disabled={loading}>
            {loading
              ? 'Signing Up...'
              : `Sign Up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </Button>

          <Button variant='outline' className='w-full mt-2'>
            Sign Up with Google
          </Button>

          <div className='text-center mt-4'>
            <span className='text-sm'>
              Already have an account?{' '}
              <Link href='/login' className='text-blue-600'>
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
