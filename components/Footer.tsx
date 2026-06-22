export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong style={{ color: "white" }}>Zapper</strong>
          <div>Real-time voice-to-text overlay for meetings.</div>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="mailto:zapperapp.support@gmail.com">Support</a>
        </div>
        <div>© 2026 Zapper. All rights reserved.</div>
      </div>
    </footer>
  );
}
