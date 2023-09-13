import React from 'react';
import Single from '../assets/RX-8-.jpg'
import Motor from '../assets/fiche_technique/motor.png'
import Car from '../assets/fiche_technique/car.png'
import Energy from '../assets/fiche_technique/energy.png'
import Vitesse from '../assets/fiche_technique/vitesse.png'
import Pump from '../assets/fiche_technique/gas-pump.png'
import Flat from '../assets/fiche_technique/flat.png'
import Porsche from '../assets/iris.jpg'
import Mercedes from '../assets/mercedes.avif'

const Suggestion = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <h1 className='text-center font-bold mb-8 text-3xl'>Suggestions</h1>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-auto mx-auto  bg-white' src={Single} alt="/" />

                    <h2 className='text-2xl font-bold text-center pt-2'>MG RX 8</h2>
                    <div className='text-center font-medium'>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Motor} alt='/' /><span className='mt-2'>7 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Car} alt='/' /><span className='mt-2'>Berline</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Energy} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Vitesse} alt='/' /><span className='mt-2'>136 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Pump} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Flat} alt='/' /><span className='mt-2'>7</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-auto mx-auto  bg-white' src={Porsche} alt="/" />

                    <h2 className='text-2xl font-bold text-center pt-2'>porsche platinum</h2>
                    <div className='text-center font-medium'>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Motor} alt='/' /><span className='mt-2'>7 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Car} alt='/' /><span className='mt-2'>Berline</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Energy} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Vitesse} alt='/' /><span className='mt-2'>136 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Pump} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Flat} alt='/' /><span className='mt-2'>7</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-auto mx-auto  bg-white' src={Mercedes} alt="/" />

                    <h2 className='text-2xl font-bold text-center pt-2'>Mercedes-benz GLA </h2>
                    <div className='text-center font-medium'>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Motor} alt='/' /><span className='mt-2'>7 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Car} alt='/' /><span className='mt-2'>Berline</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Energy} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-rows-1 grid-flow-col py-3 border-b '>
                            <div class="row-start-2" >
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Vitesse} alt='/' /><span className='mt-2'>136 CH</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Pump} alt='/' /><span className='mt-2'>Essence</span>
                                </div>
                            </div>
                            <div class="row-start-2">
                                <div className='grid grid-cols-2'>
                                    <img className='w-[35px] mx-auto ' src={Flat} alt='/' /><span className='mt-2'>7</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
