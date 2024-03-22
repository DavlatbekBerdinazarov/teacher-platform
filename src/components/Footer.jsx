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
        {locationPath && <footer>Footer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quos rem inventore!</footer>}
      </div>
    </>
  );
}
