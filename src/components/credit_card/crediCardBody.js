import React, { useState } from 'react'
import { FaCreditCard, FaMedal, FaTicketAlt } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { ImAirplane } from 'react-icons/im'
import { BsArrowRight, BsShopWindow } from 'react-icons/bs'
import Card from '../../assets/dhia/credit-card.png'
import { BiSolidMessageError } from 'react-icons/bi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ProductServices from '../../service/serviceProduct';
import { useEffect } from 'react'



const CreditCardBody = () => {
    var ServicesProduct = new ProductServices;

    const [indexTab, setIndexTab] = useState(1);

    const [Data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData =  () => {
        ServicesProduct.getAllProduct().then((res)=>setData(res.data.filter((item) => item.productCategory.title== "Credit Cards")));
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

    };

    return (
        <div className='w-full mt-[4%] bg-[#EFF1F2] pb-[15%]  mb-0 px-[5%] '>
            <div className='bg-[#0e5475] text-white pr-12 py-1 ml-3  p-2 rounded-br-lg   w-min'>
                <div className='w-full'>
                    <p className='ml-2 mt-1 flex justify-center'>Best&nbsp;Cards</p></div>
            </div>

            <div className='grid grid-cols-3 mt-3 mb-4 gap-2'>

                {
                    Data.map(item =>
                        <div onClick={() => setIndexTab(item.index)} className='w-full  p-3 flex justify-between'>
                            <div className=' p-4 rounded-lg border-2 bg-white border-[#0e5475]'>

                                <div className='grid grid-cols-2'>
                                    <img className='w-[166px] h-[104px]' src={Card} alt='/' />

                                    <div className='ml-2'>
                                        <p className='text-base text-[#0e5475]'> {item.bankName.bankName}</p>
                                        <p className='text-sm text-[#D9D9D9]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>

                                <div>

                                    <div className='flex mt-4'>
                                        <BiSolidMessageError size={20} className='mr-2 text-[#f6921e]' />
                                        <p className='text-sm text-[#D9D9D9]'>APRC {item.APRC} %
                                        </p>
                                    </div>


                                    <div className='flex mt-2'>
                                        <BiSolidMessageError size={20} className='mr-2 text-[#f6921e]' />
                                        <p className='text-sm text-[#D9D9D9]'>Total Payment $ {item.totalPayment} %
                                        </p>
                                    </div>

                                    <div className='flex mt-2 text-sm'>
                                        <p className='underline text-[#0e5475]'>See all options
                                        </p>
                                        <div className='bg-[#C7D7DF] flex ml-3'>
                                            <p >+11 </p><BsArrowRight className='mt-0.5' size={16} />
                                        </div>
                                    </div>

                                    <div className='mt-6 flex justify-between text-sm'>
                                        <div>
                                            <p className='text-[#D9D9D9]'>Annual Fee</p>
                                            <p className='text-[#0e5475]'>FREE</p>

                                        </div>

                                        <a href='#'> <div className="bg-[#f6921e]  text-[#0e5475]  flex  p-2 px-16 rounded-xl">
                                            <button >Get
                                            </button>
                                        </div></a>


                                    </div>

                                </div>

                            </div>



                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default CreditCardBody