'use client';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile'; 
import BlackLayout from "@/app/(DashboardLayout)/layout/pagelayout/BlackLayout";

const IpRegister = () => {
  const [publicationDate, setPublicationDate] = useState<Date | null>(null);
  const [fileName, setFileName] = useState<string | null>(null); // state to track uploaded file name

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <BlackLayout>
    <PageContainer title="IPRegister" description="IPRegister">
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="flex-start" justifyContent="center" >
        {/* Left side typography */}
        <Box sx={{ p: 3, maxWidth: { xs: '100%', sm: '600px' } }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="#fff" fontSize={28}>
            Register Your Intellectual Property
          </Typography>
          <Typography variant="subtitle1" color="#C9C9C9" fontSize={18}>
            Securely register your intellectual property rights today.
          </Typography>
        </Box>

        {/* Right side form */}
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'column' }} alignItems="flex-start" ml={{xs:8}} justifyContent="flex-start" >
          <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{sm:500}} maxWidth={{sm:'100%'}} sx={{mt:3}}>
            <TextField fullWidth id="ip-name" label="IP Name" variant="outlined" color="secondary" focused />
            <TextField fullWidth id="creator-name" label="Creator Name" variant="outlined" color="secondary" focused sx={{ml:2}} />
          </Box>
          <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{sm:500}} maxWidth={{sm:'100%'}}  sx={{mt:5}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Time of First Publication"
                value={publicationDate}
                onChange={(newValue: Date | null) => setPublicationDate(newValue)}
                slotProps={{ textField: { fullWidth: true, color: 'secondary', focused: true } }}
              />
            </LocalizationProvider>
            <TextField fullWidth id="place-publication" label="Place of First Publication" variant="outlined" color="secondary" focused sx={{ml:2}} />
          </Box>
          <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{sm:500}} maxWidth={{sm:'100%'}}  sx={{mt:5}}>
            <TextField fullWidth id="citizenship" label="Citizenship" variant="outlined" color="secondary" focused />
          </Box>
          <Box display="flex" width={{xs:380, sm:500}} maxWidth={{xs:'100%'}} flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start"  sx={{mt:5}}>
            <TextField fullWidth id="description" label="Description" variant="outlined" color="secondary" multiline rows={3} focused />
          </Box>
          <Box display="flex" width={{xs:380, sm:500}} maxWidth={{xs:'100%'}} flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start"  sx={{mt:5}}>
            <TextField fullWidth id="document" label="Document" variant="outlined" color="secondary" multiline rows={3} focused />
          </Box>

          {/* Register IP Button */}
          <Box display="flex" justifyContent="flex-start" width="100%" sx={{ mt: 5 }}>
            <Button 
              variant="outlined" 
              sx={{ border:2, borderColor:'#fff', color: '#fff', padding: '10px 20px', textTransform: 'none', fontSize: 16, '&:hover': { backgroundColor: '#fff', color:'#000' } }}
            >
              Register IP
            </Button>
          </Box>
        </Box>
      </Box>
    </PageContainer>
    </BlackLayout>
  );
}

export default IpRegister;
