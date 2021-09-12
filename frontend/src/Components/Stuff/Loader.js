import React from 'react'
import { CircleToBlockLoading   } from 'react-loadingg'



const Loader = () => {
    return (
        <CircleToBlockLoading   role='status' style={{margin: '200px auto', display: 'block'}} size='large'>

            <span className='sr-only'>Loading...</span>

        </CircleToBlockLoading>
    )
}

export default Loader
