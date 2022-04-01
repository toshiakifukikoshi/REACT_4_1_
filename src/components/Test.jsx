import React from "react";

const Test = (props) => {
  const { color, font, children, border } = props;

  const changeStyle = {
    color,
    fontSize: font,
    border
  };

  return (
    <>
      <h1 style={changeStyle}>{children}</h1>
    </>
  );
};

export default Test;
