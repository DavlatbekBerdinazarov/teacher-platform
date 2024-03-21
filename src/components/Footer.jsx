import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const [locationPath, setLocationPath] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname == '/sign-up' || '/sign-in' || 'verify-code') {
      setLocationPath(false);
    }
  }, [location]);
  return (
    <>
      {locationPath && <div>Footer</div>}
    </>
  )
}
