import React, { useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import BankServices from '../../service/serviceBank';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useParams, } from 'react-router-dom';
import { useEffect } from 'react';
import { FaCamera } from "react-icons/fa";



const Bank = () => {

    const [image, setImage] = useState("")

    const location = useLocation()

    const { from } = location.state
    useEffect(() => {
        fetchDataBank()
    }, []);
    const [product, setProduct] = useState([]);

    const fetchDataBank = async () => {
        const response = await ServicesBank.getBankById(from);
        setProduct(response.data);
        setImage(response.data["bankLogo"])

    };
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

    var ServicesBank = new BankServices;


    const [credentials, setCredentials] = useState({
        bankName: undefined,
        country: undefined,
        bankLogo: image,
        referalLink: undefined,
        phoneNumber: undefined,
        bankEmail: undefined,    
        adresse: undefined,
       
    });


    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ServicesBank.updateBankBy( from,credentials);
            if (response.status === 201 || response.status === 200) {
                console.log("added");
                showToastMessage("Bank Edited")
            } else showToastMessage1("ERRO");
        } catch (err) {
            showToastMessage1("ERRO")
        }
    };
    function convertToBase64(e) {
        console.log(e)
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result)
            credentials.bankLogo = reader.result;
        };
        reader.onerror = error => {
            console.log("Erroe: ", error);
        }

    }




    return (
        <div className="mx-16 mt-8">
            <div className="grid grid-cols-7 bg-[#0e5475]">
                <div className="col-span-5"><p className="text-white text-3xl m-2">EditBanks</p>
                </div>
                <div className=" px-1 mr-2   flex text-white justify-center cursor-pointer   rounded-xl " onClick={handleClick}>
                    <div className='bg-[#f6921e] rounded-lg px-4 py-1 h-min mt-2 '>edit</div>
                </div>
            </div>


            <div className='grid grid-cols-5 text-sm text-[#0e5475]'>
                <div className='col-span-1 border border-[#0e5475] rounded-tl-lg py-5 p-3 mt-4'>
                    Bank Name*
                    <input defaultValue={product.bankName} placeholder={product.bankName} onChange={(e) => credentials.bankName = e.target.value}  className='border border-[#0e5475] rounded-lg p-1 ' />
                </div>
                <div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Country
                    <input defaultValue={product.country} placeholder={product.country} onChange={(e) => credentials.country = e.target.value}  className='border border-[#0e5475] rounded-lg p-1 ' />
                </div><div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Bank Logo
                    <form className='rounded-lg border-[#0e5475] border flex bg-[#f6921e]' onClick={() => document.querySelector(".input-field").click()}>
                    <input placeholder={product.bankLogo}  className='w-[80%]     rounded-lg p-1 ' />
                 <div className=' justify-center felx p-2'> <FaCamera  size={17} style={{color:"white"}} /></div>   
                        <input hidden accept='image/*' type='file' onChange={convertToBase64}  className='input-field' />
                    </form>
                </div>
                <div className='col-span-2 rounded-tr-lg border border-[#0e5475] py-5 p-3 mt-4'>
                    Referal Link<br />
                    <input defaultValue={product.referalLink} placeholder={product.referalLink} onChange={(e) => credentials.referalLink = e.target.value}  className='w-[90%]   border border-[#0e5475] rounded-lg p-1 ' />
                </div>

            </div>
            <div className='grid grid-cols-5 text-sm text-[#0e5475]'>
                <div className='col-span-1 rounded-tl-lg py-5 p-3 '>
   
                </div>
                <div className='col-span-1 border rounded-bl-lg border-[#0e5475] py-5 p-3 '>
                    Phone Number
                    <input type='number' defaultValue={product.phoneNumber} placeholder={product.phoneNumber} onChange={(e) => credentials.phoneNumber = e.target.value}  className='border border-[#0e5475] rounded-lg p-1 ' />
                </div><div className='col-span-1 border border-[#0e5475] py-5 p-3 '>
                    Bank Email
                    <input defaultValue={product.bankEmail} placeholder={product.bankEmail} onChange={(e) => credentials.bankEmail = e.target.value}  className='border border-[#0e5475] rounded-lg p-1 ' />
                </div>
                <div className='col-span-2 rounded-br-lg border border-[#0e5475] py-5 p-3 '>
                    Adresse<br />
                    <input defaultValue={product.adresse} placeholder={product.adresse} onChange={(e) => credentials.adresse = e.target.value}  className='w-[90%]   border border-[#0e5475] rounded-lg p-1 ' />
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Bank