'use client'
import Image from 'next/image'

const Header4 = () => {
  return (
    <div className='flex my-14 border-2 rounded-lg border-gray-300 px-5'>
<div className='flex items-center'>
<Image src="/fire.jpg" alt="fire" width={200} height={200} className="w-32 h-32 rounded-full "/>
<div className='text-xl'><p className='font-bold'>Get access to exclusive deals</p>
<p>Only the best deals reach your inbox</p>
</div>
</div>
<div className='flex items-center mx-5'>
<input type='email' className='px-6 mx-8 py-3 w-80 h-16 mr-5 outline-none border border-gray-200 rounded-lg' placeholder='e.g. john@gmail.com'/>
<button type='submit' className='w-32 h-14 bg-red-500 text-xl text-white rounded-lg cursor-pointer'>Notify</button>
</div>
    </div>
  )
}

export default Header4
