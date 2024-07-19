import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    ScaleFade,
    Box,
    Flex,
    Center,
    Switch,
    useColorMode,
    useColorModeValue,
  
} from '@chakra-ui/react';
import styled from 'styled-components';
import DocumentCard from './DocumentCard';



const DrawerButton = styled.button`
    width: 202px;
    height: 40px;
    background-color: #E46643;
    border-radius: 4px;
    font-family: "Roboto", serif;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: #D45E3E;
      },
    
`;

const DrawerHeadingText = styled.h4`
    font-size: 15px;
    color: #7C8187;
    margin-bottom: 20px;
`;


interface MenuDrawerProps {
    isOpen: boolean;

}


export default function MenuDrawer({ isOpen }: MenuDrawerProps) {

    const { toggleColorMode } = useColorMode()

    const sunColor = useColorModeValue('whiteAlpha.900', 'gray.600');
    const moonColor = useColorModeValue('gray.600', 'whiteAlpha.900');

    return (
        <ScaleFade initialScale={0.8} delay={0.03} in={isOpen}>
            <Flex
                p='4'
                color='white'
                bg= '#2B2D31'
                width={'240px'}
                height={'100vh'}
                flexDir={'column'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
            >
                <Box>
                    <DrawerHeadingText>MY DOCUMENTS</DrawerHeadingText>
                    <DrawerButton>+New Document</DrawerButton>

                    <DocumentCard label='untitled-document.md' date='01 April 2022'/>
                    <DocumentCard label='welcome.md' date='01 April 2022'/>
                    
                </Box>
                <Center >
                    <MoonIcon boxSize={4} color={moonColor} marginRight={3} />
                    <Switch  size={'lg'} onChange={toggleColorMode} />
                    <SunIcon color={sunColor} boxSize={4} marginLeft={3} />
                </Center>

            </Flex>
        </ScaleFade>
    );
}
