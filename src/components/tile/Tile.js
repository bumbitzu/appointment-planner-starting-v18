import React from "react";

export const Tile = ({ item }) =>
{
  // Utilizează Object.entries pentru a itera prin toate proprietățile obiectului item
  return (
    <div className="tile-container">
      {Object.entries(item).map(([ key, value ], index) =>
      {
        // Tratează primul element diferit pentru a-l evidenția ca titlu
        const className = index === 0 ? "tile-title" : "tile";
        return (
          <p key={index} className={className}>
            {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
          </p>
        );
      })}
    </div>
  );
};
