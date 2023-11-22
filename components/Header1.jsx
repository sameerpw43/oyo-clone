import Image from 'next/image'
import React from 'react'
import Block from './Block'
import { FaUser, FaBuilding, FaHome, FaPhone } from 'react-icons/fa';
import { LuLogIn } from "react-icons/lu";
const Header1 = () => {
  return (
    <div className='flex justify-between items-center border-b-2 border-gray-200 h-24 px-10'>
      <Image src={'/logo.png'} alt='oyo' width={200} height={200} className='w-28 h-28'/>
    <div className=' h-full flex'>
    <Block title={'Become a member'} para={'Additional 10% off on stays.'} icon={FaUser} />
        <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} icon={FaBuilding} />
        <Block title={'List your property'} para={'Start earning in 30 min.'} icon={FaHome} />
        <Block title={'+123456987'} para={'Call us to book now.'} icon={FaPhone} />
        <div className='flex items-center px-3'>
        <LuLogIn className='text-2xl mb-1' />
        <h3 className='font-bold'>Login / SignUp</h3>
        </div>
    </div> 
    </div>
  )
}

export default Header1
