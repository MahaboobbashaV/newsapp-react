import React from 'react'
import loading from './Iphone-spinner-2.gif'

const Loader = () => {  
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Loader