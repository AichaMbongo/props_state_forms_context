import React from "react";
import { WeatherProps } from "../types";
import { Estonia } from "./Estonia";

interface EuropeProps {
  weather: string;
}

export const Europe: React.FC<EuropeProps> = ({ weather }) => {
  return <Estonia weather={weather} />;
};


// Interface Declaration:

// EuropeProps: This is a TypeScript interface that defines the expected props for the Europe component. It expects a weather prop of type string.
// Component Declaration:

// export const Europe: React.FC<EuropeProps>: This declares the Europe component as a functional component. It takes in props of type EuropeProps.
// ({ weather }): This is a destructuring assignment in the function parameters, extracting the weather prop from the props object.
// return <Estonia weather={weather} />;: This returns the Estonia component, passing the weather prop received by Europe to the Estonia component.
// In summary, the Europe component takes a weather prop and renders the Estonia component, passing the weather prop down to it. This demonstrates
//  a common pattern in React known as prop drilling, where props are passed down from parent to child components.