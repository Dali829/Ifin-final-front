import React from 'react';
import Facebook from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import Linked from '../assets/linkedin.png'
import Localisation from '../assets/location-pin.png'
import Tel from '../assets/phone-call.png'
import Email from '../assets/email.png'

const Footer = () => {
  return (
    <div className='bg-[#00df9a]'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-base gap-8 '>
      <div >
        <h1 className='w-full text-3xl text-center'>Suivez notre actualité sur </h1>
        <div className='flex justify-center'>
          <div className='flex justify-between w-[50%] my-6'>
            <img className='w-9' src={Insta} alt='/' />
            <img className='w-9' src={Facebook} alt='/' />
            <img className='w-9' src={Linked} alt='/' />
          </div>
        </div>
        <p className='py-4'>
          <div className='flex mb-2'><img className='w-8 h-8' src={Localisation} alt='/' /><p className='mt-1'><p className='font-bold'>Siège commercial : </p>Rue 8612 impasse n° 5, ZI Charguia 1.</p></div>
          <div className='flex mb-2'><img className='w-8 h-8' src={Localisation} alt='/' /><p className='mt-1'><p className='font-bold'>Siège social :</p> 74 , Avenue de Carthage , Tunis 1001</p></div>
          <div className='flex mb-2'><img className='w-8 h-8 mr-1' src={Tel} alt='/' /><p className='mt-1'>+216 58 576 510 / 31 34 20 20</p></div>
          <div className='flex'><img className='w-8 h-8 mr-1' src={Email} alt='/' /><p className='mt-1'>contact@crc.tn</p></div>
        </p>
      </div>
      <div className='lg:col-span-2  flex justify-evenly md:mt-24  uppercase'>
        <div>
          <h6 > </h6>
          <ul style={{ listStyleType: 'disc' }}>
            <li className='py-2'>à propos Tassheel</li>
            <li className='py-2'>Reprise voiture</li>
            <li className='py-2'>LOA et assurance auto</li>
            <li className='py-2'>Financement auto</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: 'disc' }}>
            <li className='py-2'>Garanties et services</li>
            <li className='py-2'>Garanties mécaniques</li>
            <li className='py-2'>Garantie mécanique</li>
            <li className='py-2'>Livraison</li>

          </ul>
        </div>
      </div>
    </div></div>
  );
};

export default Footer;
