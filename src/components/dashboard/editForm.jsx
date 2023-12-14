import React, { useEffect, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Switch from '@mui/material/Switch';
import { Dropdown } from 'flowbite-react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import AnswerServices from '../../service/serviceAnswer';
import FormServices from '../../service/serviceForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { useLocation, useParams, } from 'react-router-dom';




const Form = () => {




    var ServicesAnswer = new AnswerServices;
    var ServiceForm = new FormServices;

    useEffect(() => {
        fetchData();
        fetchDataById();
    }, []);

    const [credentials, setCredentials] = useState({
        answer: undefined,
        question: undefined,
        Required: undefined,
    });

    const fetchDataById = async () => {
        const response = await ServiceForm.getFormById(from);
       credentials.question= response.data.question;
       credentials.answer= response.data.answer;
       credentials.Required= response.data.Required;

        
        setDataForm(response.data);
    };
    const [dataForm, setDataForm] = useState([]);


    const fetchData = async () => {
        const response = await ServicesAnswer.getAllAnswer();
        setData(response.data);
    };
    const [prevCheck, setPrevCheck] = useState(false);

    const [data, setData] = useState([
    ]);

    const handleClick = async (e) => {
        console.log(credentials)
        e.preventDefault();
        try {
            const response = await ServiceForm.updateFormBy(from,credentials);
            if (response.status === 201 || response.status === 200) {
                console.log("added");
                showToastMessage("Form edited")
            } else showToastMessage1("ERRO");
        } catch (err) {
            showToastMessage1("ERRO")
        }
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

    const location = useLocation()

    const { from } = location.state
    return (
        <div className="mx-16 text-[#0e5475] text-sm mt-8">
            <div className="grid grid-cols-7 bg-[#0e5475]">
                <div className="col-span-5"><p className="text-white text-3xl m-2">Form Edit</p>
                </div>
                <div className=" px-1 mr-2   flex text-white justify-center cursor-pointer  rounded-xl " onClick={handleClick}>
                    <div className='bg-[#f6921e] rounded-lg px-4 py-1 h-min mt-2 '>edit</div>
                </div>
            </div>
            <div>


                <div>
                    <div className='grid grid-cols-4 text-sm text-[#0e5475]'>
                        <div className='col-span-2    py-5 p-3 mt-4'>
                            Question 1 :&nbsp;
                            <input defaultValue={credentials.question} placeholder={credentials.question} onChange={(e) => credentials.question = e.target.value} className='border border-b-[#0e5475] bg-[#f4f4f4] w-[300px]  p-1 ' />
                        </div>
                        <div className='col-span-1 tex-[#0e5475]    py-5 p-3 mt-4'>
                            <Select styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: 'white',
                                    border: "1px solid  #0e5475"
                                }),
                            }} placeholder='Type of Answer' onChange={(e) => credentials.answer = e.value} options={data.map((item, index) => (
                                { value: item._id, label: item.title }
                            ))} isRtl={false} className="basic-single"
                                classNamePrefix="Type of Answer"
                            />


                        </div><div className='col-span-1   py-5 p-3 mt-4'>

                            <Switch
                                onChange={() => { setPrevCheck(!prevCheck); credentials.Required = prevCheck }}
                            />
                            Required
                        </div>

                    </div>
                </div>



            </div>

            <ToastContainer />


        </div>
    )
}

export default Form