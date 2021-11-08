import React from "react";
import '../app/App.css'

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <a href="#default" class="logo">
            Hustlers
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
