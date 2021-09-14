import React from 'react'
import { RotateCircleLoading } from 'react-loadingg'



const Loader = () => {
    return (
        <RotateCircleLoading    role='status' style={{margin: '200px auto', display: 'block'}} size='large'>

            <span className='sr-only'>Loading...</span>

        </RotateCircleLoading>
    )
}

export default Loader
