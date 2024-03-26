import React from "react";
import { WeatherContextProvider } from "./context/WeatherContextProvider";
import WeatherDisplay from "./context/WeatherDisplay";

const App: React.FC = () => {
  return (
    // Wrap the entire app with the WeatherContextProvider
    <WeatherContextProvider>
      <div>
        {/* Other components */}
        <WeatherDisplay />
      </div>
    </WeatherContextProvider>
  );
};

export default App;
