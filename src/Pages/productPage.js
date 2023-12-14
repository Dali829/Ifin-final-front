import { useLocation,  } from 'react-router-dom';
import { BiMoney, BiTimeFive } from 'react-icons/bi';
import ProductServices from '../service/serviceProduct';
import { SwishSpinner } from "react-spinners-kit";
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';
import ServiceClients from '../service/serviceClient'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductSingle() {
    var ClientService = new ServiceClients;
    var ServicesProduct = new ProductServices;
    const location = useLocation()

    const { from } = location.state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


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

    const handleClick = async (e) => {
        e.preventDefault();    
        try {
            const response = await ClientService.postClient(credentials);
            if (response.status === 201 || response.status === 200) {
                setError("added")
                console.log("added");
                showToastMessage("Welcome to IFIN")
            } else   setError("error");
        } catch (err) {
            setError("error")
            showToastMessage1("ERRO")
        }
    };

    const [credentials, setCredentials] = useState({
        firstName: undefined,
        lastName: undefined,
        dateBirth: undefined,
        idNumber: undefined,
        province: undefined,
        district: undefined,
        email: undefined,
        email: undefined,
        password: "123",
        phone: undefined


    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await ServicesProduct.getProduct(from);
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

        setData(response.data);
    };
    const [data, setData] = useState({});

    const [showModal, setShowModal] = useState(false);


    return <div className="w-full">
        {(loading) ? <div className="grid  grid-cols-3 justify-between">
            <div className='px-16 col-span-2'>
                <div className='h-full w-full  '>
                    <div className='text-xl font-bold text-[#0e5475]'> Personal Loan :</div>
                    <div className='text-xl font-bold text-[#f6921e] mt-1 mb-4'> {data.bankName.bankName}</div>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-[80%]  my-6  max-md:w-[100%]">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">

                                            <button
                                                className=" ml-auto  float-right te"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <AiOutlineClose className='text-red' size={15} />
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative py-4 flex-auto text-[#0e5475] text-sm">
                                            <div className='w-full flex justify-center '>
                                                <img className='w-[200px]  pt-4' src={Logo} alt='/' />

                                            </div>
                                            <div className='flex justify-center text-lg'>
                                                <p className='text-[#0e5475]'>Personal loan : </p>
                                                <p className='text-[#f6921e]'> &nbsp;{data.bankName.bankName}</p>
                                            </div>
                                            <div className='mx-28 mt-8'>
                                                <div className='grid grid-cols-2'>
                                                    <div>First Name*<br />
                                                        <input onChange={(e) => credentials.firstName = e.target.value} type='text' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>
                                                    <div>Last Name*<br />
                                                        <input onChange={(e) => credentials.lastName = e.target.value} type='text' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>

                                                </div>
                                                <div className='grid mt-4 grid-cols-2'>
                                                    <div>Date of Birth*<br />
                                                        <input onChange={(e) => credentials.dateBirth = e.target.value} type='date' className=' flex justify-center' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>
                                                    <div>ID Number*<br />
                                                        <input onChange={(e) => credentials.idNumber = e.target.value} type='text' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>

                                                </div>
                                                <div className='grid mt-4 grid-cols-2'>
                                                    <div>Province*<br />
                                                        <input onChange={(e) => credentials.province = e.target.value} type='text' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>
                                                    <div>District*<br />
                                                        <input onChange={(e) => credentials.district = e.target.value} type='text' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>

                                                </div>
                                                <div className='grid mt-4 grid-cols-2'>
                                                    <div>Phone*<br />
                                                        <input onChange={(e) => credentials.phone = e.target.value} type='number' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>
                                                    <div>Email*<br />
                                                        <input onChange={(e) => credentials.email = e.target.value} type='email' className='' style={{ width: "400px", height: "40px", border: "1px solid #0e5475" }}></input>
                                                    </div>

                                                </div>
                                                <div className='flex mt-4'>
                                                    <input className='border mr-2  flex justify-center border-[#0e5475] rounded-lg' type='checkbox' style={{ width: "20px", height: "20px" }} />
                                                    <p > I have read the Whichkredi Explicit Consent to the processing of my personal data within the scope of express consent text.</p>
                                                </div>
                                                <div className='flex mt-1'>
                                                    <input className='border mr-2  flex justify-center border-[#0e5475] rounded-lg' type='checkbox' style={{ width: "20px", height: "20px" }} />
                                                    <p > I have read and approve the Whichkredi Disclosure Text.</p>
                                                </div>
                                                <div className='w-full justify-center flex mt-8'>
                                                    <div onClick={handleClick} className='bg-[#f6921e] text-white px-48  py-3 mr-4  p-2 rounded-br-lg cursor-pointer w-min' >
                                                        <div className='w-full'>
                                                            <p className=' mt-1 flex justify-center '>Apply&nbsp;Now</p></div>
                                                    </div>
                                                </div>
                                                <div className='text-red-600 justify-center flex text-xl'> {error}</div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

                    <div className='text-[#D9D9D9] text-sm'>
                        {data.productName}<br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                    <div className='text-[#D9D9D9]'>
                        <div className='flex'>  <BiMoney size={20} />&nbsp;-&nbsp;$ 146</div>
                        <div className='flex'>  <BiTimeFive size={20} />&nbsp;-&nbsp;$ 146</div>
                        <div>
                            <div className='flex mt-4 mb-10'>
                                <div className='bg-[#f6921e] text-white pr-12 py-1 mr-4  p-2 rounded-br-lg cursor-pointer w-min' onClick={() => { setShowModal(true) }}>
                                    <div className='w-full'>
                                        <p className='ml-2 mt-1 flex justify-center '>Apply&nbsp;Now</p></div>
                                </div>
                                <div className='underline text-[#0e5475]'>Back to resulat</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='h-full'>

                <img className=' mt-16 w-[250px] mx-auto ml-0 pt-4' src={data.bankName.bankLogo} alt='/' />
            </div>       </div> : <div >

            <div className="spinnerContainer">

                <div className=" mt-[15%] justify-center flex h-screen">
                    <SwishSpinner size={70} frontColor="#f6921e"
                        backColor="white" loading={true} />
                </div>
                <ToastContainer />


            </div>   </div>}

    </div>
}
