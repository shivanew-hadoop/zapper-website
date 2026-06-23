"use client";

import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Downloads", "/downloads"],
  ["Contact", "/contact"],
  ["Login", "/login"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner" style={{position:'relative'}}>
        <a className="brand" href="/" aria-label="Zapper home">
          <span className="logo" />
          <span>Zapper</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu"
          style={{background:'transparent',border:'none',color:'white',fontSize:'16px',cursor:'pointer'}}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          className="nav-links"
          style={{
            display: open ? 'flex' : undefined,
            flexDirection: open ? 'column' : undefined,
            position: open ? 'absolute' : undefined,
            top: open ? '70px' : undefined,
            right: open ? '0' : undefined,
            width: open ? '220px' : undefined,
            padding: open ? '20px' : undefined,
            background: open ? '#071327' : undefined,
            borderRadius: open ? '16px' : undefined,
            zIndex: 100
          }}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href="/downloads">Download</a>
        </nav>
      </div>
    </header>
  );
}
