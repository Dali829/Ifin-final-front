import React, { useState,useEffect } from 'react'
import Card from '../../assets/dhia/output_200575.jpg'
import { BiSolidTimeFive } from 'react-icons/bi'
import CompaigneServices from '../../service/serviceCompaigne';
import {SwishSpinner} from "react-spinners-kit"; 




const CompaigneBody = () => {
    var ServicesCompigne = new CompaigneServices;

    const [indexTab, setIndexTab] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData =  () => {
         ServicesCompigne.getAllCompaigne().then((res)=>setData(res.data));
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

    };
    const [Data, setData] = useState([]);

   


    return (
        <div>{(loading) ?
        <div className='w-full mt-[4%] bg-[#EFF1F2] pb-[15%]  mb-0 px-[5%] '>

            <div className='grid grid-cols-4 mt-3 mb-4 gap-2'>

                {
                    Data.map(item =>
                        <div onClick={() => setIndexTab(item.index)} className='w-full  flex justify-between'>
                            <div className='w-full'>
                                <div style={{ backgroundImage: `url(${Card})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='h-[251px] w-full '>

                                </div>

                                <div>

                                    <p className='text-sm text-[#0e5475]  mt-4'>{item.compaigneTitle} 
                                    </p>
                                    <p className='text-sm text-[#D9D9D9]'>{item.description}
                                    </p>

                                   <div className='flex mt-4 mb-16'><BiSolidTimeFive size={25} className='mr-2  text-[#f6921e]' />
                                   <p className='text-sm mt-1 text-[#f6921e] '>{(!item.endingSoon)?item.endingDate:"ending soon"}
                                    </p>
                                   </div>
                                    

                                </div>

                            </div>



                        </div>
                    )
                }

            </div>
        </div>:  <div >
      
      <div className="spinnerContainer"> 
    
          <div className=" mt-[15%] justify-center flex h-screen"> 
              <SwishSpinner size={70} frontColor="#f6921e" 
                  backColor="white" loading={true} /> 
          </div> 
          
      </div>   </div>}</div>
    )
}

export default CompaigneBody