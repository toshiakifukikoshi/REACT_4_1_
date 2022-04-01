import React from "react";

const My = (props) => {
  console.log(props);

  const aaa = {
    color: props.color
    // fontSize: '32px'
  };

  return (
    <>
      <p style={aaa}>{props.children}</p>
    </>
  );
};

export default My;
