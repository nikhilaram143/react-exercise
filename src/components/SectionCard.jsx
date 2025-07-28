
import {
  Typography,
  Box
} from '@mui/material';

const SectionCard = ({ title, description }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'flex-start', 
    gap: 1,
    p: 2,
  }}>
    <Box sx={{ flex: 1 }}>
      <Typography variant="subtitle1" sx={{ 
        color: '#ff6b35', 
        fontWeight: 'bold', 
        mb: 1,
        textTransform: 'uppercase',
        fontSize: '15px'
      }}>
        {title}
      </Typography>
      <Typography sx={{ color: '#666' }}>
        {description}
      </Typography>
    </Box>
    <Box sx={{ 
        color: '#ff6b35',
        width: 12,
        height: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <img 
          src="/Arrow-up.png" 
          alt="Arrow right" 
          style={{ width: 14, height: 10, transform: 'rotate(90deg)', color: '#ff6b35', position: 'relative', top: '14px' }}
        />
      </Box>
  </Box>
);

export default SectionCard;