import React from "react";

export default function H1({ children, fw, styling, classes }) {
  return (
    <h1 className={`h1 fw-${fw ? fw : ""} ${classes}`} style={styling}>
      {children}
    </h1>
  );
}
