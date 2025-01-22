"use client";
import React, { useState } from "react";

export const Button = ({ children }) => {
  const [isCensored, setIsCensored] = useState(true);

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {children}
    </button>
  );
};
