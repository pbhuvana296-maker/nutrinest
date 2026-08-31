import { Link } from "react-router-dom";
import "../assets/style/Cart.css";

function Cart() {
  return (
    <div className="cart-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid px-4 px-lg-5">

          <Link className="navbar-brand fw-bold" to="/">
            🌰 NutriNest
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cartNav"
            aria-controls="cartNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="cartNav">

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
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  🛒 Cart
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      {/* ================= CART HEADER ================= */}

      <section className="cart-header">

        <div className="container-fluid px-4 px-lg-5 text-center">

          <span>YOUR SHOPPING CART</span>

          <h1>
            Shopping Cart 🛒
          </h1>

          <p>
            Review your favourite NutriNest products.
          </p>

        </div>

      </section>


      {/* ================= CART SECTION ================= */}

      <section className="cart-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-5">

            {/* ================= CART ITEMS ================= */}

            <div className="col-lg-8">

              <div className="cart-title-row">

                <h2>
                  Your Items
                </h2>

                <span>
                  2 Items
                </span>

              </div>


              {/* ALMONDS */}

              <div className="cart-item">

                <div className="cart-image-box">

                  <img
                    src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=500&q=85"
                    alt="Premium Almonds"
                  />

                </div>


                <div className="cart-item-content">

                  <span className="item-label">
                    PREMIUM
                  </span>

                  <h3>
                    Premium Almonds
                  </h3>

                  <p>
                    250g Pack
                  </p>

                  <h4>
                    ₹450
                  </h4>


                  <div className="cart-quantity">

                    <button type="button">
                      −
                    </button>

                    <span>
                      1
                    </span>

                    <button type="button">
                      +
                    </button>

                  </div>

                </div>


                <button
                  type="button"
                  className="remove-btn"
                >
                  🗑
                </button>

              </div>


              {/* CASHEWS */}

              <div className="cart-item">

                <div className="cart-image-box">

                  <img
                    src="https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=500&q=85"
                    alt="Royal Cashews"
                  />

                </div>


                <div className="cart-item-content">

                  <span className="item-label">
                    PREMIUM
                  </span>

                  <h3>
                    Royal Cashews
                  </h3>

                  <p>
                    250g Pack
                  </p>

                  <h4>
                    ₹520
                  </h4>


                  <div className="cart-quantity">

                    <button type="button">
                      −
                    </button>

                    <span>
                      1
                    </span>

                    <button type="button">
                      +
                    </button>

                  </div>

                </div>


                <button
                  type="button"
                  className="remove-btn"
                >
                  🗑
                </button>

              </div>


              <Link
                to="/products"
                className="continue-shopping"
              >
                ← Continue Shopping
              </Link>

            </div>


            {/* ================= ORDER SUMMARY ================= */}

            <div className="col-lg-4">

              <div className="cart-summary">

                <h2>
                  Order Summary
                </h2>


                <div className="summary-row">

                  <span>
                    Premium Almonds
                  </span>

                  <strong>
                    ₹450
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Royal Cashews
                  </span>

                  <strong>
                    ₹520
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Delivery
                  </span>

                  <strong className="free">
                    FREE
                  </strong>

                </div>


                <hr />


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹970
                  </strong>

                </div>


                <button
                  type="button"
                  className="checkout-btn"
                >
                  Proceed to Checkout →
                </button>


                <div className="secure-text">
                  🔒 Secure & Safe Checkout
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY SHOP WITH US ================= */}

      <section className="cart-features">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-4">

            <div className="col-md-4">

              <div className="cart-feature">

                <div className="feature-icon">
                  🚚
                </div>

                <h4>
                  Fast Delivery
                </h4>

                <p>
                  Quick and safe doorstep delivery.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="cart-feature">

                <div className="feature-icon">
                  🌿
                </div>

                <h4>
                  Fresh Products
                </h4>

                <p>
                  Carefully selected premium quality.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="cart-feature">

                <div className="feature-icon">
                  🔒
                </div>

                <h4>
                  Secure Shopping
                </h4>

                <p>
                  Safe and reliable shopping experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-5">

            {/* BRAND */}

            <div className="col-lg-4 col-md-6">

              <h3>
                🌰 NutriNest
              </h3>

              <p>
                Premium dry fruits for a healthier,
                happier lifestyle.
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

              <p>
                Almonds
              </p>

              <p>
                Cashews
              </p>

              <p>
                Raisins
              </p>

              <p>
                Dates
              </p>

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

export default Cart;