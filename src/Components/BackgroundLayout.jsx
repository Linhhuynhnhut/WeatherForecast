import { useEffect, useState } from 'react'
import {useStateContext} from '../Context'

import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/Fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/Snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)
  useEffect(() => {
    
    const conditionImageMap = {
      'clear': Clear,
      'cloud': Cloudy,
      'rain': Rainy,
      'shower': Rainy,
      'snow': Snow,
      'fog': Fog,
      'thunder': Stormy,
      'storm': Stormy
    };

    if(weather.conditions) {
      let imageString = weather.conditions.toLowerCase()
      for (const condition in conditionImageMap) {
        if (imageString.includes(condition)) {
          setImage(conditionImageMap[condition]);
          break; // Stop loop once an image is set
        }
      }
      
    }
  }, [weather])
  
  return (
    <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-10' />
  )
}

export default BackgroundLayout