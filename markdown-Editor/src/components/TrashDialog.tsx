import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useRef } from 'react';

const CustomButton = styled.button`
  width: 295px;
  height: 40px;
  background-color: #E46643;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #D45E3E;
  },

  margin-top: 0px !important;
  padding-top: 0px !important;

`;

const CustomAlertDialogContent = styled(AlertDialogContent)`
  width: 343px !important;
  height: 218px;
  
`;

const CustomAlertDialogHeader = styled(AlertDialogHeader)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0px !important;
  padding-bottom: 8px !important;
`;

const CustomAlertDialogBody = styled(AlertDialogBody)`
margin-top: 0px !important;
padding-top: 0px !important;
padding-top: 0px !important;
padding-bottom: 10px !important;
`;

const CustomAlertDialogFooter = styled(AlertDialogFooter)`
  display: flex;
  justify-content: center;
`;

const CustomTextBody = styled.p`
  color: #7C8187;
  font-size: 15px;
  line-height: 1.7;
  line-spacing: 1.9px;

`

interface TrashDialogProps {
  isVisible: boolean;
  toggleDialog: () => void;
}

export function TrashDialog({ isVisible, toggleDialog }: TrashDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isVisible}
      leastDestructiveRef={cancelRef}
      onClose={toggleDialog}
      isCentered
    >
      <AlertDialogOverlay>
        <CustomAlertDialogContent>
          <CustomAlertDialogHeader>
            Delete this document?
          </CustomAlertDialogHeader>
          <CustomAlertDialogBody>
            <CustomTextBody>
            Are you sure you want to delete the ‘welcome.md’ document and its contents? <br/>This action cannot be reversed.
            </CustomTextBody>  
          </CustomAlertDialogBody>
          <CustomAlertDialogFooter>
            <CustomButton ref={cancelRef} onClick={toggleDialog}>
              Confirm&Delete
            </CustomButton>
          </CustomAlertDialogFooter>
        </CustomAlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
