import { useState } from 'react';
import {
  CalendarDaysIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InformationCard from './informationCard';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(
  'https://dxzxhtdzlofeenrkwhgn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4enhodGR6bG9mZWVucmt3aGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMzM3NDUsImV4cCI6MjA0OTgwOTc0NX0.C3che1kDUx3Nj7kgcb8EZCpFf6L4oNXkXPdr9GPaHtw'
);

export default function AddNewCoffee({ setAddNew }) {
  const [beanData, setBeanData] = useState({
    brand: '',
    name: '',
    date: null,
    totalWeight: 0,
    origin: '',
    process: '',
    flavorNotes: [],
    roast: '',
    grind: 0,
    brew: '',
    personalNotes: '',
  });

  const [showInforamtion, setShowInformation] = useState(false);

  const handleBeanData = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setBeanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateData = (date) => {
    setBeanData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleAddBean = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('coffee_beans').insert([
      {
        brand: 'Aldea',
      },
    ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  return (
    <div
      onClick={() => {
        setAddNew(false);
        console.log('enter key here');
      }}
      className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end cursor-pointer'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white border border-stone-200 rounded-lg shadow-md p-6 w-[40rem] h-full cursor-default'
      >
        <form
          onSubmit={handleAddBean}
          className='border-2 border-stone-200 rounded-md px-6 py-4 grid grid-cols-2 gap-8 h-full'
        >
          <div className='flex flex-col gap-1'>
            <label htmlFor='brand'>Brand</label>
            <input
              id='brand'
              value={beanData.brand}
              onChange={handleBeanData}
              name='brand'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600 '
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              value={beanData.name}
              onChange={handleBeanData}
              id='name'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='date'>Roast Date</label>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              id='date'
              selected={beanData.date}
              onChange={handleDateData}
              icon={<CalendarDaysIcon className='text-stone-600' />}
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600 w-full'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='total_weight'>
              Total Weight <span className='text-sm'>(grams)</span>
            </label>
            <input
              name='totalWeight'
              value={beanData.totalWeight}
              onChange={handleBeanData}
              id='total_weight'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='col-span-2 border-t-2 mt-1'></div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='origin'>Origin</label>
            <input
              name='origin'
              value={beanData.origin}
              onChange={handleBeanData}
              id='origin'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='process'>Process</label>
            <input
              name='process'
              value={beanData.process}
              onChange={handleBeanData}
              id='process'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex  gap-1 items-center'>
              <label htmlFor='flavor_notes'>Flavor Notes</label>
              {/* <span>
                <InformationCircleIcon
                  className='size-4 cursor-pointer'
                  onClick={() => setShowInformation(!showInforamtion)}
                  // onMouseLeave={() => setShowInformation(false)}
                />
                <div className='fixed'>
                  {showInforamtion && (
                    <InformationCard
                      information={
                        'Separate the notes using a comma (e.g. Fuity, Milk Chocolate, Nutty)'
                      }
                    />
                  )}
                </div>
              </span> */}
            </div>

            <input
              name='flavorNotes'
              value={beanData.flavorNotes}
              onChange={handleBeanData}
              id='flavor_notes'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='roast'>Roast level</label>
            <input
              name='roast'
              value={beanData.roast}
              onChange={handleBeanData}
              id='roast'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='col-span-2 border-t-2 mt-1'></div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='grind'>Grind Setting</label>
            <input
              name='grind'
              value={beanData.grind}
              onChange={handleBeanData}
              id='grind'
              type='number'
              min='0'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='brew_method'>Brew Method</label>
            <input
              name='brew'
              value={beanData.brew}
              onChange={handleBeanData}
              id='brew_method'
              type='text'
              className='bg-stone-200 rounded-md h-8 px-2 text-stone-600'
            />
          </div>

          <div className='flex flex-col gap-1 col-span-2'>
            <label htmlFor='personal_notes'>Personal Notes</label>
            <textarea
              name='personalNotes'
              value={beanData.personalNotes}
              onChange={handleBeanData}
              id='personal_notes'
              type='text'
              rows={12}
              className='bg-stone-200 rounded-md h-8 px-2 py-1 text-stone-600 leading-relaxed min-h-20 resize-none'
            />
          </div>

          <div className='flex justify-between col-span-2'>
            <input
              type='button'
              value='Cancel'
              onClick={() => setAddNew(false)}
              className='px-2 py-1 rounded-lg bg-red-500 text-stone-800 w-24 text-lg shadow-sm hover:shadow-none hover:bg-red-600 transition-all'
            />

            <input
              type='submit'
              value='Add'
              className='px-2 py-1 rounded-lg bg-green-500 text-stone-800 w-24 text-lg shadow-sm hover:shadow-none hover:bg-green-600 transition-all'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
