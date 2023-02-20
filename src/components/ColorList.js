import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      {colors.map((color,index)=>(
        <ol>
          <li key={index}style={{ color: color }}>{color}</li>
      
        </ol>
      )
      )}
     
    </div>
  );
}

export default ColorList;
