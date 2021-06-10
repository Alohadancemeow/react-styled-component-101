import React from 'react'
import { InfoSection } from '../../components';
import { homeObjOne, homeObjFour } from './Data';

const Products = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Products
