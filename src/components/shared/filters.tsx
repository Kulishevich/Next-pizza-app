'use client'

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-groups';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selecredIngredients } = useFilterIngredients();
    
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));
    const [ prices, setPrice] = useState<PriceProps>({priceFrom: 0, priceTo: 1000})
    
    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name
    }))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,  
            [name]: value,
        })
    }

    useEffect(() => {
        console.log({prices, sizes, pizzaTypes, selecredIngredients})
    }, [prices, sizes, pizzaTypes, selecredIngredients])

    return (
    <div className={className}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>
            {/* Верхние чекбоксы */}
            
            {/* Фильтрация по тесту */}
            <CheckboxFiltersGroup
                title='Тип теста'
                name='pizzaType'
                className='mb-5'
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />
            {/* Фильтрация по размеру */}
            <CheckboxFiltersGroup
                name='sizes'
                className='mb-5'
                title='Размеры'
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            {/* Фильтр по цене */}
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className='flex gap-3 mb-5'>
                <Input 
                    type='number' 
                    placeholder='0' 
                    min={0} 
                    max={1000} 
                    value={String(prices.priceFrom)} 
                    onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} 
                />
                <Input 
                    type='number' 
                    min={100}
                     max={30000} 
                    placeholder='1000' 
                    value={String(prices.priceTo)} 
                    onChange={(e) => updatePrice('priceTo', Number(e.target.value))} 
                />
            </div>

            <RangeSlider 
                min={0} 
                max={1000} 
                step={10} 
                value={[prices.priceFrom, prices.priceTo]}
                onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
            />
        </div>

        <CheckboxFiltersGroup
            title='Ингридиенты'
            name='ingredients'
            className='mt-5'
            limit={6}
            defaultItems={items.slice(0, 6)}
            items={items}
            loading={loading}
            onClickCheckbox={onAddId}
            selected={selecredIngredients}
        />


    </div>
  );
}