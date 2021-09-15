import React from 'react'
import { RotateCircleLoading } from 'react-loadingg'



const Loader = ({margin}) => {
    return (
        <RotateCircleLoading role='status' style={{margin, display: 'block'}} size='large'>

            <span className='sr-only'>Loading...</span>

        </RotateCircleLoading>
    )
}

export default Loader
