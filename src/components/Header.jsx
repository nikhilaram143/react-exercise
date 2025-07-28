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
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () =>  {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar sx={{ position: "static", backgroundColor: '#FAF6F4', color:'#333', boxShadow: 0, mb:4 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml:4 }}>
          <img 
            src="/logo.png" 
            alt="Kyowa Kirin" 
            style={{ height: 45, width: 'auto' }} 
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ color: '#ff6b35', fontWeight: 'bold', fontSize: '18px', letterSpacing: '0.5px' }}
          >
            HUB
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button 
              color="inherit" 
              onClick={() => {
                const element = document.getElementById('therapy-areas');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '15px',
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
                fontSize: '15px',
                color: '#333'
              }}
            >
              Our Products
            </Button>
            <Paper 
              sx={{ 
               
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
                  fontSize: '14px'
                }}
                placeholder="Search"
              />
              <IconButton 
                type="button" 
                sx={{ p: '8px', mr: 1 }} 

              >
                <SearchIcon sx={{ fontSize: '20px', color: '#666' }} />
              </IconButton>
            </Paper>
            <Button 
              color="inherit" 
              endIcon={<AccountCircle sx={{ fontSize: '22px', ml:0 }} />}
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '15px',
                color: '#333'
              }}
            >
              Mary
            </Button>
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box
                sx={{ width: 250, p: 2 }}
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
              >
                <List>
                  <ListItem button onClick={() => {
                    const element = document.getElementById('therapy-areas');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}>
                    <ListItemText primary="Therapy Areas" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Our Products" />
                  </ListItem>
                </List>
                <Divider />
                <Box sx={{ my: 2 }}>
                  <Paper
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: 30,
                      border: '1px solid #e0e0e0',
                      boxShadow: 'none',
                      backgroundColor: '#f9f9f9',
                      borderRadius: 50,
                      px: 1
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1, fontSize: '15px' }}
                      placeholder="Search"
                    />
                    <IconButton type="button" sx={{ p: '8px' }}>
                      <SearchIcon sx={{ fontSize: '20px', color: '#666' }} />
                    </IconButton>
                  </Paper>
                </Box>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: '10px'}}>
                      <AccountCircle sx={{ fontSize: '24px',  mr: 0, ml: 0 }} />
                    </ListItemIcon>
                    <ListItemText primary="Mary" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;