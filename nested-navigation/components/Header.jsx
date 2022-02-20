import React from "react";
import Link from "next/link";
import { darkHeaderColor, whiteTextColor } from "../colors";

export default function Header() {
  return (
    <div style={{ backgroundColor: darkHeaderColor, color: whiteTextColor }}>
      <div className="container">
        <br />
        <h1>Fake Application</h1>
        <br />
      </div>
    </div>
  );
}
