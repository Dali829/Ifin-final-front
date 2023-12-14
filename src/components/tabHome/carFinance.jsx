import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";





const CarFinance = () => {
    const navigate = useNavigate();




    return (
        <div className='bg-[#0e5475] h-[60%] m-12 w-full mt-[4%] py-8 rounded-lg px-8'>
            <p className='flex text-2xl mb-2'> <p>Get&nbsp;</p> <p className='text-[#f6921e]'> Car Finance &nbsp;</p> From You Prefered Bank</p>
            <div className='flex mb-4'>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" class="   p-2.5" className='border-r-gray-600 border-1 border h-10 m-auto w-[100%] rounded-l-lg' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" class=" p-2.5 m-auto" className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto" className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto " className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div >
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto" className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="text" name="text" id="topic" class="  p-2.5 m-auto" className='border-r-gray-600 border-1 border h-10 w-[100%]  rounded-r-lg' />
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex'>
                    <input className="largerCheckbox mr-2" name="newsletter" type="checkbox" />
                    <p className='mt-1'> I found a car to buy</p> </div>
                    <Link to='/search' state={{ from: 1 }}>  
                <button   className='flex justify-center'>
                    <div className='bg-[#f6921e] text-white py-2   px-16 rounded-md  w-min'>
                        <div className='w-full flex justify-center'>
                            <p className=' text-[#0e5475]'>Get&nbsp;Offers</p></div>
                    </div>
                </button>
                </Link>
            </div>

        </div>
    )
}

export default CarFinance