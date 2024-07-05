import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

const CustomDialog = styled(Dialog)`
  & .MuiDialog-paper {
    background-color: #fff;
    width: 343px;
    height: 200px;
  }
`;

const CustomDialogContent = styled(DialogContent)`
  justify-content: center;
  height: 20px;
`;

const CustomButton = styled.button`
  width: 295px;
  height: 40px;
  background-color: #E46643 !important;
  color: #fff !important;
  font-size: 15px !important;
  font-family: "Roboto", sans-serif !important;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

`;

const CustomDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

const CustomDialogContentText = styled(DialogContentText)`
  font-size: 14px !important;
  font-family: "Roboto", sans-serif !important;
`

interface TrashDialogProps {
  isVisible: boolean;
  toggleDialog: (visible: boolean) => void;
}

export default function TrashDialog({ isVisible, toggleDialog }: TrashDialogProps) {
  const handleClose = () => {
    toggleDialog(false);
  };


  return (
    <React.Fragment>
      <CustomDialog
        open={isVisible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this document?"}
        </DialogTitle>
        <CustomDialogContent>
          <CustomDialogContentText id="alert-dialog-description">
            Are you sure you want to delete the<br/> ‘welcome.md’ document and its contents?<br/> This action cannot be reversed.
          </CustomDialogContentText>
        </CustomDialogContent>
        <CustomDialogActions>
          <CustomButton onClick={handleClose}>Delete & Confirm</CustomButton>
        </CustomDialogActions>
      </CustomDialog>
    </React.Fragment>
  );
}
