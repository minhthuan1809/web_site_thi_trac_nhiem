"use client";
import React, { useState, useEffect } from "react";
import Icon from "../Icon";

export default function Time({
  value,
  _setTime,
}: {
  value: number;
  _setTime: (time: number) => void;
}) {
  const [time, setTime] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    _setTime(time);
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon icon="Clock" className="w-6 h-6 text-white" />
          <span className="text-white font-medium">Thời gian còn lại:</span>
        </div>
        <div className="bg-white px-4 py-2 rounded-full">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {formatTime(time)}
          </span>
        </div>
      </div>
    </div>
  );
}
