import { useState, useEffect } from 'react';

// Initialize state to track the remaining time for the progress bar
export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  // Decrease the remaining time every 10ms using setInterval
  useEffect(() => {
      const interval = setInterval(() => {
        console.log("INTERVAL");
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10);
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(interval);
      };
    }, []);

  // Render the progress bar with the current remaining time
  return <progress value={remainingTime} max={timer} />;
}