import React from 'react'
import Img1 from './assets/pexels-pixabay-104836.jpg' 
import Img2 from './assets/pexels-pixabay-63294.jpg' 


const Forfait = () => {
    return (
        <div className='grid md:grid-cols-3 gap-2'>
        <div className='col-span-2' >
            <div className="grid md:grid-cols-2 gap-3 grid-col-2 m-4 ">
                <div className="  text-right   uppercase">
                    <h1 className='text-start text-[#20c2e0] font-bold text-2xl md:text-5xl mb-6'>Un forfait <br />personnalisé</h1>
                </div>
            </div>
            <div className="grid  gap-3 md:grid-cols-2 grid-col-2 m-4 text-1xl  md:text-2xl mb-8">
                <div >
                    <div className='mb-3 font-bold text-[#30c8a4] text-2xl md:text-3xl'>1</div>
                    <div className='mb-2 font-bold text-[#20c2e0]'>Brand New Models</div>
                    <div>Browse and buy the brand's<br />
                        best available models
                    </div>
                </div>
                <div >
                <div className='mb-3 font-bold text-[#30c8a4] text-2xl md:text-3xl'>2</div>
                    <div className='mb-2 font-bold text-[#20c2e0]'>Full Service</div>
                    <div>Car repair and maintenance<br />
                        available 24/7
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 grid-col-2 m-4 text-1xl  md:text-2xl ">
                <div >
                    <div className='mb-3 font-bold text-[#30c8a4] text-2xl md:text-3xl'>3</div>
                    <div className='mb-2 font-bold text-[#20c2e0]'>Pre-owned Vehicles</div>
                    <div>Certified pre-owned Micharlet<br />
                        cars for every budget
                    </div>
                </div>
                <div >
                <div className='mb-3 font-bold text-[#30c8a4] text-2xl md:text-3xl'>4</div>
                    <div className='mb-2 font-bold text-[#20c2e0]'>Custom Details</div>
                    <div>Elevate your ride with custom-<br />
                        made upgrades
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="mb-4">
  <img
    src={Img1}
    className='bg-cover'
    alt="" />
</div>
<div class="mb-4 h-4">
  <img
    src={Img2}
className='bg-blend-darken'    alt="" />
</div>
</div>
        </div>
    )
}

export default Forfait