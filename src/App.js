import { Box } from '@mui/material';import './App.css';
import Header from './components/Header.jsx';
import BannerSection from './components/BannerSection.jsx';

function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BannerSection />
    </Box>
  );
}

export default App;
