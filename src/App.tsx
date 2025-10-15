import { NavBar } from "./NavBar";

export const App = () => {
  return (
    <>
      <NavBar />

      <main className="main">
        {/* HERO */}
        <section id="hero" className="section py-5">
          <div className="container">
            <div className="row gy-4 align-items-center">
              {/* Texto */}
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="hero-content">
                  <h1 className="display-5 fw-bold mb-2">
                    Hello, I&apos;m{" "}
                    <span className="text-primary">Jason Moya Brenes</span>
                  </h1>

                  <h2 className="h4 text-muted mb-3">
                    Creative{" "}
                    <span className="fw-semibold">
                      React Developer · .NET Builder · BI Enthusiast
                    </span>
                  </h2>

                  <p className="text-muted mb-4" style={{ maxWidth: 560 }}>
                    I build clean UIs with React, APIs with .NET, and data
                    dashboards with Power BI.
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <a href="#portfolio" className="btn btn-primary btn-sm">
                      View My Work
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Get In Touch
                    </a>
                  </div>

                  <div className="d-flex gap-3 fs-5">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-reset"
                    >
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jason-moya-brns/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-reset"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                    <a
                      href="https://github.com/jasonmoyaB"
                      target="_blank"
                      rel="noreferrer"
                      className="text-reset"
                    >
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="mailto:jason.moyabre.es@gmail.com"
                      className="text-reset"
                    >
                      <i className="bi bi-envelope-fill" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Imagen */}
              <div className="col-lg-6 order-1 order-lg-2">
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: 480 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200"
                    alt="Profile"
                    className="img-fluid rounded-4 shadow-sm"
                  />

                  <div className="position-absolute top-0 start-0 translate-middle-x d-none d-md-block">
                    <div className="bg-white border rounded-3 px-3 py-2 shadow-sm d-inline-flex align-items-center gap-2">
                      <i className="bi bi-palette"></i>
                      <span className="small">Design</span>
                    </div>
                  </div>

                  <div className="position-absolute top-50 end-0 translate-middle-y d-none d-md-block">
                    <div className="bg-white border rounded-3 px-3 py-2 shadow-sm d-inline-flex align-items-center gap-2">
                      <i className="bi bi-code-slash"></i>
                      <span className="small">Code</span>
                    </div>
                  </div>

                  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-none d-md-block">
                    <div className="bg-white border rounded-3 px-3 py-2 shadow-sm d-inline-flex align-items-center gap-2">
                      <i className="bi bi-lightbulb"></i>
                      <span className="small">Ideas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div id="portfolio" className="pt-5 mt-4">
              <h3 className="h5 mb-3">Selected Work</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fw-semibold">ToDo App</div>
                    <small className="text-muted">
                      React + Hooks + localStorage
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fw-semibold">Backoffice</div>
                    <small className="text-muted">
                      .NET + SQL Server (CRUD)
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fw-semibold">BI Dashboard</div>
                    <small className="text-muted">Power BI + DAX</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-5 mt-4">
              <h3 className="h5 mb-2">Let’s talk</h3>
              <div className="d-flex flex-wrap gap-2">
                <a
                  href="mailto:jason.moyabre.es@gmail.com"
                  className="btn btn-dark btn-sm"
                >
                  Email
                </a>
                <a
                  href="https://github.com/jasonmoyaB"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jason-moya-brns/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4">
        <div className="container text-center text-muted small">
          <hr />
          <p className="mb-1">
            © {new Date().getFullYear()} Jason Moya — All Rights Reserved
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://twitter.com" className="text-reset">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="https://www.facebook.com" className="text-reset">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com" className="text-reset">
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/jason-moya-brns/"
              className="text-reset"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
