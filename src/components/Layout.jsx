import Header from './Header';
import SidePanel from './SidePanel';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

function Layout() {
	const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

	return (
    <>
			<Header handleMenuToggle={handleMenuToggle} />
      <SidePanel drawerOpen={drawerOpen} toggleMenu={handleMenuToggle} />
			<Outlet />
    </>
	)
}

export default Layout;