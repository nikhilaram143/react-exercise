import { useRef } from 'react';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import FeaturedTopics from './components/FeaturedTopics';
import Statistics from './components/Statistics';

function App() {
  const therapyAreasRef = useRef(null);
  const handleLearnMore = (accordionKey) => {
    therapyAreasRef.current?.scrollToAccordion(accordionKey);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BannerSection />
      <FeaturedTopics onLearnMore={handleLearnMore} />
      <Statistics />
    </Box>
  );
}

export default App;
