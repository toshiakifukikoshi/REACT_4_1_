import React from "react";

const ColorfullMessage = () => {
  console.log('子供もレンダリング時に更新されてます');
  const shigeko = {
    color: "yellow",
    fontWeight: "bold",
    border: "3px solid #555"
  };
  return (
    <>
      <p style={shigeko}>茂子さん</p>
    </>
  );
};

export default ColorfullMessage;
