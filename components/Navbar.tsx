const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Downloads", "/downloads"],
  ["Contact", "/contact"],
  ["Login", "/login"]
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Zapper home">
          <span className="logo" />
          <span>Zapper</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="btn btn-primary" href="/downloads">Download</a>
        </nav>
        <span className="mobile-menu">Menu</span>
      </div>
    </header>
  );
}
