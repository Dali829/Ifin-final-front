import React, { useState ,useContext} from 'react';
import bg1 from '../assets/dhia/tim-bogdanov-4uojMEdcwI8-unsplash.jpg'
import Logo from '../assets/logo.png';
import AdminServices from '../service/serviceAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';


export default function Login() {
    const navigate = useNavigate();

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
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await ServicesAdmin.loginAdmin(credentials);
            if (response.status === 201 || response.status === 200) {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
                showToastMessage("Welcome to IFIN")
                if(response.data["role"]=="user"){
                    navigate('/')
                }else{
                    navigate('/dashboard/product')
                }
                
            } else {dispatch({ type: "LOGIN_FAILURE" });showToastMessage1("ERRO");} 
        } catch (err) {
            showToastMessage1("ERRO")
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return <div className="w-full">
        <div className="grid grid-cols-2 justify-between">
            <div className='px-16'> <a href='/'><img className='w-[250px] mx-auto ml-0 pt-4' src={Logo} alt='/' /></a>
                <div className='h-full w-full  '>
                    <div className="text-[#0e5475] text-2xl flex justify-center mt-12 font-bold">Welcome Back !</div>
                    <div className='text-[#b2b5b6] flex justify-center'>Would you like to speak to one of our financial advisors</div>
                    <div className='mt-6'>
                        <p className="text-[#0e5475] text-xl"> Email</p>
                        <div className='border border-1 border-black w-full py-2 px-2'>
                            <input onChange={(e) => credentials.email = e.target.value} className='w-full py-2 px-2' type="email" name="email" id="tel" class=" w-full p-2.5 " placeholder="Enter your email." required="" />
                        </div>
                        <p className="text-[#0e5475] text-xl mt-6"> Password</p>
                        <div className='border border-1 border-black w-full py-2 px-2'>
                            <input onChange={(e) => credentials.password = e.target.value} className='w-full py-2 px-2' type="password" name="password" class=" w-full p-2.5 " placeholder="******************" required="" />
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex '>
                                <input className='mr-2' style={{
                                    width: '25px',
                                    height: '25px'
                                }} type='checkbox' /><p className='text-[#0e5475]'> Remember me</p>
                            </div>
                            <p className='text-[#0e5475]'>Forgot Password ?</p>
                        </div>
                        <div disabled={loading}  className='flex justify-center mt-6 cursor-pointer' onClick={handleClick}>
                            <div className='bg-[#f6921e] text-white pr-12 py-4   p-2 rounded-br-xl  w-full'>
                                <div className='w-full'>
                                    <p className='ml-2 mt-1 text-xl flex justify-center'>Sign&nbsp;In</p></div>
                            </div>
                        </div>
                        <div className='text-[#b2b5b6] flex justify-center mt-12'>Don't have an account ?<p><a href='/register'><p className='text-[#0e5475]'>Sign Up</p></a></p></div>




                    </div>
                </div>
            </div>
            <div className='w-full h-screen' style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}  ></div>
            <ToastContainer />

        </div>

    </div>
}
