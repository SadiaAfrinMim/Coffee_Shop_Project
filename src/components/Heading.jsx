import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='text-center py-12'>
      <h2 className='text-2xl font-bold text-center'>{title}</h2>
      <p className='text-xl'>{subtitle}</p>
    </div>
  )
}

export default Heading
