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
    <AppBar sx={{ backgroundColor: '#FAF6F4', color:'#333', boxShadow: 0, mb:10 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml:4 }}>
            <img 
              src="/logo.png" 
              alt="Kyowa Kirin" 
              style={{ 
                height: 45, 
                width: 'auto'
              }} 
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                color: '#ff6b35', 
                fontWeight: 'bold',
                fontSize: '1.1rem',
                letterSpacing: '0.5px'
              }}
            >
              HUB
            </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button 
              color="inherit" 
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
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
                fontSize: '0.95rem',
                color: '#333'
              }}
            >
              Our Products
            </Button>
            <Paper 
              sx={{ 
                ml: 25,
                display: 'flex', 
                alignItems: 'center', 
                width: 200,
                height: 30,
                border: '1px solid #e0e0e0',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9',
                borderRadius: 50
              }}
            >
              <InputBase
                sx={{ 
                  ml: 2, 
                  flex: 1,
                  fontSize: '0.9rem'
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton 
                type="button" 
                sx={{ p: '8px', mr: 1 }} 
                aria-label="search"
              >
                <SearchIcon sx={{ fontSize: '1.2rem', color: '#666' }} />
              </IconButton>
            </Paper>
            <Button 
              color="inherit" 
              endIcon={<AccountCircle sx={{ fontSize: '1.4rem', ml:0 }} />}
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#333'
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