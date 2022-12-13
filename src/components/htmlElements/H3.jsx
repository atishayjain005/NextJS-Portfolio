import React from "react";

export default function H3({ children, fw, styling, classes }) {
  return (
    <h3 className={`h3 fw-${fw ? fw : ""} ${classes}`} style={styling}>
      {children}
    </h3>
  );
}
