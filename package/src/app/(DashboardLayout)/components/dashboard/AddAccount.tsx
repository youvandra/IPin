import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

interface AddAccountModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (accountData: { address: string; amount: string }) => void;
}

const AddAccountModal: React.FC<AddAccountModalProps> = ({ open, onClose, onSubmit }) => {
    const [account, setAccount] = useState({ address: '', amount: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccount(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (account.address && account.amount) {
            onSubmit(account);  // Pass the account data to the parent component
            onClose();          // Close the modal after submitting
            setAccount({ address: '', amount: '' });  // Clear input fields after submission
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ style: { backgroundColor: '#3C354A', color: '#fff' } }}>
            <DialogTitle sx={{ color: "#fff" }}>Add Account</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleFormSubmit}>
                    <TextField
                        label="Input Address"
                        name="address"
                        value={account.address}
                        onChange={handleInputChange}
                        fullWidth
                        variant="outlined"
                        sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
                    />
                    <TextField
                        label="Input Amount"
                        name="amount"
                        value={account.amount}
                        onChange={handleInputChange}
                        fullWidth
                        variant="outlined"
                        sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{ color: "#fff" }}>Cancel</Button>
                <Button type="submit" variant="contained" sx={{ bgcolor: "#AC6AEC" }} onClick={handleFormSubmit}>
                    Add Account
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddAccountModal;
