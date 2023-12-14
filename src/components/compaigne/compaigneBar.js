import React, { useState } from 'react'
import {FaNewspaper} from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import {BiSolidTimeFive} from 'react-icons/bi'





const CompaigneBar = () => {
    const [indexTab, setIndexTab] = useState(1);

    const Data = [
        {
            index: 1,
            name: "All Credit Cards",
            icon: <FaNewspaper size={25} className='mr-2 text-[#f6921e]' />,
            link: '#'

        },
        {
            index: 2,
            name: "Miles",
            icon: <BiSolidTimeFive size={25} className='mr-2 text-[#f6921e]' />,
            link: '#'
        }
    ]


    return (
        <div className='bg-[#0e5475] h-[60%]  w-full mt-[4%] py-8 px-[17%]'>
            <p className='flex text-2xl mb-2 text-white'>Compaignes</p>
            <div className='grid grid-cols-3 mb-4 gap-3'>

                {
                    Data.map(item =>
                        <div onClick={() => setIndexTab(item.index)} style={item.index === indexTab ? { border: '2px solid #f6921e' } : { border: '' }} className='w-full bg-white p-3 flex justify-between'>
                            <div className='flex'>  {item.icon}
                                <p className='text-[#0e5475]'>{item.name}</p>
                            </div>
                            <IoIosArrowForward    style={item.index === indexTab ?  { visibility: 'visible' } : { visibility: 'hidden' } }  size={25} className='text-[#f6921e]' />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default CompaigneBar