import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) =>
{
  return (
    <div>
      {props.items.map((item, index) => (
        <Tile key={index} item={item} />
      ))}
    </div>
  );
};
