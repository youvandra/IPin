'use client';
import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import HomeLayout from '../layout/pagelayout/HomeLayout';
import { useRouter } from 'next/navigation'; 
import { List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter(); 

  const handleNavigateToRegister = () => {
      router.push('/ipregister'); 
  };
  return (
    <HomeLayout>
    <PageContainer title="Home" description="Home">
      {/* Section 1: What's IPin */}
      <Box sx={{ 
        textAlign: 'center', 
        minHeight: '75vh', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '20px'
      }}>
        <Box
          component="img"
          src="/Rectangle.svg"
          alt="Background Shape"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        {/* Left Side: Text */}
        <Box sx={{ zIndex: 2, maxWidth: isMobile ? '100%' : '50%', display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '1rem',
              fontSize: isMobile ? '2rem' : '3rem',
              textAlign: isMobile ? 'center' : 'left',
              fontFamily: 'poppins',
              
            }}
          >
            What's IPin?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: isMobile ? '1rem' : '1.25rem',
              marginBottom: '2rem',
              textAlign: isMobile ? 'center' : 'left',
              mt: 2,
              fontFamily: 'poppins',
            }}
          >
            IPin is a platform that provides blockchain-integrated Intellectual Property (IP) registration and sales services. We eliminate the difficulties of existing IP registration with a lot of useless paperwork.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleNavigateToRegister}
            sx={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              textTransform: 'none',
              alignSelf: isMobile ? 'center' : 'flex-start',
              borderRadius: '9px',
              fontWeight: 'bold',
              fontFamily: 'poppins',
            }}
          >
            Register IP
          </Button>
        </Box>

        {/* Right Side: Placeholder */}
        <Box
  sx={{
    zIndex: 2,
    width: isMobile ? '100%' : '40%',
    height: isMobile ? '700px' : '400px',
    borderRadius: '12px',
    overflow: 'hidden',
  }}
>
  <img 
    src="/images/landingcard/herolanding.jpg" 
    alt="What's IPin Image"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</Box>
        
      </Box>

      {/* Section 2: Benefits Using IPin */}
      <Box sx={{ 
        position: 'relative', 
        mt: 35, 
        padding: '20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: isMobile ? 'center' : 'left',
      }}>
        

        {/* Left Side: Placeholder Box */}
        <Box
          
        > <img 
        src="/images/landingcard/benefit.jpg" 
        alt="Patent Right"
        style={{
          position: 'absolute',
          width: isMobile ? '100%' : '40%',
            height: isMobile ? '300px' : '350px',
            backgroundColor: '#E0E0E0',
            borderRadius: '12px',
          opacity: 1,
        }}
      />
      </Box>

        {/* Right Side: Text */}
        <Box sx={{ maxWidth: isMobile ? '100%' : '50%', ml: isMobile ? 0 : 4, mt: isMobile ? 4 : 0 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: isMobile ? '2rem' : '3rem',
              fontFamily: 'poppins',
              lineHeight: 1.3
            }}
          >
            Benefits Using IPin
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: isMobile ? '1rem' : '1.25rem',
              marginTop: '2rem',
              fontFamily: 'poppins',
              lineHeight: 2
            }}
          >
            IPin provides a secure, blockchain-based platform for registering and selling intellectual property (IP) such as brands, music, patents, and research papers. With IPin, users can protect their creative works through decentralized technology, ensuring that ownership is indisputable and verified globally. This platform offers confidentiality and data security, allowing users to manage their IP assets without revealing sensitive information. Moreover, IPin streamlines the process of monetizing IP, making it accessible and legally binding in various jurisdictions without the need for intermediaries.

          </Typography>
          <Box sx={{ mt: 2, color:'#555'}}>
            <Typography sx={{
              color: '#555',
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontFamily: 'poppins',
            }}>Four key benefits of using IPin:</Typography>
   <List sx={{ fontFamily: 'poppins' }}>
  <ListItem>
    <ListItemText 
      primary="Global Recognition" 
      primaryTypographyProps={{ sx: { fontSize:'1rem' }  }} 
      secondary="IP registered on IPin is valid worldwide and accepted in multiple jurisdictions, reducing legal complexity." 
      secondaryTypographyProps={{ sx: { mt: 1, fontSize:'1rem' } }} 
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary="Secure and Confidential" 
      primaryTypographyProps={{ sx: { fontSize:'1rem' } }}
      secondary="Blockchain technology ensures that ownership data is encrypted and tamper-proof, protecting against unauthorized access or manipulation." 
      secondaryTypographyProps={{ sx: { mt: 1, fontSize:'1rem' } }}
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary="Easy Monetization" 
      primaryTypographyProps={{ sx: { fontSize:'1rem' } }}
      secondary="Users can easily sell or license their intellectual property, leveraging blockchain to facilitate transparent and secure transactions." 
      secondaryTypographyProps={{ sx: { mt: 1, fontSize:'1rem' } }}
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary="Simplified Process" 
      primaryTypographyProps={{ sx: { fontSize:'1rem' } }}
      secondary="IPin's user-friendly interface allows quick and easy registration of intellectual property, without needing extensive legal knowledge." 
      secondaryTypographyProps={{ sx: { mt: 1, fontSize:'1rem' } }}
    />
  </ListItem>
</List>

          </Box>
          
        </Box>
        
      </Box>
       {/* Section 3: IP Categories */}
       <Box sx={{ padding: '40px 20px', mt: 20, }}>
        <Box sx={{justifyContent: isMobile ? 'center' : 'flex-start',  flexDirection: 'column',
          alignItems: 'flex-start', }}>
        <Typography 
          variant="h2" 
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'left',
            mb: 5,
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontFamily: 'poppins',
            
          }}
        >
          IP Categories
        </Typography>
        </Box>
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {/* Card 1 */}
          <Box 
            sx={{
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <img 
              src="/images/landingcard/patent-image.jpg" 
              alt="Patent Right"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <Typography variant="h5" sx={{ zIndex: 2, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Patent Right
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box 
            sx={{
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <img 
              src="/images/landingcard/research-paper-image.jpg" 
              alt="Research Paper"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <Typography variant="h5" sx={{ zIndex: 2, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Research Paper
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box 
            sx={{
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <img 
              src="/images/landingcard/brand-image.jpg" 
              alt="Brand"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <Typography variant="h5" sx={{ zIndex: 2, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Brand
            </Typography>
          </Box>

          {/* Card 4 */}
          <Box 
            sx={{
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <img 
              src="/images/landingcard/music-image.jpg" 
              alt="Music"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <Typography variant="h5" sx={{ zIndex: 2, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Music
            </Typography>
          </Box>
          </Box>
          </Box>
    </PageContainer>
    </HomeLayout>
  );
};

export default Home;
