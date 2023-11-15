import Drawer from '@mui/material/Drawer';
import SideMenu from './SideMenu';

export default function SidePanel({ drawerOpen, toggleMenu }) {
  return (
    <>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleMenu}
        variant="temporary"
        sx={{display: { xs: 'block', md: 'none' }}}
        PaperProps={{style: {border: 'none'}}}
      >
        <SideMenu />
      </Drawer>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleMenu}
        variant="permanent"
        sx={{display: { xs: 'none', md: 'block' }}}
        PaperProps={{style: {border: 'none'}}}
      >
        <SideMenu />
      </Drawer>
    </>
  )
}
