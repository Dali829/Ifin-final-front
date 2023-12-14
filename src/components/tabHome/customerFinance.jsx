import React, { useState } from 'react'
import { useNavigate,Link} from 'react-router-dom';





const CustomerFinance = () => {
    const navigate = useNavigate();

const[loan,setLoan]=useState();
  


    return (
        <div className='bg-[#0e5475] h-[60%] m-12 w-full mt-[4%] py-8 rounded-lg px-8'>
            <p className='flex text-2xl mb-2'> <p>Get&nbsp;</p> <p className='text-[#f6921e]'> Customer Finance &nbsp;</p> From You Prefered Bank</p>
            <div className='flex mb-4 gap-2'>
               
               
                <div className='w-full'><label class="block  text-sm  text-white ">Loan Amount</label>
                    <input type="number" onChange={(e)=>setLoan(e.target.value)}    className='p-2.5 m-auto border-r-gray-600 text-black border-1 border h-10 w-[100%]' />
                </div>
                <div className='w-full'><label class="block  text-sm  text-white ">Loan term</label>
                    <input type="number" name="text" id="topic" class="  p-2.5 m-auto " className='border-r-gray-600 border-1 border h-10 w-[100%]' />
                </div >
                <Link to='/search' state={{ from: loan}}>  

                <button  className='bg-[#f6921e] flex justify-center text-white h-min mt-5 p-2.5   w-full rounded-md  '>
                        
                            <p className=' text-white'>Get&nbsp;Offers</p>
                    </button>
                    </Link>
            </div>

           

        </div>
    )
}

export default CustomerFinance