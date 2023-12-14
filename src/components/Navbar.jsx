import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CgEnter } from 'react-icons/cg';
import Logo from '../assets/logo.png';
import {  Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { BiSolidCalendarCheck, BiSolidCheckShield } from 'react-icons/bi';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext.js';
import { useEffect } from 'react';





const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleNav = () => {
    setNav(!nav);
  };
  const { user } = useContext(AuthContext);
  const handleClickDeconnecter = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate('/')

  };
  const test = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    
}, []);

  const [showModal, setShowModal] = useState(false);
  const [isLogged, setIslogged] = useState(false);
  const Data = [
    {
      index: 1,
      name: "Campaignes",
      icon: <BiSolidCalendarCheck size={22} />,
      link:'/compaigne'

    },
    {
      index: 2,
      name: "Become a Bank Customer",
      icon: <FaUsers size={22}/>,
      link:'/become-a-bank-customer'

    },
    {
      index: 3,
      name: "Become a Partner",
      icon: <BiSolidCheckShield size={22}  />,
      link:'/become-a-partner'

    }, {
      index: 4,
      name: "Register",
      icon: <FaUserAlt size={18}  />,
      link:'/register'

    }
  ]
  return (
    
    <div className='flex text-sm  justify-between items-center h-24 max-w-[1240px] mb-12 mx-auto px-4 text-black '>
    <a href='/'> <img className='w-[250px] mx-auto ml-0 pt-4' src={Logo} alt='/' /></a> 

      <ul className='hidden md:flex '>
      {
          Data.map(item =>
            <li id={item.index}><div className="mt-8 flex text-[#0e5475]  p-2  rounded-2xl">{item.icon}
            <p className='mt-1 ml-2'><a href={item.link}>{item.name}</a></p> 
              
            </div>  </li>)
        }
        
       
        {(!user) ? (<li className='p-5' >
          <div className="flex justify-end text-white mt-4">

          <a href='/login'> <div className="bg-[#f6921e]   flex  p-2 px-4 rounded-xl"><CgEnter size={20} className='mr-1' />
              <button >Sign in
              </button>
            </div></a> 
          </div></li>) :
          (<li className='mt-8 '>
            <p className=' px-4'>
              <Dropdown
                arrowIcon={true}
                inline
                label={ <FaUserAlt size={25}  color='#f6921e' />}
              >
                
                <ul className='mx-4' class="py-1" aria-labelledby="dropdown">
               {(test["role"]!="user")&&<li>
                    <a href="/dashboard/product" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                  </li>}   
                  <li onClick={handleClickDeconnecter}>
                    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                  </li>
                </ul>
              </Dropdown></p></li>
          )}

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Accueil</h1>
        <li className='p-4 border-b border-gray-600'>Accueil</li>
        <li className='p-4 border-b border-gray-600'>Accueil</li>
        <li className='p-4 border-b border-gray-600'>Accueil</li>
        <li className='p-4 border-b border-gray-600'>Accueil</li>
        <li className='p-4'>Contacter Nous</li>
      </ul>




      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[45%]  my-6  max-md:w-[80%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="md:text-3xl max-md:text-1xl font-semibold">
                    Inscription
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineClose className='text-red' size={25} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button onClick={() => { setIslogged(true); navigate('/dashboard'); }} type="submit" class="w-full text-black bg-[#20c2e0] hover:bg-[#30c8a4]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-red ">Sign in</button>
                    <p class="text-sm font-light text-black dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>

  );
};

export default Navbar;
