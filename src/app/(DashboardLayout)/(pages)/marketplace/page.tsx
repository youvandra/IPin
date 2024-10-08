'use client'
import { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import WhiteLayout from '../../layout/pagelayout/WhiteLayout';
import CardComponent from '../../components/card/CardComponent';
import { cardData } from '../../components/card/cardData'; 
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


const MarketPlace = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  // Filter card data based on the selected category
  const filteredCards = selectedCategory === 'All Categories'
    ? cardData
    : cardData.filter(card => card.type === selectedCategory);

    

  return (
    <WhiteLayout>
      <PageContainer title="Marketplace" description="Marketplace">
        <Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
          <img 
            src="/images/marketplace/heromarketplace.jpg" 
            alt="Marketplace Hero" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} 
          />
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(243, 245, 247, 0.3)' // optional semi-transparent overlay
            }}
          >
            <Typography variant="h3" color="black" fontSize={{ sm: 40 }}>
              Marketplace Page
            </Typography>
            <Typography variant="h6" color="black" mt={2}>
              Find Your Intellectual Property
            </Typography>
          </Box>
        </Box>

        {/* Filter and Sort options */}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={2}>
            {/* Filter Section */}
            <Box display='flex' flexDirection='row'>
              <TuneOutlinedIcon/>
              <Typography variant="h6" fontSize={{ sm: 18 }} sx={{ ml: 1 }}>Filter</Typography>
            </Box>
            <Typography variant="h6" color="#000" fontSize={16} mt={3}>
              Categories
            </Typography>
            <Box mt={2}>
              {['All Categories', 'Health', 'Music', 'Research Paper', 'Industrial Design'].map((category) => (
                <Typography 
                  key={category}
                  variant="body2" 
                  fontSize={{ sm: 14 }} 
                  fontFamily='inter' 
                  fontWeight={selectedCategory === category ? 'bold' : 'semibold'}
                  color={selectedCategory === category ? '#000' : '#807E7E'}
                  sx={{ mb: 1.5, cursor: 'pointer' }}
                  onClick={() => setSelectedCategory(category)} // Update selected category on click
                >
                  {category}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={10}>
            {/* Cards Section */}
            <Grid container spacing={4}>
              {filteredCards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CardComponent {...card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </WhiteLayout>
  );
};

export default MarketPlace;
