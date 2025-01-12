import React from "react";

export function GreenProfile() {
    const outerStyle = {
      width: "14rem",
      height: "15.625rem",
      flexShrink: 0,
      backgroundColor: "rgba(97, 223, 126, 0.6)",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  
    const innerStyle = {
      width: "10.875rem",
      height: "12.5rem",
      flexShrink: 0,
      backgroundColor: "rgba(97, 223, 126, 0.6)",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    };
  
    return (
      <div style={outerStyle}>
        <div style={innerStyle}></div>
      </div>
    );
  }
  
  export default function App() {
    return (
      <div>
        <SaveButton />
        <GreenProfile />
      </div>
    );
  }