'use client';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useState } from 'react';
import BlackLayout from "@/app/(DashboardLayout)/layout/pagelayout/BlackLayout";
import { useWallet } from 'use-wallet'; // pastikan ini diimport
import { createIP } from '../contract'; // import fungsi createIP dari contract

const IpRegister = () => {
  const [publicationDate, setPublicationDate] = useState<Date | null>(null);
  const [ipName, setIpName] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [placeOfPublication, setPlaceOfPublication] = useState('');
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');
  const { account } = useWallet(); // ambil data wallet

  const handleRegisterIP = async () => {
    try {
      if (!account) {
        alert('Please connect your wallet first.');
        return;
      }

      await createIP(ipName, creatorName, citizenship, publicationDate, placeOfPublication, document, description);
      alert('IP registered successfully!');
    } catch (error) {
      console.error('Error registering IP:', error);
      alert('Failed to register IP.');
    }
  };

  return (
    <BlackLayout>
      <PageContainer title="IPRegister" description="IPRegister">
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="flex-start" justifyContent="center">
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
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'column' }} alignItems="flex-start" ml={{ xs: 8 }} justifyContent="flex-start">
            <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{ sm: 500 }} maxWidth={{ sm: '100%' }} sx={{ mt: 3 }}>
              <TextField fullWidth id="ip-name" label="IP Name" variant="outlined" color="secondary" focused value={ipName} onChange={(e) => setIpName(e.target.value)} />
              <TextField fullWidth id="creator-name" label="Creator Name" variant="outlined" color="secondary" focused sx={{ ml: 2 }} value={creatorName} onChange={(e) => setCreatorName(e.target.value)} />
            </Box>
            <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{ sm: 500 }} maxWidth={{ sm: '100%' }} sx={{ mt: 5 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Time of First Publication"
                  value={publicationDate}
                  onChange={(newValue: Date | null) => setPublicationDate(newValue)}
                  slotProps={{ textField: { fullWidth: true, color: 'secondary', focused: true } }}
                />
              </LocalizationProvider>
              <TextField fullWidth id="place-publication" label="Place of First Publication" variant="outlined" color="secondary" focused sx={{ ml: 2 }} value={placeOfPublication} onChange={(e) => setPlaceOfPublication(e.target.value)} />
            </Box>
            <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{ sm: 500 }} maxWidth={{ sm: '100%' }} sx={{ mt: 5 }}>
              <TextField fullWidth id="citizenship" label="Citizenship" variant="outlined" color="secondary" focused value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </Box>
            <Box display="flex" width={{ xs: 380, sm: 500 }} maxWidth={{ xs: '100%' }} flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" sx={{ mt: 5 }}>
              <TextField fullWidth id="description" label="Description" variant="outlined" color="secondary" multiline rows={3} focused value={description} onChange={(e) => setDescription(e.target.value)} />
            </Box>
            <Box display="flex" flexDirection={{ xs: 'row', sm: 'row' }} alignItems="flex-start" width={{ sm: 500 }} maxWidth={{ sm: '100%' }} sx={{ mt: 5 }}>
              <TextField fullWidth id="document" label="Document" variant="outlined" color="secondary" focused value={document} onChange={(e) => setDocument(e.target.value)} />
            </Box>

            {/* Register IP Button */}
            <Box display="flex" justifyContent="flex-start" width="100%" sx={{ mt: 5 }}>
              <Button
                variant="outlined"
                sx={{ border: 2, borderColor: '#fff', color: '#fff', padding: '10px 20px', textTransform: 'none', fontSize: 16, '&:hover': { backgroundColor: '#fff', color: '#000' } }}
                onClick={handleRegisterIP}
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
