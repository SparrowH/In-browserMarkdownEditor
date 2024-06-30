import styled from 'styled-components'
import menu from '../assets/icon-menu.svg'
import documentIcon from '../assets/icon-document.svg'
import trashIcon from '../assets/icon-delete.svg'
import saveIcon from '../assets/icon-save.svg'

const NavbarContainer = styled.div`
    width: 100%;
    height: 72px;
    background-color: var(--navbarColor);
    display: flex;
    justify-content: space-between

`

const NavbarContentsLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`

const NavbarContentsRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MenuContainer = styled.div`
    width: 70px;
    height: 100%;
`

const Menu = styled.button`
    background-color: #35393F;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: none;
    cursor: pointer;
    height: 100%;
    width: 100%;
`

const NavbarTitle = styled.h1`
    font-family: "Roboto Slab", serif;
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 6px;
    margin-left: 1.5rem;
`
const Divider = styled.div`
    height: 65%;
    width: 2px;
    background-color: #35393F;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

`

const TextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 1.5rem;
    justify-content: center;
    align-item: center;
    border: none;
`

const DocumentLabel = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #5A6069;
`

const TextInput = styled.input`
    color: #FFFFFF;
    border: none;
    caret-color: #E46643;
    background-color: transparent;

    input:focus {
        outline: none;
    };
    
    &:hover {

        text-Decoration: underline;
    };
`;

const SaveButton = styled.button`
    width: 152px;
    height: 40px;
    background-color: #E46643;
    display : flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 4px;
    border-color: transparent;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    color: #FFFFFF;
    padding-left: 0.5rem;
    padding-right: 1.2rem;
    
    &:hover {
        background-color:  #F39765;

    }
`
const TrashButton = styled.button`
    background-color: var(--navbarColor);
    border: none;
    cursor: pointer;
`

const HandleOverlay = () => {

}

function Navbar() {
    
  return (
    <NavbarContainer>
        <NavbarContentsLeft>
            <MenuContainer>
                <Menu><img src={menu} alt="menu" /></Menu>
            </MenuContainer>
            <NavbarTitle>MARKDOWN</NavbarTitle>
            <Divider/>
            <img src={documentIcon} alt="document" />
            <TextInputContainer>
                <DocumentLabel>Document name</DocumentLabel>
                <TextInput />
            </TextInputContainer>

            </NavbarContentsLeft>
                
            <NavbarContentsRight>
                <TrashButton onClick={HandleOverlay}><img src={trashIcon} alt="trash" /></TrashButton>
                <SaveButton>
                    <img src={saveIcon} alt="save" />
                    Save Changes
                </SaveButton>
        </NavbarContentsRight>
    </NavbarContainer>
  )
}

export default Navbar