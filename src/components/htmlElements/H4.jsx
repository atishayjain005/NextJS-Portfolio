import React from "react";

export default function H4({ children, fw, styling, classes }) {
  return (
    <h4 className={`h4 fw-${fw ? fw : ""} ${classes}`} style={styling}>
      {children}
    </h4>
  );
}
