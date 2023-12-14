import React, { useEffect, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import CategoryServices from '../../service/serviceCategory';
import BankServices from '../../service/serviceBank';
import ProductServices from '../../service/serviceProduct';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbTrashXFilled } from 'react-icons/tb';




const Product = () => {
    var ServicesCAtegory = new CategoryServices;
    var ServicesBank = new BankServices;
    var ServicesProduct = new ProductServices;


    const [credentials, setCredentials] = useState({
        productName: undefined,
        bankName: undefined,
        productCategory: undefined,
        totalPayment: undefined,
        monthlyInstallment: undefined,
        ProfiteRate: undefined,
        APRC: undefined,
        topOffer:undefined

    });

    useEffect(() => {
        fetchData();
        fetchDataBank();
    }, []);


    const fetchData = async () => {
        const response = await ServicesCAtegory.getAllCatogory();
        setData(response.data);
    };
    const fetchDataBank = async () => {
        const response = await ServicesBank.getAllBank();
        setDataBank(response.data);
    };

    const [Data, setData] = useState([]);
    const [DataBank, setDataBank] = useState([]);

    const [selectedItem, setSelectedItem] = useState(1);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ServicesProduct.postProduct(credentials);
            if (response.status === 201 || response.status === 200) {
                console.log("added");
                showToastMessage("New product Added")
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

    return (
        <div className="mx-16 mt-8">
            <div className="grid grid-cols-7 bg-[#0e5475]">
                <div className="col-span-5"><p className="text-white text-3xl m-2">New Product</p>
                </div>
                <div className=" px-1 mr-2   flex text-white justify-center cursor-pointer rounded-xl " onClick={handleClick}>
                    <div className='bg-[#f6921e] rounded-lg px-4 py-1 h-min mt-2 '>save</div>
                </div>
                <div className=" text-white underline mt-3">  Delete</div>
            </div>


            <div className='grid grid-cols-5 text-sm text-[#0e5475]'>
                <div className='col-span-1 border border-[#0e5475] rounded-l-lg py-5 p-3 mt-4'>
                    Product Name*
                    <input onChange={(e) => credentials.productName = e.target.value} className='border border-[#0e5475] rounded-lg p-1 mt-1 ' />
                </div>
                <div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Bank Name*
                    <Select styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'white',
                            border: "1 solid #0e5475", borderColor: "#0e5475"
                        }),
                    }} onChange={(e) => credentials.bankName = e.value} options={DataBank.map((item, index) => (
                        { value: item._id, label: item.bankName }
                    ))} isRtl={false} className="basic-single"

                    />
                </div>
                <div className='col-span-1  border border-[#0e5475] py-5 p-3 mt-4'>
                    Top Offer<br/>
                                        <input type='checkbox' onChange={(e) => credentials.topOffer = e.target.checked} className=' w-[30px] h-[30px] border border-[#0e5475] rounded-lg p-1 ' />

                </div>
                <div className='col-span-2 rounded-r-lg border border-[#0e5475] py-5 p-3 mt-4'>
                    product Category*<br />
                    <div className='grid grid-cols-3'>

                        {
                            Data.map(item =>
                                <div onClick={() => { setSelectedItem(item._id); credentials.productCategory = item._id }} id={item._id} className='m-2 p-0.5 border-[#0e5475] border rounded-lg'
                                    style={item._id === selectedItem ? { background: "white", borderColor: "#f6921e" } : { background: 'transparent' }} >
                                    <div className='flex justify-center'>{item.title}</div></div>
                            )
                        }


                    </div>
                </div>
                <ToastContainer />

            </div>
            <div className='grid grid-cols-4 text-sm text-[#0e5475]'>
                <div className='col-span-1 border border-[#0e5475] rounded-l-lg py-5 p-3 mt-4'>
                    APRC
                    Representative<br />
                    <input type='number' onChange={(e) => credentials.APRC = e.target.value} className='border border-[#0e5475] rounded-lg p-1 mt-1 ' />
                </div>
                <div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Profite
                    Rate
                    <input type='number' onChange={(e) => credentials.ProfiteRate = e.target.value} className='border border-[#0e5475] rounded-lg p-1 mt-1 ' />

                </div>
                <div className='col-span-1 border border-[#0e5475] py-5 p-3 mt-4'>
                    Total
                    Payment
                    <input type='number' onChange={(e) => credentials.totalPayment = e.target.value} className='border border-[#0e5475] rounded-lg p-1 mt-1 ' />

                </div>
                <div className='col-span-1 rounded-r-lg border border-[#0e5475] py-5 p-3 mt-4'>
                    Monthly
                    Installment<br />

                    <input type='number' onChange={(e) => credentials.monthlyInstallment = e.target.value} className='border border-[#0e5475] rounded-lg p-1 mt-1 ' />
                </div>
                <ToastContainer />

            </div>
            <div className='text-white  text-sm mt-8 grid grid-cols-8'>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Attribute
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Display&nbsp;Name
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Data&nbsp;Type
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Look&nbsp;Up
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Min&nbsp;Value
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Max&nbsp;Value
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-white'>
                    Unique
                </div>
                <div className='bg-[#0e5475] p-4 border border-l-transparent'>
                    <div className="  mr-2   flex text-white justify-center cursor-pointer rounded-xl " >
                        <div className='bg-[#f6921e] rounded-lg px-4  h-min  '> + Add</div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-8'>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 p-4 border border-[#0e5475]'><input className='border border-[#0e5475] rounded-lg' type='text' style={{ width: "90px" }} /></div>
                <div className='col-span-1 flex justify-center border border-[#0e5475]'><input className='border mt-4 flex justify-center border-[#0e5475] rounded-lg' type='checkbox' style={{ width: "20px", height: "20px" }} /></div>
                <div className='col-span-1 flex justify-center p-4 border border-[#0e5475]'><TbTrashXFilled color='#f6921e' size={28} /> </div>

            </div>

        </div>
    )
}

export default Product