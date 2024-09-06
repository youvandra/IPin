import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    FormControl,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    SelectChangeEvent
} from '@mui/material';

interface AddGroupModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (newGroup: any) => void;
}

const AddGroupModal: React.FC<AddGroupModalProps> = ({ open, onClose, onSubmit }) => {
    const [newGroup, setNewGroup] = useState({
        name: '',
        account: '',
        amount: '',
        token: 'BTT',
        dateOption: '',  
        dateValue: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewGroup((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setNewGroup((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = () => {
        onSubmit(newGroup);
        setNewGroup({
            name: '',
            account: '',
            amount: '',
            token: 'BTT',
            dateOption: '',
            dateValue: ''
        });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ style: { backgroundColor: '#3C354A', color: '#fff' } }}>
            <DialogTitle sx={{ color: "#fff" }}>Add Group</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    
                    <FormControl fullWidth>
                        <TextField
                            label="Input Remarks For The Group"
                            name="name"
                            value={newGroup.name}
                            onChange={handleInputChange}
                            sx={{ color: "#fff", input: { color: "#fff" }, label: { color: "#fff" } }}
                            InputLabelProps={{ style: { color: "#fff" } }}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "#fff" }}>Choose The Type of Token</InputLabel>
                        <Select
                            name="token"
                            value={newGroup.token}
                            onChange={handleSelectChange}
                            sx={{ color: "#fff", '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <MenuItem value="BTT">BTT</MenuItem>
                            <MenuItem value="ETH">ETH</MenuItem>
                            <MenuItem value="BTC">BTC</MenuItem>
                        </Select>
                    </FormControl>

                    <RadioGroup
                        name="dateOption"
                        value={newGroup.dateOption}
                        onChange={handleInputChange}
                        sx={{ color: "#fff" }}
                    >
                        <FormControlLabel value="release" control={<Radio sx={{ color: "#fff" }} />} label="Release Date" />
                        <FormControlLabel value="inactive" control={<Radio sx={{ color: "#fff" }} />} label="Inactive Due" />
                    </RadioGroup>

                    {newGroup.dateOption === 'release' ? (
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "#fff" }}>Select Release Date</InputLabel>
                            <Select
                                name="dateValue"
                                value={newGroup.dateValue}
                                onChange={handleSelectChange}
                                sx={{ color: "#fff", '& .MuiSvgIcon-root': { color: '#fff' } }}
                            >
                                <MenuItem value="1 day">1 Day</MenuItem>
                                <MenuItem value="1 week">1 Week</MenuItem>
                                <MenuItem value="1 month">1 Month</MenuItem>
                            </Select>
                        </FormControl>
                    ) : (
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "#fff" }}>Select Inactive Due</InputLabel>
                            <Select
                                name="dateValue"
                                value={newGroup.dateValue}
                                onChange={handleSelectChange}
                                sx={{ color: "#fff", '& .MuiSvgIcon-root': { color: '#fff' } }}
                            >
                                <MenuItem value="1 day">1 Day</MenuItem>
                                <MenuItem value="1 week">1 Week</MenuItem>
                                <MenuItem value="1 month">1 Month</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{ color: "#fff" }}>Cancel</Button>
                <Button onClick={handleFormSubmit} variant="contained" color="primary">
                    Add Group
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddGroupModal;
