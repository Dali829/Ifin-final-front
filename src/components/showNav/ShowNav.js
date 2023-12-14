import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNav = ({children}) => {
    const location = useLocation();
    const [showNav, setShowNav]= useState(false);

    useEffect(()=>{
        if(location.pathname.includes('/dashboard') || location.pathname=='/login' || location.pathname=='/register'){
            setShowNav(false)
        }
       
      else{
          setShowNav(true)
      }
    }, [location]);

  return (
    <div>{showNav && children}</div>
  )
}

export default ShowNav