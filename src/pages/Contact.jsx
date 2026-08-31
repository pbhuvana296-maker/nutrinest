import { Link } from "react-router-dom";
import "../assets/style/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark contact-navbar">
        <div className="container-fluid px-4 px-lg-5">

          <Link className="navbar-brand fw-bold" to="/">
            🌰 NutriNest
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contactNav"
            aria-controls="contactNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="contactNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  🛒 Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      {/* ================= CONTACT HEADER ================= */}

      <section className="contact-header">

        <div className="container-fluid px-4 px-lg-5 text-center">

          <span>GET IN TOUCH</span>

          <h1>
            Contact Us
          </h1>

          <p>
            We would love to hear from you.
            Feel free to reach out anytime.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-5 align-items-stretch">

            {/* ================= CONTACT INFO ================= */}

            <div className="col-lg-5">

              <div className="contact-info">

                <span className="small-title">
                  CONTACT DETAILS
                </span>

                <h2>
                  Let's Talk About Your Order
                </h2>

                <p className="info-text">
                  Have a question about our dry fruits,
                  delivery or orders? Our team is happy
                  to help you.
                </p>


                {/* PHONE */}

                <div className="info-card">

                  <div className="info-icon">
                    📞
                  </div>

                  <div>
                    <h4>Phone</h4>

                    <p>
                📞 +91 98765 24357
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="info-card">

                  <div className="info-icon">
                    ✉️
                  </div>

                  <div>
                    <h4>Email</h4>

                    <p>
                      hello@nutrinest.com
                    </p>

                  </div>

                </div>


                {/* ADDRESS */}

                <div className="info-card">

                  <div className="info-icon">
                    📍
                  </div>

                  <div>
                    <h4>Address</h4>

                    <p>
                      Chennai, Tamil Nadu, India
                    </p>

                  </div>

                </div>


                {/* TIMING */}

                <div className="info-card">

                  <div className="info-icon">
                    🕒
                  </div>

                  <div>
                    <h4>Opening Hours</h4>

                    <p>
                      Monday - Saturday
                      <br />
                      9:00 AM - 8:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= CONTACT FORM ================= */}

            <div className="col-lg-7">

              <div className="contact-form-box">

                <span className="small-title">
                  SEND MESSAGE
                </span>

                <h2>
                  We'd Love To Hear From You
                </h2>

                <p>
                  Fill in the form below and our team
                  will get back to you shortly.
                </p>


                <form>

                  <div className="row g-4">

                    {/* NAME */}

                    <div className="col-md-6">

                      <label>
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />

                    </div>


                    {/* EMAIL */}

                    <div className="col-md-6">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />

                    </div>


                    {/* PHONE */}

                    <div className="col-md-6">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />

                    </div>


                    {/* SUBJECT */}

                    <div className="col-md-6">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                      />

                    </div>


                    {/* MESSAGE */}

                    <div className="col-12">

                      <label>
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Write your message..."
                      ></textarea>

                    </div>


                    {/* BUTTON */}

                    <div className="col-12">

                      <button
                        type="submit"
                        className="send-btn"
                      >
                        Send Message →
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MAP ================= */}

      <section className="map-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="map-box">

            <div className="map-content">

              <div className="map-icon">
                📍
              </div>

              <h2>
                Visit NutriNest
              </h2>

              <p>
                Chennai, Tamil Nadu, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai%2C%20Tamil%20Nadu%2C%20India"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Open in Google Maps →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="contact-footer">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-5">

            {/* BRAND */}

            <div className="col-lg-4 col-md-6">

              <h3>
                🌰 NutriNest
              </h3>

              <p>
                Premium dry fruits for a healthier,
                happier and tastier lifestyle.
              </p>

            </div>


            {/* QUICK LINKS */}

            <div className="col-lg-2 col-md-6">

              <h6>
                Quick Links
              </h6>

              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/cart">
                Cart
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>


            {/* CATEGORIES */}

            <div className="col-lg-3 col-md-6">

              <h6>
                Categories
              </h6>

              <p>Almonds</p>
              <p>Cashews</p>
              <p>Raisins</p>
              <p>Dates</p>

            </div>


            {/* CONTACT */}

            <div className="col-lg-3 col-md-6">

              <h6>
                Contact
              </h6>

              <p>
                📞 +91 98765 24357
              </p>

              <p>
                ✉️ hello@nutrinest.com
              </p>

              <p>
                📍 Chennai, India
              </p>

            </div>

          </div>


          <hr />

          <p className="copyright">
            © 2026 NutriNest. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Contact;