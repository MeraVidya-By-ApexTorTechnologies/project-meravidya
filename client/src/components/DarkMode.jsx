import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faSkull, faSun } from '@fortawesome/free-solid-svg-icons';
const DarkMode = () => {

    const [mode, setMode] = useState(faSun);

    const toggleMode=(mode)=>{
        if(mode==faSun){
            setMode(faSkull)
        }
        else{
            setMode(faSun)
        }
    }

  return (
    <div>
    <FontAwesomeIcon className=' bg-black p-2 color-mainGreen rounded-lg' icon={mode} onClick={()=>toggleMode(mode)}/>
    {/* <FontAwesomeIcon className=' text-black' icon={faSun}/> */}
    </div>
  )
}

export default DarkMode