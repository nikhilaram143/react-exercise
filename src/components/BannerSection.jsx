import {
  Container,
  Typography,
  Box,
} from '@mui/material';

const BannerSection = () => {
  return (
    <Container  sx={{ mt: 16, mb: 8, px: { xs: 2, md: 4 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6
      }}>
        <Box sx={{
          pr: { md: 1 }
        }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 10,
              fontSize: { xs: '24px', md: '48px' },
              color: '#333'
            }}
          >
            Driven by a commitment to life
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#555', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Everything we do at Kyowa Kirin is driven by our mission to improve health, ease suffering and prolong life. 
            It's a mission that has guided our development and expansion for over 70 years.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#555', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            As well as introducing and explaining the major products in our portfolio, this site contains a range of 
            materials to support healthcare professionals. These free online medical resources include overviews 
            of specific therapy areas, diagnostic materials and treatment guidelines.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#555', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            We hope you find them of value as you continue to support and treat the patients under your care.
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: '#555', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Simply register your details to gain full access to the site and all the information it contains.
          </Typography>
        </Box>
        <Box sx={{ 
          maxWidth: { md: '35%' }
        }}>
          <img 
            src="/Frame 1747.png" 
            alt="Medical illustration"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default BannerSection; 