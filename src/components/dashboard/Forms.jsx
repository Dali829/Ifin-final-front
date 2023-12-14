import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { AiOutlinePlus } from "react-icons/ai";
import AddForm from "./addForm";
import FormServices from '../../service/serviceForm';
import { SwishSpinner } from "react-spinners-kit";
import {  Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";


const Form = () => {
    var ServicesForm = new FormServices;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const DeleteData = async (id) => {
        const response = await ServicesForm.deleteForm(id);
        fetchData();

    };


    const fetchData = async () => {
        const response = await ServicesForm.getAllForm();
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

        setData(response.data);
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
            name: "form Title",
            selector: "answer.title",
            sortable: true,
            cell: d => {if(d.answer!=null)
                return d.answer.title
            }

        },
        {
            name: "Questions",
            selector: "question",
            sortable: true,

        },


        {
            name: "",
            selector: "statut",
            sortable: true,
            cell: d => {
                return  <Dropdown className='z-50'
                arrowIcon={false}
                inline
                label={ <BsThreeDots size={25} />}
              >
                
                <ul className='mx-4 overflow-visible' class="py-0" aria-labelledby="dropdown">
                  <li>
                  <Link to="/dashboard/form/edit" state={{ from: d._id }}>   <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-6 py-0.5">Edit</a>
                  </Link>
                  </li>
                  <hr color='#0e5475'/>
                  <li onClick={()=>DeleteData(d._id)}>
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


    return (<div>
        {(loading) ?
            <div>
                <div className="mx-16">
                    <div className="grid grid-cols-7">
                        <div className="col-span-5"><p className="text-[#0e5475] text-2xl">ALL Forms</p>
                            <div className="flex"><p className="font-semibold"> {data.length} Total,</p><p className="text-[#c5c5c5]"> &nbsp;Form available on the web application</p></div>
                        </div>
                        <a href='/dashboard/form/add' className="bg-[#f6921e] px-4 mr-2  mt-4 flex text-white  p-2 rounded-xl"><AiOutlinePlus size={20} className='mr-2 ' />
                            <button > Add&nbsp;Form
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

export default Form