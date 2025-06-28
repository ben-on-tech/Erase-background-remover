import React from 'react'
import Header from './Header'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">Steps to remove background image in seconds</h1>

      <div>

        <img src={assets.upload_icon} alt="" />
        <div>
            <p>Upload image</p>
            <p>Choose the picture you want to remove the bg</p>
        </div>

      </div>
    </div>
  )
}

export default Steps
