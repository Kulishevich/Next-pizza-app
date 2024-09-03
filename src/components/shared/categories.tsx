'use client'

import { cn } from '@/lib/utils';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

interface Props {
  className?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
// const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const activeIndex = useSelector((state: RootState) => state.category.value)


  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {
            cats.map((cat, index) => (
                <a 
                  key={index} 
                  className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
                  href={`/#${cat}`}
                >
                    <button>{cat}</button>
                </a>
            ))
        }
    </div>
  );
};
