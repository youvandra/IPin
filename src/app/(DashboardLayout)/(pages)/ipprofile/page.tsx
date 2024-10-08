'use client'
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProfileTable from '@/app/(DashboardLayout)/components/table/ProfileTable';
import BlackLayout from "@/app/(DashboardLayout)/layout/pagelayout/BlackLayout";

const IpProfile = () => {
  return (
    <BlackLayout>
    <PageContainer title="IPProfile" description="IPProfile">
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="flex-start" justifyContent="space-between" mt={{sm:15}} >
        {/* Left side typography */}
        <Box sx={{ p: 3, maxWidth: { xs: '100%', sm: '400px' } }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="#fff" fontSize={28}>
            IP Profile
          </Typography>
          <Typography variant="subtitle1" color="#C9C9C9" fontSize={18}>
            All your Intellectual Property Stored
          </Typography>
        </Box>

        {/* Right side table */}
        <Grid item xs>
          <ProfileTable />
        </Grid>
      </Box>
    </PageContainer>
    </BlackLayout>
  );
}

export default IpProfile;
