import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const NosOffres = () => {
    return (
        <div className='w-full py-[10rem] px-8 bg-white'>
            <h1 className='text-center font-bold mb-10 text-3xl '>Nos Offres</h1>

            <div className='max-w-[900px] mx-auto grid md:grid-cols-2 gap-24 '>
                <div className='w-full shadow-xl flex flex-col m p-4  rounded-lg hover:scale-105 duration-300 border-[#20c2e0]  border-4'>
                    <h1 className='text-center mt-[-3rem] text-2xl md:text-3xl' ><div className='bg-[#20c2e0]  py-5 rounded-3xl w-22 text-white font-bold'>Offre&nbsp;Basique</div></h1>
                    <h2 className='md:text-2xl text-1xl text-center py-8'><p className='mb-1'>Quote part de l'amortissement du véhicule</p> <br />
                        <p className='mb-1'> Assurance : Tous risques</p><br />
                        <p className='mb-1'> Formalités Administratives : <br />
                            L'immatriculation <br />
                            Vignette<br />
                            Visites techniques</p>
                        <p className='mx-12 mt-6 md:mt-36 shadow-black mb-4 shadow-2xl p-4 font-bold'>*** DT</p>
                    </h2>
                </div>
                <div className='w-full shadow-xl flex flex-col m p-4  rounded-lg hover:scale-105 duration-300 border-[#20c2e0]  border-4'>
                    <h1 className='text-center mt-[-3rem] text-2xl md:text-3xl' ><div className='bg-[#20c2e0]  py-5 rounded-3xl w-22 text-white font-bold'>Offre&nbsp;Confort</div></h1>
                    <h2 className='md:text-2xl text-1xl text-center py-8'><p className='mb-1'>Quote part de l'amortissement du véhicule</p> <br />
                        <p className='mb-1'> Assurance : Tous risques</p><br />
                        <p className='mb-1'> Formalités Administratives : <br />
                            L'immatriculation <br />
                            Vignette<br />
                            Visites techniques<br />
                            Pneumatiques</p>
                        <br />
                        <p className='mb-1'>Révisions périodiques</p>


                        <p className='mx-12 mt-6 md:mt-12 shadow-black mb-4 shadow-2xl p-4 font-bold'>*** DT</p>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default NosOffres;
