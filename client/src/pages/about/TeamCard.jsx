import React from 'react'
import '../../styles/teamCard.css'

const TeamCard = (props) => {

    const imgUrl=`https://avatar.iran.liara.run/public/${props.gender}?username=${props.name}`

    

  return (
    <div className='team-card w-[100%] min-h-[10vh] rounded-md flex flex-col gap-2 justify-center items-center p-4 capitalize' >
        <img src={imgUrl} alt="" className='w-[50%] border-mainGreen border-2 rounded-full p-2'/>
        <p className='color-mainGreen'>{props.name} . {props.familyName}</p>
        <p>{props.title}</p>
        <p className='font-bold'>{props.org}</p>
    </div>
  )
}

export default TeamCard