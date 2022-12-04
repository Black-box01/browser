import React from 'react'

function Avatar({url, className}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img loading='lazy' alt='profile image'  src={url} className={`h-10 rounded-full bg-gray-100 p-1 cursor-pointer transition duration-150 transform hover:scale-110 animate-bounce ${className}`}/>
  )
}

export default Avatar