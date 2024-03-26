import React from "react";
import { WeatherContextProvider } from "./context/WeatherContextProvider";
import WeatherDisplay from "./context/WeatherDisplay";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App: React.FC = () => {
  return (
    // Wrap the entire app with the WeatherContextProvider
    <WeatherContextProvider>
      <div>
        {/* Other components */}
        <WeatherDisplay />
        <Login />
        <Signup />
      </div>
    </WeatherContextProvider>

    
  );
};

export default App;
