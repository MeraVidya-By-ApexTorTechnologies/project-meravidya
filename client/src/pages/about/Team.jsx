import React from 'react'
import { teamData } from '../../data/about'
import TeamCard from './TeamCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../styles/team.css'

const Team = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            // till 1024px
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            // till 600px
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            // till 480px
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div>
        <p className='capitalize font-semibold text-2xl'>our team</p>
        <div className="py-4">
            <Slider {...settings} className='w-[100%]'>

            {
                teamData.teamData.map((item, index)=>(
                    <div key={index}>
                        <TeamCard name={item.name} familyName={item.familyName} title={item.title} org={item.org} gender={item.gender}/>
                        {/* {item.name} */}
                    </div>
                ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Team



