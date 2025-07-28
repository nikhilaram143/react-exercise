import { useRef } from 'react';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import FeaturedTopicsSection from './components/FeaturedTopicsSection';
import StatisticsSection from './components/StatisticsSection';
import TherapyAreasSection from './components/TherapyAreasSection';

function App() {
  const therapyAreasRef = useRef(null);
  const handleLearnMore = (accordionKey) => {
    therapyAreasRef.current?.scrollToAccordion(accordionKey);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BannerSection />
      <FeaturedTopicsSection onLearnMore={handleLearnMore} />
      <StatisticsSection />
      <TherapyAreasSection ref={therapyAreasRef} />
    </Box>
  );
}

export default App;
