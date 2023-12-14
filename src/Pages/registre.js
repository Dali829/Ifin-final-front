import { useState } from 'react';
import bg1 from '../assets/dhia/henning-witzel-ukvgqriuOgo-unsplash.jpg'
import Logo from '../assets/logo.png';
import AdminServices from '../service/serviceAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
    const showToastMessage = (msg) => {
        toast.success(msg + " !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const showToastMessage1 = (msg) => {
        toast.error(msg + " !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    var ServicesAdmin = new AdminServices;

    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,   
    });

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ServicesAdmin.postAdmin(credentials);
            if (response.status === 201 || response.status === 200) {
                console.log("added");
                showToastMessage("Welcome to IFIN")
            } else showToastMessage1("ERRO");
        } catch (err) {
            showToastMessage1("ERRO")
        }
    };

    return <div className="w-full">
        <div className="grid grid-cols-2 justify-between">
            <div className='px-16'><a href='/'><img className='w-[250px] mx-auto ml-0 pt-4' src={Logo} alt='/' /></a>
                <div className='h-full w-full  '>
                    <div className="text-[#0e5475] text-2xl flex justify-center mt-10 font-bold">Join For Success</div>
                    <div className='text-[#b2b5b6] flex justify-center text-center'>Are you ready to take the next step towards a successfull <br /> future? Look no further than IFIN </div>
                    <div className='mt-6'>
                        <p className="text-[#0e5475] text-xl">Full Name</p>
                        <div className='border border-1 border-black w-full py-2 px-2'>
                            <input onChange={(e) => credentials.username = e.target.value} className='w-full py-2 px-2' type="text" name="name" class=" w-full p-2.5 " placeholder="Enter your full name" required="" />
                        </div>
                        <p className="text-[#0e5475] text-xl mt-6"> Email</p>
                        <div className='border border-1 border-black w-full py-2 px-2'>
                            <input onChange={(e) => credentials.email = e.target.value} className='w-full py-2 px-2' type="email" name="email" id="tel" class=" w-full p-2.5 " placeholder="Enter your email." required="" />
                        </div>
                        <p className="text-[#0e5475] text-xl mt-6"> Password</p>
                        <div className='border border-1 border-black w-full py-2 px-2'>
                            <input onChange={(e) => credentials.password = e.target.value} className='w-full py-2 px-2' type="password" name="password" class=" w-full p-2.5 " placeholder="******************" required="" />
                        </div>

                        <div className='flex justify-center mt-6 cursor-pointer' onClick={handleClick}>
                            <div className='bg-[#f6921e] text-white pr-12 py-4   p-2 rounded-br-xl  w-full'>
                                <div className='w-full'>
                                    <p className='ml-2 mt-1 text-xl flex justify-center'>Sign&nbsp;Up</p></div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
            <div className='w-full h-screen' style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}  ></div>
            <ToastContainer />
        </div>

    </div>
}
