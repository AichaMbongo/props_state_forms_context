
// The purpose of the WeatherProvider.tsx file and the WeatherProvider component within it is 
// to create a context provider in React. Context providers allow you to manage and share state 
// across multiple components in a React application without having to pass props manually through 
// each level of the component tree (prop drilling).




import React, { createContext, useContext, useState, ReactNode } from "react";
import { WeatherProps } from "../types";

// Create a context to store weather-related data
const WeatherContext = createContext<WeatherProps | null>(null);

// Define the props expected by the WeatherProvider component
interface WeatherProviderProps {
  children: ReactNode; // Children elements that will be wrapped by the WeatherProvider
}

// WeatherProvider component to provide weather data to its children
export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  // Use state to manage the weather data
  const [weather, setWeather] = useState(":sun_with_face:");

  // Render the WeatherContext.Provider with the provided children
  return (
    <WeatherContext.Provider value={{ weather }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to access the weather data within components
export const useWeather = () => {
  // Use useContext hook to access the WeatherContext
  const context = useContext(WeatherContext);
  // Throw an error if context is not found
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  // Return the weather data from the context
  return context;
};
