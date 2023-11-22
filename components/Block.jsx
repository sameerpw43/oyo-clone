import React from 'react'
import Image from 'next/image'
const Block = ({title,para,icon: IconComponent }) => {
  return (
    <div className='w-48 border-r-2 border-gray-300 h-full flex items-center px-3'>
     {IconComponent && <IconComponent className='text-2xl mb-2' />}
     <div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-gray-400 text-xs line-clamp-1'>{para}</p>

     </div>
    </div>
  )
}

export default Block
