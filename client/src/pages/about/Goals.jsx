import React from 'react'
import { goalsData } from '../../data/about'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Goals = () => {
  return (
    <div className='py-4'>
        <p className='capitalize font-semibold text-2xl'>goals</p>
        {
            goalsData.map((item, index)=>(
                <div key={index} className="italic p-2 my-1 ">
                   <FontAwesomeIcon icon={faArrowRight} className='color-mainGreen'/> {item}
                </div>
            ))
        }
    </div>
  )
}

export default Goals