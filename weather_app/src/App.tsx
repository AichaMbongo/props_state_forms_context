import React from "react";
import { WeatherContextProvider } from "./context/WeatherContextProvider";
import WeatherDisplay from "./context/WeatherDisplay";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MapComponent from "./components/Map";

const App: React.FC = () => {
  return (
    // Wrap the entire app with the WeatherContextProvider
    <WeatherContextProvider>
      <div>
        {/* Other components */}
        <WeatherDisplay />
        <Login />
        <Signup />
        <MapComponent />
      </div>
    </WeatherContextProvider>

    
  );
};

export default App;
