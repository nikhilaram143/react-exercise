import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import Statistics from './components/Statistics';

function App() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BannerSection />
      <Statistics />
    </Box>
  );
}

export default App;
