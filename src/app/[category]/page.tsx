'use client'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { usePathname } from 'next/navigation'
export default function page() {
    const pathname = usePathname()
    return (
        <section className='main-container'>
            <Wrapper title={pathname} />
        </section>
    )
}

