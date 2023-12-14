import React from 'react';
import "../../src/styles/footer.css";
import Photo1 from '../assets/turkish_bank.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'
import { IoMailOpenSharp } from 'react-icons/io5'
import Logo from '../assets/logo-blanc.png'
import { BiTimeFive } from 'react-icons/bi';

const Footer = () => {


  return (
    <div className='w-full text-sm bg-[#EFF1F2] '>
      <div className='w-full bg-[#f7f7f7] flex flex-row py-10' >
        <img className='ml-[5%]  w-[15%] mx-auto grayscale' src={Photo1} alt='/' /><br />
        <img className='w-[15%] mx-auto grayscale' src={Photo1} alt='/' /><br />
        <img className='w-[15%] mx-auto grayscale' src={Photo1} alt='/' /><br />
        <img className='w-[15%] mx-auto grayscale' src={Photo1} alt='/' /><br />
        <img className='w-[15%] mr-[5%]  mx-auto grayscale' src={Photo1} alt='/' /><br />
      </div>
      <div className='bg-[#0e5475] px-[9%] text-white pt-[3%] w-full'>
        <div className='grid  grid-cols-2 w-[100%]'>
          <div className='cols-2  mr-8'>
            <p className='text-lg'> Request a call<br /> back.</p>
            <hr className='w-[4%] border-2 border-[#f6921e]' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
          </div>
          <div className=' '>
            I would like to discuss :
            <form class="space-y-4 md:space-y-6" action="#">
              <div className='flex w-full gap-4'>
                <div className='w-full'>
                  <input type="text" name="text" id="topic" class=" w-full p-2.5 " placeholder="Topic" required="" />
                </div>
                <div className='w-full'>
                  <input type="text" name="text" id="FirstName" class=" w-full p-2.5 " placeholder="First Name" required="" />
                </div></div>
              <div className='flex w-full gap-4'>
                <div className='w-full'>
                  <input type="number" name="text" id="tel" class=" w-full p-2.5 " placeholder="Phone number" required="" />
                </div>
                <div className='w-full'>
                  <div className='bg-[#f6921e] text-white pr-12 w-[40%]    p-2 rounded-br-lg  '>
                    <div className='w-full'>
                      <p className='ml-2 mt-1 flex justify-center'>Submit</p></div>
                  </div></div></div>


            </form>
          </div>
        </div>
        <div className='flex mt-[10%] '>
          <div className='w-full'> <p className='text-2xl mb-2'>Dubai, UAE</p>
            <div className="flex w-[70%] mb-1"><FaMapMarkerAlt size={20} className='text-[#f6921e] mt-1' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>

            <div className="flex w-[70%] mb-1"><MdPhoneIphone size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>+1-234-267-890 </p>
            </div>

            <div className="flex w-[70%] mb-1"><IoMailOpenSharp size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>ifinuae@ifin.com</p>
            </div>
          </div>
          <div className='w-full'> <p className='text-2xl mb-2'>Mascate, OMAN</p>
            <div className="flex w-[70%] mb-1"><FaMapMarkerAlt size={20} className='text-[#f6921e] mt-1' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>

            <div className="flex w-[70%] mb-1"><MdPhoneIphone size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>+1-234-267-890 </p>
            </div>

            <div className="flex w-[70%] mb-1"><IoMailOpenSharp size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>ifinuae@ifin.com</p>
            </div>

          </div>
          <div className='w-full'> <p className='text-2xl mb-2'>Ankara, TURKEY</p>
            <div className="flex w-[70%] mb-1"><FaMapMarkerAlt size={20} className='text-[#f6921e] mt-1' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>

            <div className="flex w-[70%] mb-1"><MdPhoneIphone size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>+1-234-267-890 </p>
            </div>

            <div className="flex w-[70%] mb-1"><IoMailOpenSharp size={20} className='text-[#f6921e]' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>ifinuae@ifin.com</p>
            </div>

          </div>

          <div className='border-l-2 border-[#f6921e]'></div>

        </div>
      </div>

      <div className='bg-[#0e5475] px-[9%] text-white pt-[3%] w-full pb-12'>
        <div className='grid  grid-cols-4 gap-2 w-[100%]'>
          <div className='cols-2  mr-8'>
            <img className='w-[80px] mx-auto ml-0 ' src={Logo} alt='/' />

            <hr className='w-[5%] border-2 border-[#f6921e]' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
          </div>

          <div className='cols-2  mr-8'>
            <p className='text-2xl'>Recent Campaignes</p>
            <hr className='w-[40%] border-2 border-[#f6921e]' />
            <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="flex w-[70%]  "><BiTimeFive size={20} className='text-[#f6921e] mt-0.5' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>July 23,2023 </p>
            </div>
            <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div className="flex w-[70%] "><BiTimeFive size={20} className='text-[#f6921e] mt-0.5' />
              <p className='mt-1 ml-2 text-[#b2b5b6]'>July 23,2023 </p>
            </div>
          </div>

          <div className='cols-2  mr-8'>
            <p className='text-2xl'>Extra Links</p>
            <hr className='w-[80%] border-2 border-[#f6921e]' />
            <div className='flex  mt-2'>
              <p className='w-[40%]'>About</p><p className='mr-8 '>Compaingnes</p>
            </div>
            <div className='flex mt-2'>
              <p className='w-[40%]'>Contacts</p><p className='mr-8'>Become&nbsp;a&nbsp;partner</p>
            </div>
            <div className='flex mt-2'>
              <p className='w-[40%]'>Credit Cards</p><p className='mr-8'>Finance&nbsp;offers</p>
            </div>
          </div>

          <div className='cols-2  mr-8'>
            <p className='text-2xl'>Subscirbe</p>
            <hr className='w-[80%] border-2 border-transparent' />
            <div className='flex  mt-2'>
              <input type="email" name="email" id="tel" class=" w-full p-2.5 " placeholder="Enter your Email" required="" />
              <div className='bg-[#f6921e]'><IoMailOpenSharp size={20} className='text-white mt-2 mx-2' /></div>
            </div>
            <p className='text-[#b2b5b6] mt-1'>Get latest updates and others</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
