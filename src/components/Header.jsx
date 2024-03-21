import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { IoLanguage } from "react-icons/io5";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../layout/MainLayout";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  const { isDrawerOpen, openDrawer } = useContext(ProjectContext);
  const [activeNav, setActiveNav] = useState('/');
  const [isUzbek, setIsUzbek] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveNav(pathname);
  }, [location]);

  return (    
    <div className="w-full h-20 shadow-sm bg-[#FAFAFA] z-50">
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 flex h-full items-center justify-between text-blue-gray-900">
          <NavLink to="/" className="w-24 relative right-3">
            <img src="/logo.png" alt="" />
          </NavLink>

          <div className="hidden md:flex gap-12 font-semibold">
            <NavLink to="/" className={`${activeNav == "/" ? "text-cherry" : null}  p-1 hover:text-cherry hover:transition`}>
              <span>Bosh menu</span>
              {activeNav == '/' && <span className="block h-[3px] w-full bg-cherry"></span>}
            </NavLink>
            <NavLink to="/courses" className={`${activeNav == "/courses" ? "text-cherry" : null}  p-1 hover:text-cherry hover:transition`}>
              <span>Kurslar</span>
              {activeNav == '/courses' && <span className="block h-[3px] w-full bg-cherry"></span>}
            </NavLink>
            <NavLink to="/contact" className={`${activeNav == "/contact" ? "text-cherry" : null}  p-1 hover:text-cherry hover:transition`}>
              <span>Bog'lanish</span>
              {activeNav == '/contact' && <span className="block h-[3px] w-full bg-cherry"></span>}
            </NavLink>
            

          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-x-2">
              <div>
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" className="border-2">
                    <IoLanguage className="text-xl"/>
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={() => setIsUzbek(false)} className={`${!isUzbek ? 'text-cherry': null} pl-5 text-[15px]`}>Ruscha</MenuItem>
                  <MenuItem onClick={() => setIsUzbek(true)} className={`${isUzbek ? 'text-cherry': null} pl-5 text-[15px]`}>O'zbekcha</MenuItem>
                </MenuList>
              </Menu>
              </div>
              <Link to="sign-up">
                <Button
                  variant="text"
                  className="hidden lg:inline-block text-cherry"
                >
                  <span>Ro'yxatdan o'tish</span>
                </Button>
              </Link>
              <Link to="sign-in">
                <Button
                  className="items-center bg-cherry hidden lg:flex"
                >
                  <span className="hidden lg:inline-block">Kirish</span>
                  <FaArrowRight className="ml-2 font-bold" />
                </Button>
              </Link>
            </div>
            <IconButton
              className="block lg:hidden"
              variant="text"
              size="lg"
              onClick={openDrawer}
            >
              {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2" />
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-2" />
              )}
            </IconButton>
          </div>
        </div>
      </div>
  );
}
