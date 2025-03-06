'use client';

import { useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  Calendar,
  CreditCard,
  Percent,
  User,
  LogOut,
  ChevronDown,
  ChevronRight,
  Plus,
  Star,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Sidebar = ({ role }: { role: 'artist' | 'studio' | 'student' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = {
    artist: [
      { icon: <Home />, label: 'Home' },
      {
        icon: <Calendar />,
        label: 'Events',
        isDropdown: true,
        isOpen: isEventsOpen,
        subItems: [
          { icon: <Plus />, label: 'Add New Event' },
          { icon: <Calendar />, label: 'All Events' },
          { icon: <CreditCard />, label: 'Payouts' },
        ],
      },
      { icon: <Percent />, label: 'Promo Codes' },
    ],
    studio: [
      { icon: <Home />, label: 'Home' },
      {
        icon: <Calendar />,
        label: 'Events',
        isDropdown: true,
        isOpen: isEventsOpen,
        subItems: [
          { icon: <Plus />, label: 'Add New Event' },
          { icon: <Plus />, label: 'Add Bundle' },
          { icon: <Calendar />, label: 'All Events' },
          { icon: <CreditCard />, label: 'Payouts' },
        ],
      },
      { icon: <Percent />, label: 'Promo Codes' },
    ],
    student: [
      { icon: <Home />, label: 'Home' },
      { icon: <Star />, label: 'Dhamaal Points' },
    ],
  };

  return (
    <div
      className={cn(
        'h-screen bg-white border-r shadow-md flex flex-col justify-between',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo and Collapse Button */}
      <div className='flex items-center justify-between p-4'>
        {!isCollapsed && (
          <Image
            src='/logo.png'
            alt='Logo'
            width={90}
            height={36}
            className='rounded-md'
          />
        )}
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      {/* Sidebar Links */}
      <nav className='flex flex-col gap-2 p-4 flex-grow'>
        {menuItems[role].map((item, index) => (
          <div key={index}>
            <SidebarItem
              icon={item.icon}
              label={item.label}
              collapsed={isCollapsed}
              onClick={
                item.isDropdown
                  ? () => setIsEventsOpen(!isEventsOpen)
                  : undefined
              }
              isDropdown={item.isDropdown}
              isOpen={item.isOpen}
              small={undefined}
            />
            {item.isDropdown && item.isOpen && !isCollapsed && (
              <div className='pl-8 flex flex-col gap-1'>
                {item.subItems?.map((subItem, subIndex) => (
                  <SidebarItem
                    key={subIndex}
                    icon={subItem.icon}
                    label={subItem.label}
                    collapsed={isCollapsed}
                    small
                    onClick={undefined}
                    isDropdown={undefined}
                    isOpen={undefined}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Profile & Logout */}
      <div className='p-4 flex flex-col gap-2'>
        <SidebarItem
          icon={<User />}
          label='Profile'
          collapsed={isCollapsed}
          onClick={undefined}
          isDropdown={undefined}
          isOpen={undefined}
          small={undefined}
        />
        <SidebarItem
          icon={<LogOut />}
          label='Logout'
          collapsed={isCollapsed}
          onClick={handleLogout}
          isDropdown={undefined}
          isOpen={undefined}
          small={undefined}
        />
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  collapsed,
  onClick,
  isDropdown,
  isOpen,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition',
        small && 'text-sm pl-4',
        isDropdown && 'justify-between'
      )}
    >
      <div className='flex items-center gap-2'>
        {icon}
        {!collapsed && <span>{label}</span>}
      </div>
      {isDropdown &&
        !collapsed &&
        (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
    </button>
  );
};

export default Sidebar;
