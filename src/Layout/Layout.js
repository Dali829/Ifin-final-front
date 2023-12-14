import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../Pages/Accueil'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShowNav from '../components/showNav/ShowNav';
import ShowFooter from '../components/showNav/ShowFooter';
import HomeDashboard from '../Layout/LayoutDash';
import Login from '../Pages/Login';
import Register from '../Pages/registre';
import CreditCard from '../Pages/creditCard';
import Compaigne from '../Pages/compaigne';
import Search from '../Pages/search';
import Bank from "../components/dashboard/Bank";
import Pruduct from "../components/dashboard/Product";
import Admins from "../components/dashboard/admins";
import Compaignes from "../components/dashboard/Compaigns";
import Forms from "../components/dashboard/Forms";
import AddBank from "../components/dashboard/addBank";
import AddPruduct from "../components/dashboard/addProduct";
import AddCompaignes from "../components/dashboard/addCompaigns";
import AddForms from "../components/dashboard/addForm";
import ProductHome from '../Pages/productPage'
import Sme from "../Pages/sme"
import BecomeABankCustomer from '../Pages/become_a_bank_customer'
import BecomeAPartner from '../Pages/becomeAPartner'
import EditForm from '../components/dashboard/editForm'
import EditCompaigne from '../components/dashboard/editCompaigne';
import EditProduct from '../components/dashboard/editProduct';
import EditBank from '../components/dashboard/editBank';
import AddAdmin from "../components/dashboard/addAdmin";
import EditAdmin from "../components/dashboard/editAdmin";










const Layout = () => {
 
  return (
    <>

      <div >
        <Router>
          <ShowNav>
            <Navbar />
          </ShowNav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/bank" element={<HomeDashboard><Bank></Bank></HomeDashboard>} />
            <Route path="/dashboard/product" element={<HomeDashboard><Pruduct></Pruduct></HomeDashboard>} />
            <Route path="/dashboard/admins" element={<HomeDashboard><Admins></Admins></HomeDashboard>} />
            <Route path="/dashboard/compaigne" element={<HomeDashboard><Compaignes></Compaignes></HomeDashboard>} />
            <Route path="/dashboard/form" element={<HomeDashboard><Forms></Forms></HomeDashboard>} />
            <Route path="/dashboard/bank/add" element={<HomeDashboard><AddBank></AddBank></HomeDashboard>} />
            <Route path="/dashboard/bank/edit" element={<HomeDashboard><EditBank></EditBank></HomeDashboard>} />
            <Route path="/dashboard/product/add" element={<HomeDashboard><AddPruduct></AddPruduct></HomeDashboard>} />
            <Route path="/dashboard/product/edit" element={<HomeDashboard><EditProduct></EditProduct></HomeDashboard>} />
            <Route path="/dashboard/compaigne/add" element={<HomeDashboard><AddCompaignes></AddCompaignes></HomeDashboard>} />
            <Route path="/dashboard/admin/add" element={<HomeDashboard><AddAdmin></AddAdmin></HomeDashboard>} />
            <Route path="/dashboard/compaigne/edit" element={<HomeDashboard><EditCompaigne></EditCompaigne></HomeDashboard>} />
            <Route path="/dashboard/admin/edit" element={<HomeDashboard><EditAdmin></EditAdmin></HomeDashboard>} />
            <Route path="/dashboard/form/add" element={<HomeDashboard><AddForms></AddForms></HomeDashboard>} />
            <Route path="/dashboard/form/edit" element={<HomeDashboard><EditForm></EditForm></HomeDashboard>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/credit-card" element={<CreditCard />} />
            <Route path="/compaigne" element={<Compaigne />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product" element={<ProductHome />} />
            <Route path="/sme" element={<Sme />} />
            <Route path="/become-a-bank-customer" element={<BecomeABankCustomer />} />
            <Route path="/become-a-partner" element={<BecomeAPartner />} />






          </Routes>
          <ShowFooter>
            <Footer />
          </ShowFooter>
        </Router>
      </div>

    </>
  )
}

export default Layout;