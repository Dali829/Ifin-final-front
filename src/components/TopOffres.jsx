import React, { useEffect, useRef, useState } from 'react';
import Photo1 from '../assets/vakifkatilimyataysloganlilogo.png'
import ProductServices from '../service/serviceProduct';
import { MdOutlineArrowBackIos , MdOutlineArrowForwardIos} from "react-icons/md";



const TopOffres = () => {
    var ServicesProduct = new ProductServices;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        ServicesProduct.getAllProduct().then((res) => setData(res.data.filter((item) => item.topOffer == true)));
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);


    };


    const [data, setData] = useState([]);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const ref = useRef(null);


    return (
        <div className='w-full py-[4rem] $ bg-white '>
            <div className='bg-[#0e5475] text-white pr-12 py-1  p-2 rounded-br-lg ml-14 mb-8  w-min'>
                <div className='w-full'>
                    <p className='ml-2 mt-1 flex justify-center'>Top&nbsp;Offers</p></div>
            </div>

            <div className='flex'>
                <button onClick={() => scroll(-100)}><MdOutlineArrowBackIos color='#f6921e'/></button>



                <div className='flex items-center overflow-x-scroll no-scrollbar mx-4' ref={ref}>
                    {data.map((item, index) => (<div className='flex-none'>
                        <div className='w-[300px] h-[400px] mx-2 my-4 text-[#0e5475] shadow-xl flex flex-col m p-4  rounded-2xl hover:scale-105 duration-300 border-[#0e5475]  border-4'>
                            <img className=' h-[15%] mx-auto ' src={item?.bankName?.bankLogo} alt='/' /><br />
                            IFIN Offer <br />
                            <div className='flex  justify-between'>
                                <p className='grid-cols-1 mt-1'>Ammount </p> <div className='w-[50%] grid-cols-1 rounded-lg border brder-1 border-[#0e5475]'>
                                    <div className='flex  justify-between w-full p-1'>
                                        <p className='grid-cols-1'>50 000 </p> <p className='grid-cols-1'>TL </p>
                                    </div> </div>
                            </div>
                            <br />
                            <div className='flex  justify-between'>
                                <p className='grid-cols-1'>Loan terms </p>
                                <div className='w-[50%] grid-cols-1 rounded-lg border brder-1 border-[#0e5475]'>
                                    <div className='flex  justify-between w-full p-1'>
                                        <p className='grid-cols-1'>48 </p> <p className='grid-cols-1'>Monthes </p>
                                    </div> </div>
                            </div>

                            <br />
                            <div className='flex  justify-between'>
                                <p className='grid-cols-1'>Profit </p> <p className='grid-cols-1'>% {item.ProfiteRate} </p>
                            </div>
                            <div className='flex  justify-between'>
                                <p className='grid-cols-1'> Monthly Payement </p> <p className='grid-cols-1'>{item.monthlyInstallment} TL </p>
                            </div>
                            <div className='flex  justify-between'>
                                <p className='grid-cols-1'>Total Payment </p> <p className='grid-cols-1'>{item.totalPayment} TL </p>
                            </div>

                            <br />

                            <div className='flex justify-center'>
                                <div className='bg-[#f6921e] text-white pr-12 py-1   p-2 rounded-br-lg  w-min'>
                                    <div className='w-full'>
                                        <p className='ml-2 mt-1 flex justify-center'>Apply&nbsp;Now</p></div>
                                </div> </div>

                        </div></div>
                    ))}
                </div>
                <button onClick={() => scroll(100)}><MdOutlineArrowForwardIos color='#f6921e'/></button>
            </div>

        </div>
    );
};

export default TopOffres;
