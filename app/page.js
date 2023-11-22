import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Image from 'next/image'


export default function Home() {
  return (
  <>
  <Header3/>
  <div className='mx-14'>
  <div className='my-14'>
<Image src={'/banner1.avif'} alt='banner1' width={200} height={200} className='h-60 w-full'/>
  </div>
  <div className='mb-14'>
<Image src={'/banner2.avif'} alt='banner2' width={200} height={200} className='h-40 w-full'/>
  </div>
  <Header4/>
  </div>
 
  </>
  )
}
