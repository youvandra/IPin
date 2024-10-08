'use client'
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import WhiteLayout from '../../layout/pagelayout/WhiteLayout';

const ProfileDetail = () => {
    return (
        <WhiteLayout>
            <PageContainer title="ProfileDetail" description="ProfileDetail">
                <Box sx={{ p: 4 }}>
                    <Box><Typography variant="h3" fontSize={{sm : 40}}>IP Name</Typography>
                            <Typography variant="body1"  color='#6C7275' fontFamily='inter'mt={{xs:3, sm:4}} mb={{xs:2, sm:4}} fontSize={{sm : 16}}>
                                Description
                            </Typography></Box>
                    <Grid container spacing={2}>
                        {/* Left Side - IP Details */}
                        <Grid item xs={12} sm={6}>
                            <Box mr={{sm:5}}>
                            <Box 
                                sx={{ 
                                    mb: 2,
                                    width: '100%', 
                                    height: '1px', 
                                    backgroundColor: '#E8ECEF' 
                                }}
                            />
                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' fontSize={{sm : 16}}>IP Creator</Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{sm : 20}} mt={{sm:1}}>John Doe</Typography>

                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{xs:2, sm:3}} fontSize={{sm : 16}}>Time Of First Publication</Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{sm : 20}} mt={{sm:1}}>2024/24/11</Typography>

                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{xs:2, sm:3}} fontSize={{sm : 16}}>Place Of First Publication</Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{sm : 20}} mt={{sm:1}}>Indonesia</Typography>

                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{xs:2, sm:3}} fontSize={{sm : 16}}>Citizenship</Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{sm : 20}} mt={{sm:1}}>Indonesia</Typography>

                            <Typography variant="subtitle2" color='#6C7275' fontFamily='inter' mt={{xs:2, sm:3}} fontSize={{sm : 16}}>Category</Typography>
                            <Typography variant="body1" color='#000' fontFamily='inter' fontSize={{sm : 20}} mt={{sm:1}}>Patent Rights</Typography>

                            <Button 
                                variant="contained" 
                                sx={{ mt: 3, backgroundColor: 'black', color: 'white', padding:1, width:'100%', }}
                                
                            >
                                See Attachment
                            </Button>
                            </Box>
                        </Grid>

                        {/* Right Side - Actions */}
                        <Grid item xs={12} sm={6}>
                            <Box ml={{sm:5}} mt={{sm:10, xs:3}}>
                            <Button 
                                variant="contained" 
                                sx={{ mb: 3, backgroundColor: 'black', color: 'white', width: '100%', padding:1 }}
                            >
                                Open Certificate
                            </Button>

                            <Typography variant="subtitle1">Do You Want To Sell This IP?</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Input Price"
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black', // Border color when not focused
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Border color when focused
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'black', // Text color inside the input
                                    },
                                }}
                            />

                            <Button 
                                variant="contained" 
                                sx={{ width: '100%', backgroundColor: 'green', color: 'white', padding:1}}
                            >
                                Sell
                            </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </PageContainer>
        </WhiteLayout>
    );
}

export default ProfileDetail;
