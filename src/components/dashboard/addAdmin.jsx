import React, { useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import AdminServices from '../../service/serviceAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddAdmin = () => {
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
        role: "admin",
        password: undefined,
        superAdmin:undefined,
        country:undefined       
    });


    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ServicesAdmin.postAdmin(credentials);
            if (response.status === 201 || response.status === 200) {
                console.log("added");
                showToastMessage("New Admin Added")
            } else showToastMessage1("ERRO");
        } catch (err) {
            showToastMessage1("ERRO")
        }
    };



    
    const [selectedItem, setSelectedItem] = useState(1);


    return (
        <div className="mx-16 mt-8">
            <div className="grid grid-cols-7 bg-[#0e5475]">
                <div className="col-span-5"><p className="text-white text-3xl m-2">New Admin</p>
                </div>
                <div className=" px-1 mr-2   flex text-white justify-center cursor-pointer  rounded-xl " onClick={handleClick}>
                    <div className='bg-[#f6921e] rounded-lg px-4 py-1 h-min mt-2 '>save</div>
                </div>
                <div className=" text-white underline mt-3">  Delete</div>
            </div>


            <div className='grid grid-cols-5 text-sm text-[#0e5475]'>
                <div className='col-span-1 border border-[#0e5475] rounded-l-lg py-5 p-3 mt-4'>
                    Admin Name*
                    <input  onChange={(e) => credentials.username = e.target.value} className='border border-[#0e5475] rounded-lg p-1 ' />
                </div>
                <div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Country
                    <input onChange={(e) => credentials.country = e.target.value} className='border border-[#0e5475] rounded-lg p-1 ' />
                </div>
                <div className='col-span-1  border border-[#0e5475] py-5 p-3 mt-4'>
                    Email
                                        <input type='text' onChange={(e) => credentials.email = e.target.value} className='border border-[#0e5475] rounded-lg p-1 ' />

                </div>
                <div className='col-span-1  border border-[#0e5475] py-5 p-3 mt-4'>
                    Password
                                        <input type='text' onChange={(e) => credentials.password = e.target.value} className='border border-[#0e5475] rounded-lg p-1 ' />

                </div>
                <div className='col-span-1 rounded-r-lg border border-[#0e5475] py-5 p-3 mt-4'>
                Super Admin<br/>
                                        <input type='checkbox' onChange={(e) => credentials.superAdmin = e.target.checked} className=' w-[30px] h-[30px] border border-[#0e5475] rounded-lg p-1 ' />

                </div>
                <ToastContainer />
            </div>

        </div>
    )
}

export default AddAdmin