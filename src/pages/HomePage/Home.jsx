import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
import { InfoSection, Pricing } from '../../components'

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default Home
