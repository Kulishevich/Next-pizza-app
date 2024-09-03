'use client'

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import { Title } from './title';
import { ProductCart } from './product-cart';
import { useIntersection } from 'react-use';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store';
import { setCategory } from '@/redux/slices/categoriesSlice';

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({ 
    title,
    items,
    categoryId,
    className,
    listClassName 
}) => {
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    const category = useSelector((state: RootState ) => state.category.value) 
    const dispatch = useDispatch()

    useEffect(() => {
        if(intersection?.isIntersecting){
            console.log(title, categoryId)
            console.log("redux value:", category)
            dispatch(setCategory(categoryId))
        }
    }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
        <Title text={title} size='lg' className='font-extrabold mb-5'/>

        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {items
                .map((product, index) => (
                    <ProductCart
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))
            }
        </div>
    </div>
  );
};