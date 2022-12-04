import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {

    const searchInputRef = useRef(null);
    const router = useRouter()

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if (term === '') {
          alert('Type In a Search Request!')
        }
    
        if (!term) return;
    
        router.push(`/search?term=${term}`);
    
      };

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
            <Image width={60} height={60} src='/black-box.gif' alt='logo' className='cursor-pointer'
            onClick={() => router.push('/')} />

            <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow'>
                <input ref={searchInputRef} className='w-full focus:outline-none flex-grow' type='text' defaultValue={router.query.term} />
                <XMarkIcon className='h-7 sm:mr-3 pr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={() => (searchInputRef.current.value = '')}/>
                <MagnifyingGlassIcon className='mr-3 h-6 text-orange-600 border-l-2 pl-4 border-gray-300 cursor-pointer transition duration-100 transform hover:scale-125' onClick={search} />
                <button hidden onClick={search} type='submit'>search</button>
            </form>
            <Avatar url='/avatar.jpg' className="md:ml-auto lg:ml-auto"/>
        </div>

        <HeaderOptions />
    </header>
  )
}

export default Header