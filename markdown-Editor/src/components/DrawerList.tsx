import Box from '@mui/material/Box';
import styled from 'styled-components';

const DrawerTitle = styled.h4`
  color: #5A6069;
  margin-bottom: 30px; 
`;

const DrawerButton = styled.button`
  width: 202px;
  height: 40px;
  background-color: #E46643;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "Roboto", serif;
  font-size: 14px;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;

`;




const DrawerList = (
  <Box sx={{ width: 250, height: '100%', paddingTop: 4, paddingLeft: 3 }} role="presentation">
    <DrawerTitle>MY DOCUMENTS</DrawerTitle>
    <DrawerButton>+ New Document</DrawerButton>
  </Box>
);

export default DrawerList