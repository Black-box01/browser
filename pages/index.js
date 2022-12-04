import Head from 'next/head'
import Avatar from '../components/Avatar'
import {Squares2X2Icon} from '@heroicons/react/24/solid'
import {MagnifyingGlassIcon, CheckIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from '../components/footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter()

  const searchInputRef = useRef(null);

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
    <div className='flex flex-col justify-center items-center h-screen'>
      <Head>
        <title>BB-Browser</title>
        <link rel='icon' href='/black-box.gif' />
      </Head>

          <header className='flex m-4 font-bold w-full justify-between text-gray-700'>
            <div className='flex space-x-4 items-center ml-4'>
              <p className='link'>About</p>
              <p className='link'>Store</p>
            </div>

            <div className='flex space-x-4 items-center pr-8'>
              <p className='link'>Gmail</p>
              <p className='link'>Images</p>
              <Squares2X2Icon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
              <Avatar url='/avatar.jpg'/>
            </div>
          </header>

          <form className='flex flex-col items-center mt-14 flex-grow w-4/5'>
            <Image 
              src='/black-box.gif'
              width={160}
              height={150}
              alt='BlackBox'
            />

            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl'>
              <MagnifyingGlassIcon className='h-6 w-6 text-gray-500 mr-3' />
              <input ref={searchInputRef} type='text' className='focus:outline-none flex-grow' />
              <CheckIcon className='h-6 cursor-pointer hover:text-orange-600 hover:w-8' onClick={search} />
            </div>

            <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 '>
              <button onClick={search} className='btn'>Google Search</button>
              <button onClick={search} className='btn'>I`m Feeling Lucky</button>   
            </div>
          </form>

          <Footer />


    </div>
  )
}
