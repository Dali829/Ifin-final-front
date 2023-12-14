import React, { useContext, useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import Logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { CgEnter } from "react-icons/cg";
import { FaUser, FaWpforms, FaNewspaper, FaHotel } from 'react-icons/fa'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { AuthContext } from '../context/AuthContext.js';






export default function HomeDashboard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error, dispatch } = useContext(AuthContext);


  const handleClickDeconnecter = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate('/')

  };

  const Data = [
    {
      index: 1,
      name: "Product",
      icon: <BiMoneyWithdraw className="w-[27px] h-[27px]" />,
      link: '/dashboard/product'

    },
    {
      index: 2,
      name: "Bank",
      icon: <FaHotel className="w-[27px] h-[27px]" />,
      link: "/dashboard/bank"

    },
    {
      index: 3,
      name: "Admins",
      icon: <FaUser className="w-[27px] h-[27px]" />,
      link: "/dashboard/admins"

    }, {
      index: 4,
      name: "Campaigns",
      icon: <FaNewspaper className="w-[27px] h-[27px]" />,
      link: "/dashboard/compaigne"

    }, {
      index: 5,
      name: "Forms",
      icon: <FaWpforms className="w-[27px] h-[27px]" />,
      link: "/dashboard/form"

    }
  ]
  const [selectedItem, setSelectedItem] = useState(1);
  return <div className="w-full mx-auto grid md:grid-cols-10">
    <Card className="h-[calc(100vh)] w-full  shadow-xl shadow-blue-gray-900/5 col-span-2">
      <a href="/"><img className="m-4 w-[80%]" src={Logo} alt='/' /></a>
      <hr className="bg-black h-0.5 mb-8 mx-6" />
      <div className="mx-6">
        <List>
          {
            Data.map(item =>
              <ListItem id={item.index}
                onClick={() => { setSelectedItem(item.index); navigate(item.link) }} className="text-[#0e5475] rounded-3xl mb-2"
                style={location.pathname.includes(item.link) ? { background: '#f6921e', color: 'white' } : { background: 'transparent' }} >
                <ListItemPrefix>
                  <div className=" mr-2" >{item.icon}</div>
                </ListItemPrefix>
                {item.name}
              </ListItem>)
          }
        </List></div>
    </Card>
    <div className="w-full bg-[#f4f4f4] col-span-8">
      <div className="flex justify-end text-white">

        <div  onClick={handleClickDeconnecter} className="bg-[#f6921e] px-4 mx-6 mt-4 flex  p-2 rounded-xl"><CgEnter size={20} className='mr-2 mt-1' />
          <button >Log Out
          </button>
        </div>


      </div>
      {children}



    </div>

  </div>
}