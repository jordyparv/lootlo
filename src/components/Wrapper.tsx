import React from 'react'
import Box from './Box'
import Card from './Card'

export default function Wrapper({ title = 'JOrdan', is18 = false }) {
    return (
        <div className='px-6'>
            <div className='flex justify-between mb-6 items-center'>
                <h1 id="RecentlyAdded" className='py-2 px-2 text-4xl mt-10 uppercase'>{title}</h1>
                <a href='/movies' className='flex gap-2 items-center'>
                    More <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
            <Box>
                <Card is18={is18} />
                <Card is18={is18} />
                <Card is18={is18} />
                <Card is18={is18} />
                <Card is18={is18} />
                <Card is18={is18} />
            </Box>
        </div>
    )
}
