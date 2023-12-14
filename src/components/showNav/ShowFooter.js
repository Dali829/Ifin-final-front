import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowFooter = ({children}) => {
    const location = useLocation();
    const [showNav, setShowNav]= useState(false);

    useEffect(()=>{
       
        if(location.pathname.includes('/dashboard')){
          setShowNav(false)
      }else{
          setShowNav(true)
      }
    }, [location]);

  return (
    <div>{showNav && children}</div>
  )
}

export default ShowFooter