export default function LoginPage() {
  return (
    <main>
      <section className="page-top">
        <div className="container form">
          <div className="card">
            <div className="kicker">Admin</div>
            <h1 style={{ fontSize: 42 }}>Admin Login</h1>
            <p className="muted">This is a placeholder for the future admin portal. Current downloads are managed using GitHub Releases.</p>
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className="btn btn-primary" type="button" style={{ width: "100%" }}>Sign In</button>
            <p className="muted" style={{ marginTop: 16 }}>Authorized administrators only.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
