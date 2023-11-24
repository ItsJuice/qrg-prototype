import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideMenu from './SideMenu';
import { breakpoint } from '../vars';

export default function SidePanel({ drawerOpen, toggleMenu, container, selectRange }) {
  const matches = useMediaQuery(`(min-width:${breakpoint})`);
  return (
    <>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleMenu}
        variant={matches ? "permanent" : "temporary"}
        PaperProps={{ style: { border: 'none', position: 'absolute' } }}
        ModalProps={{ container }}
      >
        <SideMenu selectRange={selectRange} />
      </Drawer>
    </>
  )
}
