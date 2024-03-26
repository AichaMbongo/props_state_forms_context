import React from "react";
import { WeatherProps } from "../types";

interface TallinnProps {
  weather: string;
}

export const Tallinn: React.FC<TallinnProps> = ({ weather }) => {
  return <div>{weather}</div>;
};