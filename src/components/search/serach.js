import React, { useEffect, useState, useParams } from 'react'
import Slider from "@mui/material/Slider"
import "react-data-table-component-extensions/dist/index.css";
import Bank from '../../assets/dhia/Saudi_National_Bank_Logo.svg.png'
import LogoTork from '../../assets/turkish_bank.png'
import { IoIosArrowUp, IoMdSwitch } from 'react-icons/io'
import { MdArrowForwardIos } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai';
import ProductServices from '../../service/serviceProduct';
import CategoryServices from '../../service/serviceCategory';
import { Link, useLocation } from "react-router-dom";
import { SwishSpinner } from "react-spinners-kit";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdExpandLess } from "react-icons/md";





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Search = () => {
    var ServiceProduct = new ProductServices;
    var ServiceCategory = new CategoryServices
    useEffect(() => {
        fetchData();
        fetchDataCaregorie();
    }, []);

    function filtrer(itemId) {
        setListProduct(ListProduct1.filter((item) => item.productCategory._id == itemId))
    }

    function filtrerNumber() {
        
        setListProduct(ListProduct2.filter((item) => item.totalPayment < value1))
    }

    const [loading, setLoading] = useState(false);
    const [ListProduct, setListProduct] = useState([]);
    const [ListProduct1, setListProduct1] = useState([]);
    const [ListProduct2, setListProduct2] = useState([]);


    const fetchData = () => {
        console.log("from")

        console.log(from)
        ServiceProduct.getAllProduct().then((res) => {
            if (from !=null) {
                setListProduct2(res.data);

                setListProduct(res.data.filter((item) => item.totalPayment == from)); setListProduct1(res.data.filter((item) => item.totalPayment == from))
            }
            else {
                setListProduct(res.data); setListProduct1(res.data);
                setListProduct2(res.data)

            }

        }

        );
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

    };
    const fetchData2 = () => {
        ServiceProduct.getAllProduct().then((res) => {
           
                setListProduct(res.data); setListProduct1(res.data)

            

        }

        );
       
            setLoading(true);
       

    };
    const location = useLocation()

    const fetchDataCaregorie = () => {
        ServiceCategory.getAllCatogory().then((res) => setProduct(res.data));
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

    };
    const [value1, setValue1] = useState(0);
    const [moreAc, setMoreAc] = useState(false);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { from } = location.state
    const [indexProd, setIndexProd] = useState(1);
    const [Product, setProduct] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])


    const Data = [
        {
            index: 1,
            name: "Personal Loan",
            link: '#'

        },
        {
            index: 2,
            name: "Sub-Product",
            link: '#'
        },
        {
            index: 3,
            name: "Sub-Product",
            link: '#'
        },
        {
            index: 4,
            name: "Sub-Product",
            link: '#'
        }, {
            index: 4,
            name: "Sub-Product",
            link: '#'
        }
    ]
    const [indexSubProd, setIndexSubProd] = useState(1);
    const SubProduct = [
        {
            index: 1,
            name: "Personal Loan",
            link: '#'

        },
        {
            index: 2,
            name: "Sub-Product",
            link: '#'
        },
        {
            index: 3,
            name: "Sub-Product",
            link: '#'
        },
        {
            index: 4,
            name: "Sub-Product",
            link: '#'
        },
    ]

   const removeItem=(e)=> {
        var array = [...selectedProduct]; 
        var index = array.indexOf(e)
        if (index !== -1) {
          array.splice(index, 1);
          setSelectedProduct(array);
        }
      }

    const [showModal, setShowModal] = useState(false);

    const [indexListProd, setIndexListProd] = useState(1);

    return (<div>{(loading) ?
        <div className='w-full bg-[#EFF1F2]'>
            <div className="mx-10">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 bg-[#f6921e] p-5 rounded-2xl h-min">
                        <p className="text-white text-xl">SEARCH / FILTERS</p>


                        <p className='text-black text-base mt-5'>Product</p>
                        <div className='grid grid-cols-2 mb-4 gap-3'>
                            {
                                Product.map(item =>
                                    <p onClick={() => { setIndexProd(item._id); filtrer(item._id) }} style={item._id === indexProd ? { backgroundColor: "white", color: "#f6921e" } : { backgroundColor: "transparent", color: "#0e5475" }} className='w-full p-1.5 rounded-lg cursor-pointer'>
                                        <p className='text-sm'>{item.title}</p>
                                    </p>
                                )
                            }
                        </div>


                        <p className='text-black text-base mt-2'>Sub-Product</p>
                        <div className='grid grid-cols-2 mb-4 gap-3'>
                            {
                                SubProduct.map(item =>
                                    <p onClick={() => setIndexSubProd(item.index)} style={item.index === indexSubProd ? { backgroundColor: "white", color: "#f6921e" } : { backgroundColor: "transparent", color: "#0e5475" }} className='w-full p-1.5 rounded-lg cursor-pointer'>
                                        <p className='text-sm'>{item.name}</p>
                                    </p>
                                )
                            }
                        </div>


                        <p className='text-black text-base mt-2'>Min Loan Amount :</p>
                        <div className='flex mx-2'>
                            <Slider className='black'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                max={20}
                                step={0.1}
                                onChange={(_, v) => {setValue1(v); filtrerNumber() }}


                                valueLabelDisplay="auto"

                                disableSwap

                            />
                            <p className='text-[#0e5475] bg-white ml-2 p-0.5 m-0.5'>{value1}</p>
                        </div>
                        <p className='text-black text-base mt-2'>Filtre 1 :</p>
                        <div className='text-sm'>
                            <div className='flex'>
                                <input type='checkbox' className='mr-1 mt-0.5' style={{ width: 15, height: 15 }} />
                                lorem ipsum
                            </div>
                            <div className='flex'>
                                <input type='checkbox' className='mr-1 mt-0.5' style={{ width: 15, height: 15 }} />
                                lorem ipsum
                            </div>
                            <div className='flex'>
                                <input type='checkbox' className='mr-1 mt-0.5' style={{ width: 15, height: 15 }} />
                                lorem ipsum
                            </div>
                            <div className='flex'>
                                <input type='checkbox' className='mr-1 mt-0.5' style={{ width: 15, height: 15 }} />
                                lorem ipsum
                            </div>

                        </div>


                    </div>
                    <div className='col-span-3'>

                        <div className='grid grid-cols-9'>
                            <div className='col-span-7 text-sm'>

                                {
                                    ListProduct.map(item =>
                                        <div className='w-full bg-white m-2 p-3'>
                                            <div className="grid grid-cols-7 gap-2 ">
                                                <div className='col-span-2'>
                                                    <div className='text-transparent'>.</div>
                                                    <img className='w-[80%] ' src={item?.bankName?.bankLogo} alt='/' />

                                                    <div className='text-black mt-6'>{item?.bankName?.bankName} : Personal Loan</div>

                                                </div>
                                                <div className='col-span-1 text-[#0e5475]'>APRC<br /> Representative
                                                    <div className='text-black mt-6'>{item.APRC} %</div>

                                                </div>

                                                <div className='col-span-1 text-[#0E5475]'>Profite <br /> Rate
                                                    <div className='text-black mt-6'>{item.ProfiteRate} %</div>
                                                </div>
                                                <div className='col-span-1 text-[#0e5475]'>Monthly <br />Installment
                                                    <div className='text-black mt-6'>$ {item.monthlyInstallment} %</div>

                                                </div>
                                                <div className='col-span-1 text-[#0e5475]'>Total<br /> Payment
                                                    <div className='text-black mt-6'>$ {item.totalPayment} %</div>

                                                </div>
                                                <div className='col-span-1 '>
                                                    <div className='text-transparent'>.</div>
                                                    <div className="bg-[#f6921e] text-white   flex justify-center p-2 rounded-xl">
                                                        <Link to="/product" state={{ from: item._id }}>  <button >Apply
                                                        </button></Link>
                                                    </div>



                                                </div>


                                            </div>

                                            <Card className='w-full'>

                                                <CardActions className='border-none' disableSpacing>

                                                    <div className='w-full flex justify-end'>   <div className='text-[#0e5475]  ml-2'>more info
                                                        <ExpandMore
                                                            expand={expanded}
                                                            onClick={handleExpandClick}
                                                            aria-expanded={expanded}
                                                            aria-label="show more"
                                                        >


                                                            <MdExpandLess />



                                                        </ExpandMore></div></div>
                                                </CardActions>
                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                    <CardContent>
                                                        <div className="grid grid-cols-7 gap-2 ">
                                                            <div className='col-span-2'>



                                                            </div>
                                                            <div className='col-span-1 text-[#0e5475]'>

                                                            </div>

                                                            <div className='col-span-1 text-[#0E5475]'>
                                                                <div className='mt-6'>Total <br /> Profit</div>
                                                            </div>
                                                            <div className='col-span-1 text-[#0e5475]'>
                                                                <div className='mt-6'> <br /> Profit</div>
                                                            </div>
                                                            <div className='col-span-1 text-[#0e5475]'>
                                                                <div className='mt-6'>
                                                                    Other Fees :<br /> PaperWork : <br /> Fees :
                                                                </div>
                                                            </div>
                                                            <div className='col-span-1 '>




                                                            </div>
                                                            <div style={(moreAc) ? { visibility: "hidden" } : { visibility: "visible" }} className=' flex justify-between col-span-full'><p className='mt-0.5'> {item?.bankName?.bankName} : Personal Loan</p>


                                                                <div className='flex' >
                                                                    <input onChange={(e) => {if(e.target.checked){setSelectedProduct(oldArray => [...oldArray, item])}else(removeItem(item))}} type='checkbox' className='mr-1 accent-[#f6921e] mt-0.5 bg-red-600 w-[20px] h-[20px]' />
                                                                    <div className='bg-[#f6921e] p-0.5  text-white  rounded-sm  cursor-pointer' onClick={() => { console.log(selectedProduct); setShowModal(true) }}>
                                                                        compare
                                                                    </div>


                                                                </div>
                                                            </div>

                                                        </div>

                                                    </CardContent>
                                                </Collapse>
                                            </Card>

                                        </div>

                                    )
                                }




                            </div>
                            <div className='col-span-2 ml-4 text-sm w-full  bg-white p-2 h-min py-4 mt-2 rounded-br-3xl' >
                                <p className='flex justify-end text-[#f6921e]'> Announce</p>
                                <img className='w-[80%] grayscale my-2 ' src={LogoTork} alt='/' />
                                <p className='text-[#0e5475] text-lg'>Lorem Ipsum</p>
                                <div className='text-sm text-[#D9D9D9]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>

                                <div className="bg-[#f6921e] w-min text-white text-sm  flex  p-2 mt-2 rounded-xl">
                                    <button >See&nbsp;More
                                    </button><MdArrowForwardIos size={10} className='ml-1 mt-1' />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
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
                                        <div className='grid grid-cols-6'>
                                            <div>
                                                <div className='h-[50px] ml-4'>
                                                    <IoMdSwitch color='#0e5475' size={40} />

                                                </div>
                                                <div className='h-[50px] ml-4 text-xl'>
                                                    Compare Our <br /> Product
                                                </div>
                                                <div className='h-[50px]'>

                                                </div>
                                                <div className='h-[50px] ml-4 '>
                                                    Monthly<br /> Installment
                                                </div>
                                                <div className='h-[50px] pt-1 text-white pl-4 bg-[#0e5475]'>
                                                    Total<br /> Payment
                                                </div>
                                                <div className='h-[50px] ml-4 '>
                                                    APRC <br />Respresentative
                                                </div>
                                                <div className='h-[50px] pt-1 text-white pl-4 bg-[#0e5475] '>
                                                    Profite<br /> Rate
                                                </div>
                                                <div className='h-[50px] ml-4 '>

                                                </div>
                                            </div>


                                            {
                                                selectedProduct.map(item =>
                                                    <div>
                                                        <div className='h-[50px] flex justify-center'>
                                                            <img className='w-[70%] ' src={item?.bankName?.bankLogo} alt='/' />

                                                        </div>
                                                        <div className='h-[50px] flex justify-center'>
                                                            {item?.bankName?.bankName}
                                                        </div>
                                                        <div className='h-[50px] flex justify-center'>

                                                        </div>
                                                        <div className='h-[50px] flex justify-center'>
                                                            $ {item.monthlyInstallment}
                                                        </div>
                                                        <div className='h-[50px] text-white pt-1 flex justify-center bg-[#0e5475]'>
                                                            $ $ {item.totalPayment}
                                                        </div>
                                                        <div className='h-[50px] flex justify-center'>
                                                            $ {item.APRC} %
                                                        </div>
                                                        <div className='h-[50px] flex justify-center text-white pt-1 bg-[#0e5475]'>
                                                            {item.ProfiteRate} %
                                                        </div>
                                                        <div className='h-[50px]'>
                                                            <div className=" px-1 mr-2   flex text-white justify-center cursor-pointer  rounded-xl ">
                                                                <div className='bg-[#f6921e] rounded-lg px-4 py-1 h-min mt-2 '>Apply</div>
                                                            </div>
                                                            <p onClick={()=>removeItem(item)} className='text-center mt-2 underline'>
                                                                change product
                                                            </p>
                                                            
                                                        </div>
                                                    </div>)
                                            }


                                        </div>

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

            </div>
        </div> : <div >

            <div className="spinnerContainer">

                <div className=" mt-[15%] justify-center flex h-screen">
                    <SwishSpinner size={70} frontColor="#f6921e"
                        backColor="white" loading={true} />
                </div>

            </div>   </div>}</div>
    )
}

export default Search