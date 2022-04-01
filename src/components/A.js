import React from "react";

const A = (props) => {
  const { color, fontSize, children } = props;

  const changeColors = {
    color,
    fontSize: fontSize
  };

  return (
    <>
      <p style={changeColors}>{children}</p>
    </>
  );
};

export default A;
