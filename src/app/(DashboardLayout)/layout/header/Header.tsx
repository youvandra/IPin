import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useWallet } from '@/app/WalletContext';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'IP Register', path: '/ipregister' },
  { name: 'IP', path: '/ipprofile' },
  { name: 'Marketplace', path: '/marketplace' },
];

interface HeaderProps {
  isDarkBackground: boolean;
}

function Header({ isDarkBackground }: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const { account, setAccount } = useWallet();
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateToPage = (path: string) => {
    router.push(path);
    handleCloseNavMenu();
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  
        if (chainId !== '0x405') {
          alert('Please switch to the BTTC network in your wallet.');
          return;
        }
  
        setAccount(accounts[0]);
        localStorage.setItem('walletAccount', accounts[0]); // Simpan ke localStorage
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert('Please install MetaMask to connect.');
    }
  };
  

  React.useEffect(() => {
    const storedAccount = localStorage.getItem('walletAccount');
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, [setAccount]);

  const textColor = isDarkBackground ? '#fff' : '#000';
  const buttonColor = isDarkBackground ? '#fff' : '#000';
  const hoverColor = isDarkBackground ? '#fff' : '#000';
  const isMarketplaceActive = pathname.startsWith('/marketplace') || pathname.startsWith('/ipdetail');

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: textColor,
              textDecoration: 'none',
            }}
          >
            IPin
          </Typography>

          {/* Drawer for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleOpenNavMenu}
              sx={{ color: textColor }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigateToPage(page.path)}>
                  <Typography sx={{ textAlign: 'center', color: isDarkBackground ? '#000' : textColor }}>
                    {page.name.toUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: textColor,
              textDecoration: 'none',
            }}
          >
            IPin
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' }, gap: 3 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigateToPage(page.path)}
                sx={{
                  my: 2,
                  display: 'block',
                  fontWeight: page.name === 'Marketplace' && isMarketplaceActive ? 'bold' : 
                    pathname === page.path ? 'bold' : 'normal',
                  color: page.name === 'Marketplace' && isMarketplaceActive ? textColor : 
                  pathname === page.path ? textColor : buttonColor,
                '&:hover': {
                  color: hoverColor,
                  },
                }}
              >
                {page.name.toUpperCase()}
              </Button>
            ))}
          </Box>

          {/* Connect Wallet Button */}
          <Button
            variant="outlined"
            onClick={connectWallet}
            sx={{
              borderColor: textColor,
              color: textColor,
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet'}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
