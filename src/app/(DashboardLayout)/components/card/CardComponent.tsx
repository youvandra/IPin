import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; 

interface CardProps {
  title: string;
  type: string;
  description: string;
  image?: string | null; // Optional image property
}


    

    
const CardComponent: React.FC<CardProps> = ({ title, type, description, image }) => {
  const router = useRouter(); 

    const handleNavigateToDetail = () => {
        router.push('/ipdetail'); 
    };
  return (
    <Card sx={{ minHeight: '350px' }}>
      <Box
        sx={{
          height: '150px',
          backgroundColor: !image ? '#f5f5f5' : 'transparent', // Default color if no image
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>
      <CardContent>
        <Typography variant="h6" color='#3C3C43' fontSize={18} fontFamily='source code pro' fontWeight='semibold' mt={2} letterSpacing={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="#3C3C43" fontSize={14} fontFamily='source code pro' fontWeight='regular' letterSpacing={1} mt={1}>
          {type}
        </Typography>
        <Typography variant="body2" color="#666" fontSize={14} fontFamily='source code pro' fontWeight='regular' mt={3}>
          {description}
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='flex-end' >
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#3C3C43', color: 'white', width: '30%' }}
            onClick={handleNavigateToDetail} 
          >
            See IP
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
