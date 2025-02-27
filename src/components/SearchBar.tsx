'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';

const SearchPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [isCalendarVisibleMobile, setIsCalendarVisibleMobile] = useState(false);
  const calendarRefMobile = useRef<HTMLDivElement | null>(null);

  const [isCalendarVisibleDesktop, setIsCalendarVisibleDesktop] =
    useState(false);
  const calendarRefDesktop = useRef<HTMLDivElement | null>(null);

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setIsCalendarVisibleMobile(false);
    setIsCalendarVisibleDesktop(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRefMobile.current &&
        !calendarRefMobile.current.contains(event.target as Node)
      ) {
        setIsCalendarVisibleMobile(false);
      }
      if (
        calendarRefDesktop.current &&
        !calendarRefDesktop.current.contains(event.target as Node)
      ) {
        setIsCalendarVisibleDesktop(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <main className='my-8'>
        <div className='mt-8'>
          {/* Mobile View */}
          <div className='block lg:hidden grid gap-4'>
            <div>
              <label
                htmlFor='event'
                className='block text-lg font-semibold mb-2'
              >
                Event
              </label>
              <input
                id='event'
                type='text'
                placeholder='Search for an event'
                className='border-2 p-2 rounded w-full'
              />
            </div>
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label
                  htmlFor='category'
                  className='block text-lg font-semibold mb-2'
                >
                  Category
                </label>
                <select id='category' className='border-2 p-2 rounded w-full'>
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Bollywood</option>
                  <option>Classical</option>
                  <option>Hip-hop</option>
                </select>
              </div>
              <div className='flex-1'>
                <label
                  htmlFor='location'
                  className='block text-lg font-semibold mb-2'
                >
                  Location
                </label>
                <select id='location' className='border-2 p-2 rounded w-full'>
                  <option disabled selected>
                    Select Location
                  </option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor='date'
                className='block text-lg font-semibold mb-2'
              >
                Date
              </label>
              <div className='relative'>
                <button
                  type='button'
                  className='border-2 p-2 rounded-sm w-full transition-shadow duration-300 flex items-center justify-between'
                  aria-haspopup='true'
                  onClick={() =>
                    setIsCalendarVisibleMobile(!isCalendarVisibleMobile)
                  }
                >
                  <span>
                    {selectedDate
                      ? format(selectedDate, 'MMM dd, yyyy')
                      : 'Pick a date'}
                  </span>
                  <CalendarIcon className='ml-2' />
                </button>
                {isCalendarVisibleMobile && (
                  <div
                    ref={calendarRefMobile}
                    className='absolute top-full left-0 mt-2 z-10 bg-white text-black shadow-md p-4 rounded-md'
                  >
                    <Calendar
                      selected={selectedDate}
                      onSelect={handleDateChange}
                      mode='single'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className='hidden lg:grid grid-cols-5 gap-4'>
            <div>
              <label
                htmlFor='event-desktop'
                className='block text-lg font-semibold mb-2'
              >
                Event
              </label>
              <input
                id='event-desktop'
                type='text'
                placeholder='Search for an event'
                className='border-2 p-2 rounded w-full'
              />
            </div>
            <div>
              <label
                htmlFor='category-desktop'
                className='block text-lg font-semibold mb-2'
              >
                Category
              </label>
              <select
                id='category-desktop'
                className='border-2 p-2 rounded w-full'
              >
                <option disabled selected>
                  Select Category
                </option>
                <option>Bollywood</option>
                <option>Classical</option>
                <option>Hip-hop</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='location-desktop'
                className='block text-lg font-semibold mb-2'
              >
                Location
              </label>
              <select
                id='location-desktop'
                className='border-2 p-2 rounded w-full'
              >
                <option disabled selected>
                  Select Location
                </option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='date-desktop'
                className='block text-lg font-semibold mb-2'
              >
                Date
              </label>
              <div className='relative'>
                <button
                  type='button'
                  className='border-2 p-2 rounded-sm w-full transition-shadow duration-300 flex items-center justify-between'
                  aria-haspopup='true'
                  onClick={() =>
                    setIsCalendarVisibleDesktop(!isCalendarVisibleDesktop)
                  }
                >
                  <span>
                    {selectedDate
                      ? format(selectedDate, 'MMM dd, yyyy')
                      : 'Pick a date'}
                  </span>
                  <CalendarIcon className='ml-2' />
                </button>
                {isCalendarVisibleDesktop && (
                  <div
                    ref={calendarRefDesktop}
                    className='absolute top-full left-0 mt-2 z-10 bg-white text-black shadow-md p-4 rounded-md'
                  >
                    <Calendar
                      selected={selectedDate}
                      onSelect={handleDateChange}
                      mode='single'
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='price-desktop'
                className='block text-lg font-semibold mb-2'
              >
                Price Range
              </label>
              <select
                id='price-desktop'
                className='border-2 p-2 rounded w-full'
              >
                <option disabled selected>
                  Select Price Range
                </option>
                <option>$0 - $50</option>
                <option>$50 - $100</option>
                <option>$100+</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
