import React, { useEffect, useState } from 'react';

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const radius = 55; // Clock radius
  const centerX = 60; // Center of the clock (X-axis)
  const centerY = 60; // Center of the clock (Y-axis)

  // Convert hour, minute, and second to degrees
  const hours = (time.getHours() % 12) * 30; // 360 / 12 hours
  const minutes = time.getMinutes() * 6; // 360 / 60 minutes
  const seconds = time.getSeconds() * 6; // 360 / 60 seconds

  // Calculate clock hands' positions
  const hourX = centerX + radius * 0.5 * Math.cos((hours - 90) * (Math.PI / 180));
  const hourY = centerY + radius * 0.5 * Math.sin((hours - 90) * (Math.PI / 180));

  const minuteX = centerX + radius * 0.8 * Math.cos((minutes - 90) * (Math.PI / 180));
  const minuteY = centerY + radius * 0.8 * Math.sin((minutes - 90) * (Math.PI / 180));

  const secondX = centerX + radius * 0.9 * Math.cos((seconds - 90) * (Math.PI / 180));
  const secondY = centerY + radius * 0.9 * Math.sin((seconds - 90) * (Math.PI / 180));

  // Function to generate positions for numbers
  const renderClockNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180); // Calculate angle for each number
      const x = centerX + radius * 0.85 * Math.cos(angle); // Adjust 0.85 to position numbers inside the clock
      const y = centerY + radius * 0.85 * Math.sin(angle);
      numbers.push(
        <text key={i} x={x} y={y} textAnchor="middle" alignmentBaseline="middle" fontSize="8" fill="#000">
          {i}
        </text>
      );
    }
    return numbers;
  };

  return (
    <svg width="120" height="150">
      {/* Clock face */}
      <circle cx={centerX} cy={centerY} r={radius} fill="#f0f0f0" stroke="green" strokeWidth="2" />

      {/* Clock numbers */}
      {renderClockNumbers()}

      {/* Hour hand */}
      <line
        x1={centerX}
        y1={centerY}
        x2={hourX}
        y2={hourY}
        stroke="#000"
        strokeWidth="4"
      />

      {/* Minute hand */}
      <line
        x1={centerX}
        y1={centerY}
        x2={minuteX}
        y2={minuteY}
        stroke="#000"
        strokeWidth="2"
      />

      {/* Second hand */}
      <line
        x1={centerX}
        y1={centerY}
        x2={secondX}
        y2={secondY}
        stroke="red"
        strokeWidth="1"
      />

      {/* Clock center */}
      <circle cx={centerX} cy={centerY} r="2" fill="blue" />
    </svg>
  );
}

