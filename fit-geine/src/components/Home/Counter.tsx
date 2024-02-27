import React from "react";
import CountUp from "react-countup";


interface CounterProps {
    number: number;
    title: string; // Explicitly defining the type as string
  }

export default function Counter({ number,title }:CounterProps) {
  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}
