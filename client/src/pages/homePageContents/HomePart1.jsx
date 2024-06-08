import React from 'react'
import { Link } from 'react-router-dom'

const HomePart1 = () => {
  return (
    <div className=' w-screen p-6 lg:p-16 grid gap-8 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
    <div className="part-1 flex justify-center items-center capitalize font-semibold text-3xl">connect with top nearby tutors</div>
    <div className="part-2 flex gap-4 px-4 flex-col justify-center items-center">
        <p className='italic capitalize'>Get Personalized Tutoring for All Subjects</p>
        <p style={{textAlign: "justify", }}>At MeraVidya, we link students with skilled tutors spanning diverse subjects like singing, dance, sports, and academics, ensuring holistic educational support for all.</p>
        <button className="button">
            <Link to='/about'>
            read more
            </Link>
        </button>
    </div>
    </div>
  )
}

export default HomePart1