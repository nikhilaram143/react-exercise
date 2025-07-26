import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  InputBase,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle
} from '@mui/icons-material';

const Header = () =>  {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: 1 }}>
      <Toolbar sx={{ minHeight: '70px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img 
              src="/logo.png" 
              alt="Kyowa Kirin" 
              style={{ 
                height: 45, 
                width: 'auto',
                marginRight: 8
              }} 
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                color: '#ff6b35', 
                fontWeight: 'bold',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
            >
              HUB
            </Typography>
          </Box>
        </Box>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button 
              color="inherit" 
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '14px',
                color: '#333',
                cursor: 'pointer'
              }}
            >
              Therapy Areas
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '14px',
                color: '#333',
                cursor: 'pointer'
              }}
            >
              Our Products
            </Button>
            <Paper 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: 280,
                height: 40,
                border: '1px solid #e0e0e0',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9'
              }}
            >
              <InputBase
                sx={{ 
                  ml: 2, 
                  flex: 1,
                  fontSize: '14px'
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton 
                type="button" 
                sx={{ p: '8px', mr: 1 }} 
                aria-label="search"
              >
                <SearchIcon sx={{ fontSize: '14px', color: '#666' }} />
              </IconButton>
            </Paper>
            <Button 
              color="inherit" 
              startIcon={<AccountCircle sx={{ fontSize: '14px' }} />}
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '14px',
                color: '#333',
                ml: 1
              }}
            >
              Mary
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;