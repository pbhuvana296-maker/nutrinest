import { Link } from "react-router-dom";
import "../assets/style/Home.css";
import hero from "../assets/image/hero.jpg";
import fresh from "../assets/image/fresh.jpg";

function Home() {
  return (
    <div className="home-page">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container-fluid px-4 px-lg-5">

          <Link className="navbar-brand fw-bold fs-3" to="/">
            🥜 NutriNest
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
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
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row align-items-center">

            {/* Hero Text */}
            <div className="col-lg-6 hero-content">

              <span className="hero-badge">
                ✨ PREMIUM QUALITY
              </span>

              <h1>
                Nature's Finest,
                <br />
                <span>Packed for You.</span>
              </h1>

              <p className="hero-text">
                Discover premium dry fruits carefully selected
                for freshness, taste and everyday healthy living.
              </p>

              <Link to="/products" className="btn shop-btn">
                Shop Now
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>


            {/* Hero Image */}
            <div className="col-lg-6">

              <div className="hero-image-box">

                <img
                  src={hero}
                  alt="Premium Dry Fruits"
                  className="hero-img"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="section-heading text-center">

            <span>OUR COLLECTION</span>

            <h2>Shop by Category</h2>

            <p>
              Choose your favourite premium dry fruits
            </p>

          </div>


          <div className="row g-4">

            {/* Almonds */}
            <div className="col-xl-3 col-lg-3 col-md-6">

              <div className="category-card">

                <div className="category-icon">
                  🥜
                </div>

                <h4>Almonds</h4>

                <p>Crunchy & nutritious</p>

                <Link to="/products">
                  Explore →
                </Link>

              </div>

            </div>


            {/* Cashews */}
            <div className="col-xl-3 col-lg-3 col-md-6">

              <div className="category-card">

                <div className="category-icon">
                  🌰
                </div>

                <h4>Cashews</h4>

                <p>Rich & delicious</p>

                <Link to="/products">
                  Explore →
                </Link>

              </div>

            </div>


            {/* Raisins */}
            <div className="col-xl-3 col-lg-3 col-md-6">

              <div className="category-card">

                <div className="category-icon">
                  🍇
                </div>

                <h4>Raisins</h4>

                <p>Naturally sweet</p>

                <Link to="/products">
                  Explore →
                </Link>

              </div>

            </div>


            {/* Dates */}
            <div className="col-xl-3 col-lg-3 col-md-6">

              <div className="category-card">

                <div className="category-icon">
                  🌴
                </div>

                <h4>Dates</h4>

                <p>Soft & energy rich</p>

                <Link to="/products">
                  Explore →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= QUALITY ================= */}
      <section className="quality-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">

              <div className="quality-image-wrapper">

                <img
                  src={fresh}
                  alt="Healthy Dry Fruits"
                  className="quality-img"
                />

              </div>

            </div>


            {/* Content */}
            <div className="col-lg-6">

              <span className="section-label">
                WHY NUTRINEST
              </span>

              <h2 className="quality-title">
                Goodness in Every
                <span> Bite.</span>
              </h2>

              <p className="quality-text">
                At NutriNest, we bring you carefully selected
                dry fruits packed with natural goodness and
                delicious flavour.
              </p>


              <div className="row g-3 mt-4">

                <div className="col-md-6 col-6">

                  <div className="feature-box">

                    <i className="bi bi-stars"></i>

                    <h6>100% Fresh</h6>

                    <small>Freshly selected</small>

                  </div>

                </div>


                <div className="col-md-6 col-6">

                  <div className="feature-box">

                    <i className="bi bi-award"></i>

                    <h6>Premium Quality</h6>

                    <small>Best quality products</small>

                  </div>

                </div>


                <div className="col-md-6 col-6">

                  <div className="feature-box">

                    <i className="bi bi-box-seam"></i>

                    <h6>Hygienic Packing</h6>

                    <small>Safe packaging</small>

                  </div>

                </div>


                <div className="col-md-6 col-6">

                  <div className="feature-box">

                    <i className="bi bi-truck"></i>

                    <h6>Fast Delivery</h6>

                    <small>Quick doorstep delivery</small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="container-fluid text-center px-4">

          <h2>Make Every Snack Healthy</h2>

          <p>
            Choose goodness. Choose NutriNest.
          </p>

          <Link to="/products" className="btn shop-btn">
            Explore Products
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-4">

            {/* Brand */}
            <div className="col-lg-4 col-md-6">

              <h3>🥜 NutriNest</h3>

              <p>
                Premium dry fruits for a healthier,
                happier and tastier lifestyle.
              </p>

            </div>


            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">

              <h6>Quick Links</h6>

              <Link to="/">Home</Link>

              <Link to="/products">Products</Link>

              <Link to="/cart">Cart</Link>

              <Link to="/contact">Contact</Link>

            </div>


            {/* Categories */}
            <div className="col-lg-3 col-md-6">

              <h6>Categories</h6>

              <p>Almonds</p>

              <p>Cashews</p>

              <p>Raisins</p>

              <p>Dates</p>

            </div>


            {/* Contact */}
            <div className="col-lg-3 col-md-6">

              <h6>Contact</h6>

              <p>
                <i className="bi bi-telephone me-2"></i>
                📞 +91 98765 24357
              </p>

              <p>
                <i className="bi bi-envelope me-2"></i>
                hello@nutrinest.com
              </p>

              <p>
                <i className="bi bi-geo-alt me-2"></i>
                Chennai, India
              </p>

            </div>

          </div>


          <hr />

          <p className="copyright text-center">
            © 2026 NutriNest. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;

