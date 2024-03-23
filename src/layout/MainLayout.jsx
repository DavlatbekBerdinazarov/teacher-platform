import React, { createContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import { SidebarWithBurgerMenu } from '../components/global/SidebarWithBurgerMenu';

export const ProjectContext = createContext();
export default function MainLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // status for auth 
  const [isAuth, setIsAuth] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <ProjectContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, closeDrawer, openDrawer, setIsAuth, isAuth }}>
        <div className='font-mont font-normal '>
            <SidebarWithBurgerMenu/>    
            <Header />
                <Outlet />
            <Footer />
        </div>
    </ProjectContext.Provider>
  )
}
