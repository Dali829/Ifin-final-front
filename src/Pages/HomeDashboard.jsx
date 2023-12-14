/*import React, { useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { CgEnter } from "react-icons/cg";
import { FaUser,FaWpforms,FaNewspaper, FaHotel} from 'react-icons/fa'
import {BiMoneyWithdraw}from 'react-icons/bi'
import Product from "../components/dashboard/Product";
import Bank from "../components/dashboard/Bank";
import Compaigns from "../components/dashboard/Compaigns";
import Form from '../components/dashboard/Forms'
import Admin from '../components/dashboard/admins'





export default function HomeDashboard() {
  const navigate = useNavigate();

  

  const Data = [
    {
      index: 1,
      name: "Product",
      icon: <BiMoneyWithdraw className="w-[27px] h-[27px]"/>,
      link:'#'

    },
    {
      index: 2,
      name: "Bank",
      icon: <FaHotel className="w-[27px] h-[27px]"/>,
      link:'#'

    },
    {
      index: 3,
      name: "Admins",
      icon: <FaUser className="w-[27px] h-[27px]" />,
      link:'#'

    }, {
      index: 4,
      name: "Campaigns",
      icon: <FaNewspaper className="w-[27px] h-[27px]" />,
      link:'#'

    }, {
      index: 5,
      name: "Forms",
      icon: <FaWpforms className="w-[27px] h-[27px]"/>,
      link:'#'

    }
  ]
  const [selectedItem, setSelectedItem] = useState(1);
  return <div className="w-full mx-auto grid md:grid-cols-10">
    <Card className="h-[calc(100vh)] w-full  shadow-xl shadow-blue-gray-900/5 col-span-2">
      <img className="m-4 w-[80%]" src={Logo} alt='/' />
      <hr className="bg-black h-0.5 mb-8 mx-6"/>
     <div className="mx-6">
      <List>
        {
          Data.map(item =>
            <ListItem id={item.index}
              onClick={() => {setSelectedItem(item.index);navigate(item.link)}} className="text-[#0e5475] rounded-3xl mb-2"
              style={item.index === selectedItem ? { background: '#f6921e', color: 'white' } : { background: 'transparent' }} >
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

        <div className="bg-[#f6921e] px-4 mx-6 mt-4 flex  p-2 rounded-xl"><CgEnter size={20} className='mr-2 mt-1' />
          <button >Log Out
          </button>
        </div>

        
      </div>
      {selectedItem==1&& <Product/>}
      {selectedItem==2&& <Bank/>}
      {selectedItem==3&& <Admin/>}
      {selectedItem==4&& <Compaigns/>}
      {selectedItem==5&& <Form/>}


     
    </div>

  </div>
}*/