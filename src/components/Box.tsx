import React from 'react'

export default function Box({ children }: { children: React.ReactNode }) {
    return (
        <div className='box'>
            {children && children}
        </div>
    )
}
