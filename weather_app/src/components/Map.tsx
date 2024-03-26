import React from "react";

const ExampleComponent = () => {
  // Array of data to render dynamically
  const items = [
    { id: 1, name: "Mango" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Grape" },
    { id: 5, name: "Orange" },
  ];

  return (
    <div>
      <h2>Dynamic Content Example</h2>
      <ul>
        {/* Use .map() function to render each item dynamically */}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        //    {/* Render each item as an <li> element with its name */}
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
