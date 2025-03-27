'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig'; // Make sure your Firebase config is correct
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign-up successful! Redirecting...');
      router.push('/'); // redirection
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

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Google Sign-In successful! Redirecting...');
      router.push('/'); // Redirect
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Failed to sign in with Google.'
      );
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
        <h1 className='text-center m-5 text-2xl font-semibold'>Log In</h1>

        <Tabs defaultValue='student' onValueChange={setRole} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 mb-4'>
            <TabsTrigger value='student'>Student</TabsTrigger>
            <TabsTrigger value='artist'>Artist</TabsTrigger>
            <TabsTrigger value='studio'>Studio</TabsTrigger>
          </TabsList>

          <TabsContent value='student'>
            <form onSubmit={handleLogin} className='space-y-4'>
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
              {error && <p className='text-red-500 text-sm'>{error}</p>}

              <Button type='submit' className='w-full' disabled={loading}>
                {loading
                  ? 'Logging in...'
                  : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
              </Button>

              <Button
                variant='outline'
                className='w-full mt-2'
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </Button>

              <div className='text-center mt-4'>
                <a href='#' className='text-sm text-blue-600'>
                  Forgot Password?
                </a>
              </div>

              <div className='text-center mt-2'>
                <span className='text-sm'>
                  Don&apos;t have an account?{' '}
                  <Link href='/sign-up' className='text-blue-600'>
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </TabsContent>

          <TabsContent value='artist'>
            <form onSubmit={handleLogin} className='space-y-4'>
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
              {error && <p className='text-red-500 text-sm'>{error}</p>}

              <Button type='submit' className='w-full' disabled={loading}>
                {loading ? 'Logging in...' : `Login as Artist`}
              </Button>

              <Button
                variant='outline'
                className='w-full mt-2'
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </Button>

              <div className='text-center mt-4'>
                <a href='#' className='text-sm text-blue-600'>
                  Forgot Password?
                </a>
              </div>

              <div className='text-center mt-2'>
                <span className='text-sm'>
                  Don&apos;t have an account?{' '}
                  <Link href='/sign-up' className='text-blue-600'>
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </TabsContent>

          <TabsContent value='studio'>
            <form onSubmit={handleLogin} className='space-y-4'>
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
              {error && <p className='text-red-500 text-sm'>{error}</p>}

              <Button type='submit' className='w-full' disabled={loading}>
                {loading ? 'Logging in...' : `Login as Studio`}
              </Button>

              <Button
                variant='outline'
                className='w-full mt-2'
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </Button>

              <div className='text-center mt-4'>
                <a href='#' className='text-sm text-blue-600'>
                  Forgot Password?
                </a>
              </div>

              <div className='text-center mt-2'>
                <span className='text-sm'>
                  Don&apos;t have an account?{' '}
                  <Link href='/sign-up' className='text-blue-600'>
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
