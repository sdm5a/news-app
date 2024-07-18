import React from 'react'
import loder from './loder.gif'

const Spinner = () => {
    return (
      <div className='text-center justify-content-center my-3'>
        <img src={loder} alt="loding"/>
      </div>
    )
}

export default Spinner;
