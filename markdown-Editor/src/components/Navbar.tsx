import styled from 'styled-components';
import menu from '../assets/icon-menu.svg';
import documentIcon from '../assets/icon-document.svg';
import trashIcon from '../assets/icon-delete.svg';
import saveIcon from '../assets/icon-save.svg';
import TrashDialog from './TrashDialog';
import { useState } from 'react';
import cancel from '../assets/icon-close.svg';
import Drawer from '@mui/material/Drawer';
import DrawerList from './DrawerList';

const drawerWidth = 240; // Width of the drawer

interface AppContainerProps {
  isOpen: boolean;
}

const AppContainer = styled.div<AppContainerProps>`
  display: grid;
  grid-template-columns: ${props => (props.isOpen ? `${drawerWidth}px 1fr` : `0 1fr`)};
  transition: grid-template-columns 0.3s; /* Smooth transition for grid change */
  height: 100vh; /* Full height to cover the viewport */
`;

const NavbarContainer = styled.div`
  width: 100%;
  height:68px;
  background-color: var(--navbarColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const NavbarContentsLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavbarContentsRight = styled.div`
  display: flex;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 4.5rem;
  height: 100%;
`;

const Menu = styled.button`
  background-color: #35393f;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const NavbarTitle = styled.h1`
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 6px;
  margin-left: 1.5rem;
`;

const Divider = styled.div`
  height: 65%;
  width: 2px;
  background-color: #35393f;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  border: none;
`;

const DocumentLabel = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #5a6069;
`;

const TextInput = styled.input`
  color: #ffffff;
  border: none;
  caret-color: #e46643;
  background-color: transparent;
  outline: none; /* Remove outline on all focus */

  &:focus {
    outline: none; /* Remove the default focus outline */
    text-decoration: underline; /* Underline when focused */
  }
`;

const SaveButton = styled.button`
  width: 152px;
  height: 40px;
  background-color: #e46643;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 4px;
  border-color: transparent;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  color: #ffffff;
  padding-left: 0.5rem;
  padding-right: 0.9rem;
  font-size: 16px;

  &:hover {
    background-color: #f39765;
  }
`;

const TrashButton = styled.button`
  background-color: var(--navbarColor);
  border: none;
  cursor: pointer;
`;



function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = (visible: boolean) => {
    setIsVisible(visible);
  };

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <AppContainer isOpen={isOpen}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#151619' } }} // Set drawer background color to black
       
      >
        {DrawerList}
      </Drawer>
      <div>
        <NavbarContainer>
          <NavbarContentsLeft>
            <MenuContainer>
              <Menu onClick={isOpen ? handleDrawerClose : handleDrawerOpen}>
                {isOpen ? <img src={cancel} alt="cancel" /> : <img src={menu} alt="menu" />}
              </Menu>
            </MenuContainer>
            <NavbarTitle>MARKDOWN</NavbarTitle>
            <Divider />
            <img src={documentIcon} alt="document" />
            <TextInputContainer>
              <DocumentLabel>Document name</DocumentLabel>
              <TextInput />
            </TextInputContainer>
          </NavbarContentsLeft>

          <NavbarContentsRight>
            <TrashButton onClick={() => toggleDialog(true)}>
              <img src={trashIcon} alt="trash" />
            </TrashButton>
            <SaveButton>
              <img src={saveIcon} alt="save" />
              Save Changes
            </SaveButton>
          </NavbarContentsRight>
        </NavbarContainer>
        <TrashDialog isVisible={isVisible} toggleDialog={toggleDialog} />
      </div>
    </AppContainer>
  );
}

export default Navbar;
