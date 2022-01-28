import React from 'react';
import Link from 'next/link';

export default function Header() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
}
