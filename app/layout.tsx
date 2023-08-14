"use client";
import React, { useEffect } from "react";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
