import { useEffect, useState } from 'react'
import { useDate } from '../utils/useDate'
import overcast from '../assets/icons/overcast.png'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'
import PropTypes from 'prop-types'

const WeatherCard = ({
  temperature, 
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const {time} = useDate()

  useEffect(() => {
    const conditionIconMap = {
      'overcast': overcast,
      'clear': sun,
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
      console.log('icon>>>> ', icon)
        for (const condition in conditionIconMap) {
          if (icon.includes(condition)) {
            console.log('condition>>>> ', conditionIconMap[condition])
            setIcon(conditionIconMap[condition]);
            break; // Stop loop once an image is set
          }
        }
    }
  }, [iconString])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='font-bold text-center text-3xl mt-2'>
        {place}
      </div>
      <div className='flex w-full justify-center items-center gap-4 mt-6 mb-4'>
        <img src={icon} alt='weather_icon' className='w-[5rem] h-[5rem]'/>
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;C</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  temperature: PropTypes.number, 
  windspeed: PropTypes.number,
  humidity: PropTypes.number,
  place: PropTypes.string,
  heatIndex: PropTypes.number,
  iconString: PropTypes.string,
  conditions: PropTypes.string,
}

export default WeatherCard