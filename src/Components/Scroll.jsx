import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollSmoothly = () => {
      const start = window.pageYOffset;
      const end = 0;
      const duration = 400; 
      const startTime = performance.now();

      // Function to animate the scroll
      const scrollAnimation = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const run = Math.min(timeElapsed / duration, 1); // Normalize time to 1
        const scrollPosition = start + (end - start) * run;
        
        window.scrollTo(0, scrollPosition);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation); // Continue animating
        }
      };

      requestAnimationFrame(scrollAnimation); // Start animation
    };

    scrollSmoothly(); // Initiate smooth scroll on route change

  }, [pathname]);

  return null;
};

export default ScrollToTop;
