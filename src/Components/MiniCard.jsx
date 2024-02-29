import { useEffect, useState } from 'react'
import overcast from '../assets/icons/overcast.png'
import clear from '../assets/icons/clear.png'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import PropTypes from 'prop-types'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    const conditionIconMap = {
      'overcast': overcast,
      'clear': clear,
      'sun': sun,
      'cloud': cloud,
      'fog': fog,
      'rain': rain,
      'snow': snow,
      'storm': storm,
      'wind': wind,
    };
    if(iconString) {
        let icon = iconString.toLowerCase()
        for (const condition in conditionIconMap) {
          if (icon.includes(condition)) {
            setIcon(conditionIconMap[condition]);
            break; // Stop loop once an image is set
          }
        }
        
      }
  }, [iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

MiniCard.propTypes = {
  temp: PropTypes.number, 
  time: PropTypes.number,
  iconString: PropTypes.string,
}


export default MiniCard