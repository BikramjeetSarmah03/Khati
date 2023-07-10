"use client";

import { calcaulateDiff } from "@/utils/calculateDiff";
import { useEffect, useState } from "react";

export default function Countdown({ date }) {
  const [timeInMs, setTimeInMs] = useState(date.getTime());
  const [remainingTime, setRemainingTime] = useState();
  useEffect(() => {
    setTimeInMs(date.getTime());
  }, [date]);
  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInMs]);
  const updateRemainingTime = (timeInMs) => {
    setRemainingTime(calcaulateDiff(timeInMs));
  };

  return (
    <div className="flex items-center space-x-1 text-xs sm:space-x-2">
      <div className="flex items-center space-x-1">
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.hours.slice(0, 1)}
        </span>
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.hours.slice(1, 2)}
        </span>
      </div>
      <b>:</b>
      <div className="flex items-center space-x-1">
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.minutes.slice(0, 1)}
        </span>
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.minutes.slice(1, 2)}
        </span>
      </div>
      <b>:</b>
      <div className="flex items-center space-x-1">
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.seconds.slice(0, 1)}
        </span>
        <span className="p-2 bg-black rounded-md">
          {remainingTime?.seconds.slice(1, 2)}
        </span>
      </div>
    </div>
  );
}
