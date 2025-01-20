import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useState, useEffect } from "react";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const images = [
    "http://localhost:3001/assets/1pic.jpg",
    "http://localhost:3001/assets/2pic.jpg",
    "http://localhost:3001/assets/4pic.jpg",
    "http://localhost:3001/assets/6pic.jpg",
    "http://localhost:3001/assets/3pic.jpg",
    "http://localhost:3001/assets/5pic.jpg",
    "http://localhost:3001/assets/7pic.jpg",
    "http://localhost:3001/assets/8pic.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    
    return () => clearInterval(interval);
  }, []); 


  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={images[currentImageIndex]}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
      "Supercharge your final year project's visibility with our game-changing Projects. Grab attention, make an impact, and stand out from the competition!"
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
