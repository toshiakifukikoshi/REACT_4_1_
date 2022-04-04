import React from "react";

export const newTest = (props) => {
  console.log(props);

  const aba = {
    color: "red"
  };

  return (
    <>
      <h1 style={aba}>{props.children}</h1>
    </>
  );
};

// export default newTest;
