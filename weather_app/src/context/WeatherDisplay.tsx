// create a component that consumes the context.

import React, { useContext } from "react";
import { WeatherContext } from "./WeatherContextProvider";

const WeatherDisplay: React.FC = () => {
    // Consume the context
    const { weather } = useContext(WeatherContext)!;

    return <div>Current weather: {weather}</div>
};

export default WeatherDisplay;