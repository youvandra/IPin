import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button,
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { useRouter } from 'next/navigation'; 

interface IPItem {
    id: number;
    creator: string;
    ipName: string;
    isForSale: boolean;
}

const ProfileTable = () => {
    const router = useRouter(); 

    const handleNavigateToDetail = () => {
        router.push('/profiledetail'); 
    };
    const ipItems: IPItem[] = [
        { id: 1, creator: 'Musharof Chowdhury', ipName: 'Lorem ipsum dolor sit amet.', isForSale: true },
        { id: 4, creator: 'Sulium Keliyim', ipName: 'Lorem ipsum dolor sit amet.', isForSale: true },
        { id: 5, creator: 'Alex Semuyel', ipName: 'Lorem ipsum dolor sit amet.', isForSale: false },
        { id: 6, creator: 'Humil Limition', ipName: 'Lorem ipsum dolor sit amet.', isForSale: true },
    ];

    return (
        <DashboardCard>
            <Box sx={{
                width: '100%',
                overflowX: 'auto', // Enables horizontal scrolling on mobile devices
                display: 'block',
            }}>
                <Table aria-label="IP Table" sx={{
                    whiteSpace: 'nowrap', // Prevents table cells from wrapping text
                    minWidth: { xs: '600px', sm: 'auto' }, // Minimum width on small screens
                }}>
                    <TableHead sx={{ bgcolor: 'F9FAFB' }}>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>IP Creator</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>IP Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>Status</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ipItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>{item.creator}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2">{item.ipName}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{ px: '4px', color: '#000' }}
                                        size="small"
                                        label={item.isForSale ? "Sell" : "Not For Sell"}
                                        color={item.isForSale ? "success" : "error"}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="small" onClick={handleNavigateToDetail} >See IP</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProfileTable;
