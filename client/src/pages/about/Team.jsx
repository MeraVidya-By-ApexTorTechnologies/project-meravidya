import React from 'react'
import { teamData } from '../../data/about'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div>
        <p className='capitalize font-semibold text-2xl'>our team</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 py-2">
            {
                teamData.teamData.map((item, index)=>(
                    <div key={index}>
                        <TeamCard name={item.name} familyName={item.familyName} title={item.title} org={item.org} gender={item.gender}/>
                        {/* {item.name} */}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team