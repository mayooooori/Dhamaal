import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Login() {
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
        <div>
          <h1 className='text-center m-5 font-5xl'>LogIn</h1>
        </div>
        <Tabs defaultValue='login' className='w-full'>
          <TabsList className='grid w-full grid-cols-3 mb-4'>
            <TabsTrigger value='login'>Student</TabsTrigger>
            <TabsTrigger value='register'>Artist</TabsTrigger>
            <TabsTrigger value='forgot'>Studio</TabsTrigger>
          </TabsList>

          <TabsContent value='login'>
            <form className='space-y-4'>
              <Input type='email' placeholder='Email' required />
              <Input type='password' placeholder='Password' required />
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='w-full mt-2'>
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
                  <a href='#' className='text-blue-600'>
                    Sign Up
                  </a>
                </span>
              </div>
            </form>
          </TabsContent>

          <TabsContent value='register'>
            <form className='space-y-4'>
              <Input type='email' placeholder='Email' required />
              <Input type='password' placeholder='Password' required />
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='w-full mt-2'>
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
                  <a href='/sign-up' className='text-blue-600'>
                    Sign Up
                  </a>
                </span>
              </div>
            </form>
          </TabsContent>

          <TabsContent value='forgot'>
            <form className='space-y-4'>
              <Input type='email' placeholder='Email' required />
              <Input type='password' placeholder='Password' required />
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='w-full mt-2'>
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
                  <a href='/sign-up' className='text-blue-600'>
                    Sign Up
                  </a>
                </span>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
