'use client'

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ 
    title,
    items,
    defaultItems,
    limit =  5,
    searchInputPlaceholder = 'Поиск...',
    onChange,
    defaultValue,
    className,
 }) => {
    const [showAll, setShowAll] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState('')

    const list = showAll 
    ? items.filter(elem => elem.text.toLowerCase().includes(searchValue.toLowerCase())) 
    : defaultItems?.slice(0, limit)

    const onChangeSearchInput = (value: string) => {
        setSearchValue(value)
    }

  return <div className={cn('', className)}>
    <p className='font-bild mb-3'>{title}</p>

    {
        showAll 
        && (
        <div className='mb-5'>
            <Input 
                onChange={e => onChangeSearchInput(e.target.value)}
                placeholder={searchInputPlaceholder} 
                className='bg-gray-50 border-none'/>
        </div>) 
    }


    <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
            <FilterCheckbox
                key={index}
                text={item.text}
                value={item.value}
                endAbornment={item.endAbornment}
                checked={false}
                onCheckedChange={(ids) => console.log(ids)}
            />
        ))}
    </div>

    {
        items.length > limit && (
            <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                <button onClick={() => setShowAll(prev => !prev)} className='text-primary mt-3'>
                    {showAll ? 'Скрыть' : '+Показать всё'}
                </button>
            </div>
        )
    }
  </div>;
};

