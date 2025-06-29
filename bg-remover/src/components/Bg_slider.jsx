import React,{ useState } from 'react'

import { assets } from '../assets/assets'

const Bg_slider = () => {

    const [sliderPosition,setSliderPosition] = useState(50)
    const handleSliderChange = (e)=>{
            setSliderPosition(e.target.value)
    }

  return (
    <div>
        {/*--title--*/}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">Remove Background with High <br /> Quality and Accuracy</h1>
      <div>


        {/*background Image*/}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />

        {/* Foreground Image */} 
        <img src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />
      </div>
    </div>
  )
}

export default Bg_slider
