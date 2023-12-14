import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';




const Housing = () => {
    const navigate = useNavigate();



   
    return (
        <div className='bg-[#0e5475] h-[60%] m-12 w-full mt-[4%] py-8 rounded-lg px-8'>
            <p className='flex text-2xl mb-2'> <p>Get&nbsp;</p> <p className='text-[#f6921e]'> Houssing Finance &nbsp;</p> From You Prefered Bank</p>
            <div className='flex mb-4 gap-2'>
               
               
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto" className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan term</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto " className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div >
                <button onClick={()=>navigate('/search')} className='bg-[#f6921e] flex justify-center text-white h-min mt-5 p-2.5   w-full rounded-md  '>
                        
                            <p className=' text-white'>Get&nbsp;Offers</p>
                    </button>
            </div>

           

        </div>
    )
}

export default Housing