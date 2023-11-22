import React from 'react'

const Header2 = () => {
    const List = [{
        name:"Banglore"
    },
    {
        name:"Calcutta"
    },
    {
        name:"Mumbai"
    },
    {
        name:"Delhi"
    },
    {
        name:"Hyderabad"
    },
    {
        name:"Noida"
    },
    {
        name:"Pune"
    },
    {
        name:"Chennai"
    },
    {
        name:"Gurgaon"
    },
   
]
  return (
    <div className='flex px-5 bg-gray-200 justify-around'>
      {
        List.map((e) => {
            return (
                <span key={e.name}>{e.name}</span>
            )
        })
      }
    </div>
  )
}

export default Header2
