import * as React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const targetDate = new Date("2024-01-12 16:00:00");
  const [countdown, setCountdown] = useState(
    calculateTimeDifference(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = calculateTimeDifference(targetDate);
      setCountdown(newCountdown);
      if (newCountdown.past) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <Typography
      variant="body1"
      className="text-center text-lg text-gray-900 
      py-4 mx-12 border border-gray-700 rounded"
    >
      <strong>Time till election: </strong>
      {countdown.days} days {countdown.hours} hours {countdown.minutes} minutes{" "}
      {countdown.seconds} seconds
    </Typography>
  );
};

const calculateTimeDifference = (endDate: Date) => {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();

  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    past: false,
  };
};

export default Countdown;
