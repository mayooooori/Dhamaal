'use client'
import React, { useState, useRef, useEffect } from 'react';
import { CalendarIcon } from "lucide-react"; // Importing icon for calendar button
import { Calendar } from './ui/calendar'; // Importing ShadCN's Calendar component
import { format } from 'date-fns'; // Importing format from date-fns

const SearchPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  // Reference for the calendar to detect clicks outside of it
  const calendarRef = useRef<HTMLDivElement | null>(null);

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsCalendarVisible(false); // Close the calendar once a date is selected
  };

  // Close calendar if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <main className="my-8">
        <div className="mt-8">
          {/* Mobile View */}
          <div className="block lg:hidden grid gap-4">
            <div>
              <label htmlFor="event" className="block text-lg font-semibold mb-2">
                Event
              </label>
              <input
                id="event"
                type="text"
                placeholder="Search for an event"
                className="border-2 p-2 rounded w-full"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="category" className="block text-lg font-semibold mb-2">
                  Category
                </label>
                <select id="category" className="border-2 p-2 rounded w-full">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Bollywood</option>
                  <option>Classical</option>
                  <option>Hip-hop</option>
                  {/* Add more options */}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="location" className="block text-lg font-semibold mb-2">
                  Location
                </label>
                <select id="location" className="border-2 p-2 rounded w-full">
                  <option disabled selected>
                    Select Location
                  </option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  {/* Add more options */}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-lg font-semibold mb-2">
                Date
              </label>
              {/* ShadCN Calendar Component */}
              <div className="relative">
                <button
                  type="button"
                  className="border-2 p-2 rounded-sm w-full transition-shadow duration-300 flex items-center justify-between"
                  aria-haspopup="true"
                  onClick={() => setIsCalendarVisible(!isCalendarVisible)} // Toggle calendar visibility
                >
                  <span>{selectedDate ? format(selectedDate, 'MMM dd, yyyy') : "Pick a date"}</span>
                  <CalendarIcon className="ml-2" />
                </button>
                {isCalendarVisible && (
                  <div ref={calendarRef} className="absolute top-full left-0 mt-2 z-10">
                    <Calendar
                      selected={selectedDate}
                      onSelect={handleDateChange}
                      mode="single"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="event" className="block text-lg font-semibold mb-2">
                Event
              </label>
              <input
                id="event"
                type="text"
                placeholder="Search for an event"
                className="border-2 p-2 rounded w-full"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-lg font-semibold mb-2">
                Category
              </label>
              <select id="category" className="border-2 p-2 rounded w-full">
                <option>Bollywood</option>
                {/* Add more options */}
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-lg font-semibold mb-2">
                Location
              </label>
              <select id="location" className="border-2 p-2 rounded w-full">
                <option>Location</option>
                {/* Add more options */}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-lg font-semibold mb-2">
                Date
              </label>
              {/* ShadCN Calendar Component */}
              <div className="relative">
                <button
                  type="button"
                  className="border-2 p-2 rounded-sm w-full transition-shadow duration-300 flex items-center justify-between"
                  aria-haspopup="true"
                  onClick={() => setIsCalendarVisible(!isCalendarVisible)} // Toggle calendar visibility
                >
                  <span>{selectedDate ? format(selectedDate, 'MMM dd, yyyy') : "Pick a date"}</span>
                  <CalendarIcon className="ml-2" />
                </button>
                {isCalendarVisible && (
                  <div ref={calendarRef} className="absolute top-full left-0 mt-2 z-10">
                    <Calendar
                      selected={selectedDate}
                      onSelect={handleDateChange}
                      mode="single"
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="price" className="block text-lg font-semibold mb-2">
                Price Range
              </label>
              <select id="price" className="border-2 p-2 rounded w-full">
                <option>All</option>
                {/* Add more options */}
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
