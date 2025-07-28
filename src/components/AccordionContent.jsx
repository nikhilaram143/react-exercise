import {
  Typography,
  Box,
  AccordionDetails
} from '@mui/material';
import SectionCard from "./SectionCard";
const AccordionContent = ({ title, description, sections }) => (
  <AccordionDetails sx={{ p: 0 }}>
    <Box sx={{ bgcolor: '#f9f9f9', marginTop: '10px', border: '2px solid #ff6b35'}}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'flex-start'
      }}>
        <Box sx={{ p:3, pb:0, flex: 1, minWidth: 0 }}>
          <Typography sx={{  fontSize: '30px', fontWeight: 'bold', mb: 3, color: '#333' }}>
            {title}
          </Typography>
          <Typography  sx={{ fontWeight: '500', mb: 2, lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SectionCard 
              title="MEDICAL EDUCATION"
              description={sections.medicalEducation}
            />
            <SectionCard 
              title="DISEASE PAGES"
              description={sections.diseasePages}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <SectionCard 
            title="MEDICAL RESOURCES"
            description={sections.medicalResources}
          />
        </Box>
      </Box>
    </Box>
  </AccordionDetails>
);

export default AccordionContent;