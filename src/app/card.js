'use client';

import { useState } from 'react';
import ModalCard from './modalCard';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import {
  HeartIcon as HeartIconOutline,
  GlobeAmericasIcon,
  ArrowsRightLeftIcon,
  SparklesIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

export default function Card() {
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavortite] = useState(false);

  const totalWeight = 250;
  const rWeight = 100;

  const percentageRemainging = (rWeight / totalWeight) * 100;

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        onClick={handleShowModal}
        className='bg-white border cursor-pointer border-stone-200 rounded-lg shadow-md p-6 max-w-96 relative'
      >
        <div className='flex flex-col space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold'>Brand</h2>
            <p className='text-xl'>Name of coffee</p>
            <p className='text-sm'>Roast Date: 01/01/2024</p>
          </div>

          <div>
            <div className='flex justify-between items-end border-t border-stone-200 pt-4'>
              <h2 className='text-md leading-none'>Beans Remaining</h2>

              <p className='text-xs leading-none'>100g / 250g</p>
            </div>
            <div className='w-full h-3 bg-stone-700 rounded-lg mt-1'>
              {/* Waiting for prop info */}
              <div
                className={`h-3 max-w-full ${
                  percentageRemainging > 50
                    ? 'bg-green-700'
                    : percentageRemainging > 30
                    ? 'bg-yellow-400'
                    : 'bg-red-600'
                } rounded-lg`}
                style={{ width: `${percentageRemainging}%` }}
              ></div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-16 gap-y-6 border-t border-stone-200 pt-4'>
            <div className='space-y-1'>
              <div className='flex items-center gap-1'>
                <GlobeAmericasIcon className='size-5 text-stone-700' />
                <h3 className='font-semibold text-stone-700'>Origin</h3>
              </div>
              <p className='text-stone-600'>Honduras</p>
            </div>

            <div className='space-y-1'>
              <div className='flex items-center gap-1'>
                <ArrowsRightLeftIcon className='size-5 text-stone-700' />
                <h3 className='font-semibold text-stone-700'>Process</h3>
              </div>
              <p className='text-stone-600'>Washed</p>
            </div>

            <div className='space-y-1'>
              <div className='flex items-center gap-1'>
                <SparklesIcon className='size-5 text-stone-700' />
                <h3 className='font-semibold text-stone-700'>Notes</h3>
              </div>
              <ul className='text-stone-600'>
                <li>Fruit</li>
                <li>Dark chocolate</li>
                <li>Cherry</li>
              </ul>
            </div>

            <div className='space-y-1'>
              <div className='flex items-center gap-1'>
                <FireIcon className='size-5 text-stone-700' />
                <h3 className='font-semibold text-stone-700'>Roast Level</h3>
              </div>
              <p className='text-stone-600'>Medium</p>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            setFavortite(!favorite);
            e.stopPropagation();
          }}
          className='absolute top-4 right-4'
        >
          {!favorite ? (
            <HeartIconOutline className='size-6 text-red-500' />
          ) : (
            <HeartIconSolid className='size-6 text-red-500' />
          )}
        </button>
      </div>

      {showModal && (
        <ModalCard setShowModal={setShowModal} showModal={showModal} />
      )}
    </>
  );
}
