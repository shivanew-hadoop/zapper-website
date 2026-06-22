export default function ContactPage() {
  return (
    <main>
      <section className="page-top">
        <div className="container">
          <div className="badge"><span className="pulse" /> Support</div>
          <h1>Contact Zapper.</h1>
          <p className="lead">For support, licensing, download issues or setup help, reach us through email, phone or WhatsApp.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container grid grid-3">
          <div className="card">
            <div className="icon">📧</div>
            <h3>Email Support</h3>
            <p><a className="contact-link" href="mailto:zapperapp.support@gmail.com">zapperapp.support@gmail.com</a></p>
          </div>
          <div className="card">
            <div className="icon">📱</div>
            <h3>Phone</h3>
            <p><a className="contact-link" href="tel:+919346073219">+91 9346073219</a></p>
          </div>
          <div className="card">
            <div className="icon">💬</div>
            <h3>WhatsApp</h3>
            <p><a className="contact-link" href="https://wa.me/919346073219">+91 9346073219</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
