import React, { useState, useCallback } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Collapse,
    IconButton,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Pagination  
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AddGroupModal from '@/app/(DashboardLayout)//components/dashboard/AddGroup';
import AddAccountModal from '@/app/(DashboardLayout)//components/dashboard/AddAccount';  

const initialProducts = [
    {
        no: "1",
        name: "Salary",
        account: "2 account",
        amount: "750",
        token: "BTT",
        date: "2024-12-24",
        status: "Fully Executed",
        pbg: "success.main",
        details: [
            { address: "0x05e...d70", amount: "500", token: "BTT", status: "Executed" },
            { address: "0x03e...a20", amount: "250", token: "BTT", status: "Executed" }
        ]
    },
    {
        no: "2",
        name: "Tax",
        account: "1 account",
        amount: "500",
        token: "BTT",
        date: "2024-12-24",
        status: "Fully Executed",
        pbg: "success.main",
        details: [
            { address: "0x09e...b12", amount: "500", token: "BTT", status: "Executed" }
        ]
    },
    {
        no: "3",
        name: "Salary",
        account: "",
        amount: "500",
        token: "BTT",
        date: "2024-12-24",
        status: "Planned",
        pbg: "success.light",
        details: []
    },
    {
        no: "4",
        name: "Investment",
        account: "",
        amount: "",
        token: "BTT",
        date: "2024-12-24",
        status: "Fully Executed",
        pbg: "success.main",
        details: []
    },
];

const calculateTotalAccounts = (details) => details.length;
const calculateTotalAmount = (details) => {
    return details.reduce((acc, detail) => acc + parseFloat(detail.amount), 0);
};

const InheritList = () => {
    const [products, setProducts] = useState(initialProducts);
    const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});
    const [openModal, setOpenModal] = useState(false);
    const [openAccountModal, setOpenAccountModal] = useState(false);
    const [currentProductIndex, setCurrentProductIndex] = useState<number | null>(null);
    const [statusFilter, setStatusFilter] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);  // State for pagination
    const itemsPerPage = 5;  // Number of items per page

    // Handle row expansion
    const handleRowClick = (index: number) => {
        setOpenRows((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const handleAddGroup = (newGroup: any) => {
        const newProduct = {
            no: (products.length + 1).toString(),
            name: newGroup.name,
            account: newGroup.account,
            amount: newGroup.amount,
            token: newGroup.token,
            date: newGroup.date,
            status: newGroup.status,
            pbg: newGroup.status === "Fully Executed" ? "success.main" : "success.light",
            details: []
        };

        setProducts((prevProducts) => [...prevProducts, newProduct]);
        handleModalClose();
    };

    const handleOpenAccountModal = (index: number) => {
        setCurrentProductIndex(index);
        setOpenAccountModal(true);
    };

    const handleAddAccount = useCallback((accountData: { address: string; amount: string }) => {
        if (currentProductIndex !== null) {
            setProducts((prevProducts) => {
                const updatedProducts = [...prevProducts];
                updatedProducts[currentProductIndex].details = [
                    ...updatedProducts[currentProductIndex].details,
                    {
                        address: accountData.address,
                        amount: `${accountData.amount}`,
                        token: "BTT",
                        status: "Pending"
                    }
                ];
                return updatedProducts;
            });
            setOpenAccountModal(false);
        }
    }, [currentProductIndex]);

    // Filter products based on selected status
    const filteredProducts = products.filter(product =>
        statusFilter === "All" || product.status === statusFilter
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <DashboardCard title="Inherit List">
            <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Chip sx={{ bgcolor: '#01B574', color: '#fff', ml: -1 }} label={`${products.length} Group Created`} />

                    <Button variant="contained" onClick={handleModalOpen} sx={{ bgcolor: "#AC6AEC", color: "#fff", padding: 1.5, paddingLeft:5, paddingRight:5 }}>
                        New Group
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel sx={{ color: "#fff" }}>Status Filter</InputLabel>
                        <Select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            label="Status Filter"
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#fff',
                                },
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Fully Executed">Fully Executed</MenuItem>
                            <MenuItem value="Planned">Planned</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <AddGroupModal open={openModal} onClose={handleModalClose} onSubmit={handleAddGroup} />

                <AddAccountModal open={openAccountModal} onClose={() => setOpenAccountModal(false)} onSubmit={handleAddAccount} />

                <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                    <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>No</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Name</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Account</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Amount</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Token</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Release Date</Typography>
                                </TableCell>
                                <TableCell sx={{ color: "#A0AEC0" }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Status</Typography>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedProducts.map((product, index) => (
                                <React.Fragment key={product.name}>
                                    <TableRow onClick={() => handleRowClick(index)} sx={{ cursor: 'pointer' }}>
                                        <TableCell sx={{ color: "#fff" }}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>{product.no}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }}>
                                            <Typography variant="subtitle2" fontWeight={600}>{product.name}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }}>
                                            <Typography variant="subtitle2" fontWeight={400}>{calculateTotalAccounts(product.details)} account</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }}>
                                            <Typography variant="subtitle2">{calculateTotalAmount(product.details)} BTT</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }} align="left">
                                            <Typography variant="subtitle2">{product.token}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }}>
                                            <Typography variant="subtitle2">{product.date}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ color: "#fff" }} align="left">
                                            <Chip sx={{ px: "4px", backgroundColor: product.pbg, color: "#fff" }} size="small" label={product.status} />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleRowClick(index)} sx={{ color: "#fff" }}>
                                                {openRows[index] ? <ExpandLess /> : <ExpandMore />}
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                                            <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                    {product.details.length > 0 ? (
                                                        <Table size="small" aria-label="details">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell sx={{ color: "#fff" }} align="left">Address</TableCell>
                                                                    <TableCell sx={{ color: "#fff" }} align="left">Amount</TableCell>
                                                                    <TableCell sx={{ color: "#fff" }} align="left">Token</TableCell>
                                                                    <TableCell sx={{ color: "#fff" }} align="left">Status</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {product.details.map((detail, i) => (
                                                                    <TableRow key={i}>
                                                                        <TableCell sx={{ color: "#fff" }} align="left">{detail.address}</TableCell>
                                                                        <TableCell sx={{ color: "#fff" }} align="left">{detail.amount}</TableCell>
                                                                        <TableCell sx={{ color: "#fff" }} align="left">{detail.token}</TableCell>
                                                                        <TableCell sx={{ color: "#fff" }} align="left">{detail.status}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    ) : (
                                                        <Typography sx={{ color: "#fff", mb: 2 }}>No additional details available.</Typography>
                                                    )}

                                                    <Button 
                                                        variant="contained" 
                                                        disableElevation 
                                                        color="secondary" 
                                                        sx={{ mt: 2, bgcolor: "#AC6AEC" }} 
                                                        onClick={() => handleOpenAccountModal(index)}
                                                    >
                                                        Add Account
                                                    </Button>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

                
            </>
        </DashboardCard>
    );
};

export default InheritList;
