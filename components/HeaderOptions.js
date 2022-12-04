import React from 'react'
import HeaderOption from './HeaderOption'
import {
    EllipsisVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotoIcon,
    PlayIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
        <div className='flex space-x-6'>
            <HeaderOption Icon={MagnifyingGlassIcon} title='All' selected />
            <HeaderOption Icon={PhotoIcon} title='Images' />
            <HeaderOption Icon={PlayIcon} title='Videos' />
            <HeaderOption Icon={NewspaperIcon} title='News' />
            <HeaderOption Icon={MapIcon} title='Maps' />
            <HeaderOption Icon={EllipsisVerticalIcon} title='More' />
        </div>
        <div className='flex space-x-4'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions