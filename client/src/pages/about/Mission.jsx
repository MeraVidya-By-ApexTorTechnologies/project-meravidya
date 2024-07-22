import React from 'react'
import { MissionImg } from '../../assets/images/aboutImages'

const Mission = () => {
  return (
    <div>
      <p className="font-semibold text-2xl capitalize">our mission</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 py-4 text-center">
          <p className="text-2xl capitalize">empowering learners worldwide</p>
          <p >We're devoted to reshaping learning, blending online and offline courses to provide practical knowledge accessible from childhood to adulthood.</p>
        </div>
        <div className="flex justify-center">
        <img src={MissionImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mission