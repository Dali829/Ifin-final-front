import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CgEnter} from 'react-icons/cg';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black '>
      <img className='w-[250px] mx-auto my-4 pt-4' src={Logo} alt='/' />

      <ul className='hidden md:flex border-b-2 border-gray-400 '>
        <li className='p-5'>Accueil</li>
        <li className='p-5'>Financement</li>
        <li className='p-5'>Demander&nbsp;Une&nbsp;Offre</li>
        <li className='p-5'>Véhicule&nbsp;Occasion</li>
        <li className='p-5'>Contacter&nbsp;Nous</li>
        <li className='p-5'><div className='flex'><CgEnter size={35} className='mr-2'/>Se&nbsp;Connecter</div></li>

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TASSHEEL</h1>
          <li className='p-4 border-b border-gray-600'>Accueil</li>
          <li className='p-4 border-b border-gray-600'>Financement</li>
          <li className='p-4 border-b border-gray-600'>Demander Une Offre</li>
          <li className='p-4 border-b border-gray-600'>Véhicule Occasion</li>
          <li className='p-4'>Contacter Nous</li>
      </ul>
      
    </div>
    
  );
};

export default Navbar;
