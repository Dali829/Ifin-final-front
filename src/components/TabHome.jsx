import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidBuildingHouse } from 'react-icons/bi'
import Photo1 from '../assets/dhia/assortiment-elements-commerciaux-vue-face.jpg'
import CarFinance from './tabHome/carFinance'
import CustomerFinance from './tabHome/customerFinance'
import Housing from './tabHome/Housing'



const TabHome = () => {
  const [indexTab, setIndexTab] = useState(1);
  const Data = [
    {
      index: 1,
      name: "Customer Finance ",
      icon: <BiSolidBuildingHouse size={22} />,
      link: '#'

    },
    {
      index: 2,
      name: "Houssing",
      icon: <AiFillHome size={22} />,
      link: '#'
    },
    {
      index: 3,
      name: "Car Finance",
      icon: <BiSolidBuildingHouse size={22} />,
      link: '#'
    }
  ]


  return (
    <div className='w-full bg-white  text-sm'>
      <div className='grid md:grid-cols-7 ml-12'>
        {
          Data.map(item =>

            <div onClick={() => setIndexTab(item.index)} style={item.index === indexTab ? { background: '#f6921e' } : { background: '#0e5475' }}
              id={item.index} className=' text-white  p-2 rounded-t-lg flex mr-2 cursor-pointer '>
              <div className='w-full'>  <div className='flex justify-center'>  {item.icon}
                <p className='ml-2 mt-1'>{item.name}</p></div></div>
            </div>)

        }
        <a href='/credit-card' onClick={() => setIndexTab(4)} style={4 === indexTab ? { background: '#f6921e' } : { background: '#0e5475' }}
              id={4} className=' text-white  p-2 rounded-t-lg flex mr-2 cursor-pointer '>
              <div className='w-full'>  <div className='flex justify-center'>  <BiSolidBuildingHouse size={22} />
                <p className='ml-2 mt-1'>Credit Cards</p></div></div>
            </a>
        <a href='/sme' id='5' onClick={() => setIndexTab(5)} style={5 === indexTab ? { background: '#f6921e' } : { background: '#0e5475' }}
          className=' text-white  p-2 rounded-t-lg flex '>
          <div className='w-full'>
            <p className='ml-2 mt-1 flex justify-center cursor-pointer '>SME</p></div>
        </a>
      </div>
      <div className='w-[100%]  text-white flex justify-center ' style={{ backgroundImage: `url(${Photo1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        {
          (indexTab == 1) &&
          <CustomerFinance />
        }
        {
          (indexTab == 2) &&
          <Housing />
        }
        {
          (indexTab == 3) &&
          <CarFinance />
        }
         

      </div>
    </div>
  )
}

export default TabHome