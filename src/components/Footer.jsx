import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const [locationPath, setLocationPath] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === '/sign-up' || pathname === '/sign-in' || pathname === '/verify-code') {
      setLocationPath(false);
    } else {
      setLocationPath(true);
    }
  }, [pathname]);

  return (
    <>
      <div>
        {locationPath && <footer className='h-[100px] bg-main'>
            <div className='max-w-[1440px] h-full mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center'>
              <div className='flex items-center gap-12'>
                <img className='w-24' src="/logo.png" alt="" />
                <p className=' text-mutedtxt relative top-1 hidden md:block'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>IT LIVE 2024</div>
            </div>
          </footer>}
      </div>
    </>
  );
}
