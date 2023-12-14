import React, { useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { AiOutlinePlus } from "react-icons/ai";
import AddProduct from './addProduct';
import ProductServices from '../../service/serviceProduct';
import { SwishSpinner } from "react-spinners-kit";
import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';




const Product = () => {
    var ServicesProduct = new ProductServices;
    const [loading, setLoading] = useState(false);

    const gridRef = useRef();
    const [rowData, setRowData] = useState();
    const [ColumnDefs, setColumnDefs] = useState([
        { headerName: "Product Name", field: "productName", rowDrag: true, },
        { headerName: "Bank Name", field: "bankName.bankName", width: 150 },
        { headerName: "Product Type", field: "productCategory.title" },
        {
            headerName: "Look up", field: "topOffer",

            cellRenderer: params => {
                return "off"
            }, width: 100
        },
        {
            headerName: "Top Offer", field: "topOffer", cellRenderer: params => {
                // put the value in bold
                if (params.value == true) {
                    return "on"
                } else return "off"
                // return <>Value is <b> {params.value} </b> </>;
            }, width: 100
        },
        {
            headerName: "", field: "_id", width: 100,
            cellRenderer: params => {
                return <Dropdown className='z-50'
                    arrowIcon={false}
                    inline
                    label={<BsThreeDots size={25} />}
                >

                    <ul className='mx-4 overflow-visible' class="py-0" aria-labelledby="dropdown">
                        <li>
                            <Link to="/dashboard/product/edit" state={{ from: params.value }}>    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-6 py-0.5">Edit</a></Link>
                        </li>
                        <hr color='#0e5475' />
                        <li onClick={() => DeleteData(params.value)}>
                            <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-6 py-0.5">Delete</a>
                        </li>
                    </ul>
                </Dropdown>
            }
        }





    ])





    useEffect(() => {
        fetchData();
    }, []);

    const DeleteData = async (id) => {
        const response = await ServicesProduct.deleteProduct(id);
        fetchData();

    };

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        try{
            

            
            if(user["country"]!=null){
                const response = await ServicesProduct.getAllProduct().then((res) => setData(res.data.filter((item) => item.bankName.country == user["country"])));
               
            }else {
                const response = await ServicesProduct.getAllProduct();
                setData(response.data);
      
            }
        }catch(e){}
      
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 2000);


    };


    const [data, setData] = useState([]);
    const columns = () => [


        {
            name: <input type="checkbox" />,
            selector: "data1",
            sortable: false,
            width: '10%',
            cell: d => {
                return <input type="checkbox" />
            }

        },
        {
            name: "Product Name",
            selector: "productName",
            sortable: true,


        },
        {
            name: "Bank Name",
            selector: "bankName.bankName",
            sortable: true,
            cell: d => {
                if (d.bankName != null) {
                    return d.bankName.bankName
                } else return ""
            }

        },
        {
            name: "Product Type",
            selector: "productCategory.title",
            sortable: true,

        },
        {
            name: "Look up",
            selector: "data4",
            sortable: true,
            cell: d => {
                return "On"
            }

        },
        {
            name: "Top Offer",
            selector: "data5",
            sortable: true,
            cell: d => {
                return (d.topOffer == true) ? "on" : "off"
            }

        },
        {
            name: "",
            selector: "statut",
            sortable: true,
            cell: d => {
                return <Dropdown className='z-50'
                    arrowIcon={false}
                    inline
                    label={<BsThreeDots size={25} />}
                >

                    <ul className='mx-4 overflow-visible' class="py-0" aria-labelledby="dropdown">
                        <li>
                            <Link to="/dashboard/product/edit" state={{ from: d._id }}>    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-6 py-0.5">Edit</a></Link>
                        </li>
                        <hr color='#0e5475' />
                        <li onClick={() => DeleteData(d._id)}>
                            <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-6 py-0.5">Delete</a>
                        </li>
                    </ul>
                </Dropdown>
                //<BsThreeDots size={25} />
            }

        },


    ];
    const tableData = {
        columns: columns(),
        data: data,
        filter: false,
        print: false,

        export: false
    };
    const tableCustomStyles = {
        headRow: {
            style: {
                color: 'white',
                backgroundColor: '#0e5475',
                height: '50px'
            },
        },
        rows: {
            style: {
                color: "STRIPEDCOLOR",
                backgroundColor: "STRIPEDCOLOR",
                color: '#0e5475'
            },
            stripedStyle: {
                color: "NORMALCOLOR",
                backgroundColor: "NORMALCOLOR"
            }
        }
    }


    return (
        <div>
            {(loading) ?
                <div>

                    <div className="mx-16">
                        <div className="grid grid-cols-7">
                            <div className="col-span-5"><p className="text-[#0e5475] text-2xl">ALL Products</p>
                                <div className="flex"><p className="font-semibold"> {data.length} Total,</p><p className="text-[#c5c5c5]">&nbsp;Product available on the web application</p></div>
                            </div>
                            <a href='/dashboard/product/add' className="bg-[#f6921e] px-4 mr-2  mt-4 flex text-white  p-2 rounded-xl"><AiOutlinePlus size={20} className='mr-2 ' />
                                <button > Add&nbsp;Product
                                </button>
                            </a>
                            <div className="mt-6 text-[#c5c5c5]">  Delete</div>
                        </div>
                        <DataTableExtensions {...tableData}>
                            <DataTable
                                columns={columns()}
                                data={data}
                                noHeader
                                defaultSortAsc={true}
                                pagination
                                highlightOnHover
                                dense
                                customStyles={tableCustomStyles}
                            />
                        </DataTableExtensions>
                        <div className="ag-theme-alpine hidden bg-black" style={{ width: "100%", height: 500 }}>
                            <AgGridReact ref={gridRef}
                                rowData={rowData}
                                rowDragManaged={true}
                                columnDefs={ColumnDefs}
                            /></div>
                    </div>
                </div> : <div >

                    <div className="spinnerContainer">

                        <div className=" mt-[15%] justify-center flex h-screen">
                            <SwishSpinner size={70} frontColor="#f6921e"
                                backColor="white" loading={true} />
                        </div>

                    </div>   </div>}
        </div>
    )
}

export default Product  