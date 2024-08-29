import React from 'react'
// import { Container } from './container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Container } from './container';
import { User } from 'lucide-react';

interface Props{
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            
            {/* левая часть */}
            <div className='flex items-center gap-4'>
                <Image src='/logo.png' alt='logo' width={35} height={35}/>
                <div>
                    <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                </div>
            </div>

            {/* Правая часть */}
            <div className='flex items-center gap-3'>
                <Button variant='outline' className='flex items-center gap-3'> 
                    <User size={16}/>
                    Войти
                </Button>
            </div>
        </Container>
    </header>
  )
}

// export default header