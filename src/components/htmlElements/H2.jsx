import React from "react";

export default function H2({ children, fw, styling, classes }) {
  return (
    <h2 className={`h2 fw-${fw ? fw : ""} ${classes}`} style={styling}>
      {children}
    </h2>
  );
}
