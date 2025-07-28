import {
  Container,
  Typography,
  Box,
  Paper
} from '@mui/material';

const StatisticsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
      <Container maxWidth="lg">
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            backgroundColor: 'white',
            borderRadius: 2
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4 
          }}>
            <Box sx={{ 
              flex: { xs: '1', md: '0 0 60%' },
              width: { xs: '100%', md: '60%' },
              pr: { md: 2 }
            }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  color: '#ff6b35', 
                  fontWeight: 'bold', 
                  mb: 3,
                  fontSize: { xs: '24px', md: '32px' },
                  lineHeight: 1.3
                }}
              >
                H2 Around 145,000 people live with (Disease Y) in the UK
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '16px', md: '18px' }
                }}
              >
                This website is intended to help people understand (Disease Y) and improve awareness of the condition.
              </Typography>
            </Box>
            <Box sx={{ 
              flex: { xs: '1', md: '0 0 40%' },
              width: { xs: '100%', md: '40%' }
            }}>
              <Box sx={{ 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src="/Image-space.png" 
                  alt="Medical technology" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    maxHeight: 350,
                    objectFit: 'contain'
                  }} 
                />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default StatisticsSection; 