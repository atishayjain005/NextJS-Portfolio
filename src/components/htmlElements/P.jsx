import React from "react";

export default function P({ children, fw, styling, classes }) {
  return (
    <p
      className={`p fw-${fw ? fw : "light"} ${classes}`}
      style={styling}
    >
      {children}
    </p>
  );
}
