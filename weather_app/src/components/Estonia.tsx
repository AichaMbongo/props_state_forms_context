import React from "react";
import { WeatherProps } from "../types";
import { Tallinn } from "./Tallinn";

interface EstoniaProps {
  weather: string;
}

export const Estonia: React.FC<EstoniaProps> = ({ weather }) => {
  return <Tallinn weather={weather} />;
};


// Interface Declaration:

// EstoniaProps: This is a TypeScript interface that defines the expected props for the Estonia component. It expects a weather prop of type string.
// Component Declaration:

// export const Estonia: React.FC<EstoniaProps>: This declares the Estonia component as a functional component. It takes in props of type EstoniaProps.
// ({ weather }): This is a destructuring assignment in the function parameters, extracting the weather prop from the props object.
// return <Tallinn weather={weather} />;: This returns the Tallinn component, passing the weather prop received by Estonia to the Tallinn component.
// In summary, the Estonia component takes a weather prop and renders the Tallinn component, passing the weather prop down to it. This demonstrates a 
// common pattern in React known as prop drilling, where props are passed down from parent to child components.