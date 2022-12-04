import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function PaginationButtons() {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

  return (
    <div className='flex justify-between max-w-lg text-orange-500 mb-10'>

        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline hover:font-bold'>
                    <ChevronLeftIcon className='h-5' />
                    <p>Previous</p>
                </div>
            </Link>
        )}

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline hover:font-bold'>
            <ChevronRightIcon className='h-5' />
            <p>Next</p>
            </div>
        </Link>
    
    </div>
  )
}

export default PaginationButtons