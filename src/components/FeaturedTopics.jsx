import { useRef, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack
} from '@mui/icons-material';
import Slider from 'react-slick';
import {carouselData} from '../shared/data';

const FeaturedTopics = ({ onLearnMore }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

   const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container  sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, ml:2 }}>
        <Typography  sx={{ fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}>
          Featured Topics
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mr: 2, mt: 1 }}>
           <ArrowBack sx={{ fontSize: '16px',  color: '#ff6b35', cursor: 'pointer'}} onClick={() => sliderRef.current?.slickNext()} />
           <ArrowForward sx={{ fontSize: '16px',   color: '#ff6b35', cursor: 'pointer' }}  onClick={() => sliderRef.current?.slickNext()}/>
        </Box>
      </Box>
      
      <Slider ref={sliderRef} {...carouselSettings}>
        {carouselData.map((item, index) => {
          const isActive = index === currentSlide;
          
          return (
            <Box key={item.id} sx={{ px: 1 }}>
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                border: isActive ? 'none' : '1px solid #e0e0e0',
                borderRadius: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: isActive ? '4px solid #ff6b35' : 'none',
                borderBottom: isActive ? '4px solid #ff6b35' : 'none',
                backgroundColor: isActive ? '#fff' : '#fff',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {isActive && (
                  <>
                    <Box sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      backgroundColor: '#ff6b35',
                      zIndex: 1
                    }} />
                    <Box sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '4px',
                      backgroundColor: '#ff6b35',
                      zIndex: 1
                    }} />
                  </>
                )}

                <CardContent sx={{ flexGrow: 1, p: 3, position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '1px solid #ff6b35',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1
                    }}>
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{ 
                        color: '#666',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {item.category}
                    </Typography>
                  </Box>
                  <Typography 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      fontSize: '1.1rem',
                      color: '#333',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.5,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      endIcon={
                        <img 
                          src="/Arrow-up.png" 
                          alt="Arrow right"
                          style={{ 
                            width: 10,
                            height: 6,
                            transform: 'rotate(90deg)',
                            marginLeft: 0,
                          }}
                        />
                      }
                      sx={{ 
                        color: '#ff6b35', 
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: '0.5px',
                        p: 0
                      }}
                      onClick={() => onLearnMore && onLearnMore(item.id)}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Slider>
    </Container>
  );
};

export default FeaturedTopics; 