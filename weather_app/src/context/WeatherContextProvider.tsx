import React, { createContext, useState, ReactNode } from "react";
import { WeatherContextType } from "../types";

// Create the context
export const WeatherContext = createContext<WeatherContextType | null>(null);

// Define props for WeatherContextProvider
interface WeatherContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export const WeatherContextProvider: React.FC<WeatherContextProviderProps> = ({ children }) => {
  // Define state for weather
  const [weather, setWeather] = useState(":sun_with_face:");

  // Create the context value
  const contextValue: WeatherContextType = {
    weather,
  };

  return (
    // Provide the context value to the children
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
