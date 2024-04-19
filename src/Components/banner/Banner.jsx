import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useQuery } from 'react-query';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const fetchData = async () => {
    const response = await fetch('https://portal.umall.in/api/shopbanners?shopid=15', {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery('images', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const banners = data.mainbanners;



  

 

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        {banners.map((banner, index) => (
          <div key={banner.id} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={`https://portal.umall.in/${banner.image}`}
                alt={banner.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
  );
}

export default Banner;
