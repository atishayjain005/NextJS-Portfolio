import React from "react";

export default function H5({ children, fw, styling, classes }) {

  return (
    <h5 className={`h5 fw-${fw ? fw : ""} ${classes}`} style={styling}>
      {children}
    </h5>
  );
}
