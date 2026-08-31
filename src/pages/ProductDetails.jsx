import { Link, useParams } from "react-router-dom";
import "../assets/style/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = {
    1: {
      name: "Premium Almonds",
      price: "₹450",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=85",
      description:
        "Crunchy and delicious premium almonds, carefully selected for freshness and quality.",
    },

    2: {
      name: "Royal Cashews",
      price: "₹520",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=1000&q=85",
      description:
        "Rich, creamy and delicious cashews packed with premium taste.",
    },

    3: {
      name: "Golden Raisins",
      price: "₹350",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1596591868231-05e0a1c5e6f1?auto=format&fit=crop&w=1000&q=85",
      description:
        "Naturally sweet golden raisins, perfect for snacking and desserts.",
    },

    4: {
      name: "Medjool Dates",
      price: "₹480",
      weight: "500g",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85",
      description:
        "Soft and naturally sweet Medjool dates with rich flavour.",
    },

    5: {
      name: "Premium Pistachios",
      price: "₹580",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1536591375654-2c7f7b8a5e7d?auto=format&fit=crop&w=1000&q=85",
      description:
        "Premium pistachios with a delicious crunchy texture.",
    },

    6: {
      name: "Mixed Dry Fruits",
      price: "₹650",
      weight: "500g",
      image:
        "https://images.unsplash.com/photo-1599909533730-f9d8d4f3e1a6?auto=format&fit=crop&w=1000&q=85",
      description:
        "A delicious combination of premium dry fruits for everyday snacking.",
    },
  };

  const product = products[id] || products[1];

  return (
    <div className="product-details-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark details-navbar">

        <div className="container-fluid px-4 px-lg-5">

          <Link className="navbar-brand fw-bold" to="/">
            🌰 NutriNest
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#detailsNav"
            aria-controls="detailsNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="detailsNav">

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
                <Link className="nav-link active" to="/products">
                  Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  🛒 Cart
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


      {/* ================= BREADCRUMB ================= */}

      <section className="breadcrumb-section">

        <div className="container-fluid px-4 px-lg-5">

          <Link to="/">
            Home
          </Link>

          <span> / </span>

          <Link to="/products">
            Products
          </Link>

          <span> / {product.name}</span>

        </div>

      </section>


      {/* ================= PRODUCT DETAILS ================= */}

      <section className="product-details-section">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row align-items-center g-5">


            {/* PRODUCT IMAGE */}

            <div className="col-lg-6">

              <div className="details-image-box">

                <img
                  src={product.image}
                  alt={product.name}
                  className="details-img"
                />

                <span className="premium-badge">
                  PREMIUM
                </span>

              </div>

            </div>


            {/* PRODUCT INFORMATION */}

            <div className="col-lg-6">

              <div className="details-content">

                <span className="product-label">
                  PREMIUM DRY FRUIT
                </span>

                <h1>
                  {product.name}
                </h1>

                <div className="details-rating">
                  ★★★★★
                  <span> 5.0</span>
                </div>

                <h2 className="details-price">
                  {product.price}
                </h2>

                <p className="details-weight">
                  Pack Size:
                  <strong> {product.weight}</strong>
                </p>

                <p className="details-description">
                  {product.description}
                </p>


                {/* QUANTITY */}

                <div className="quantity-area">

                  <label>
                    Quantity
                  </label>

                  <div className="quantity-box">

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


                {/* BUTTONS */}

                <div className="details-buttons">

                  <button
                    type="button"
                    className="add-cart-btn"
                  >
                    🛒 Add to Cart
                  </button>

                  <Link
                    to="/cart"
                    className="buy-btn"
                  >
                    Buy Now
                  </Link>

                </div>


                {/* FEATURES */}

                <div className="details-features">

                  <div className="detail-feature">
                    <i className="bi bi-stars"></i>
                    <div>
                      <strong>Fresh Quality</strong>
                      <small>Premium selected</small>
                    </div>
                  </div>

                  <div className="detail-feature">
                    <i className="bi bi-box-seam"></i>
                    <div>
                      <strong>Safe Packaging</strong>
                      <small>Hygienically packed</small>
                    </div>
                  </div>

                  <div className="detail-feature">
                    <i className="bi bi-truck"></i>
                    <div>
                      <strong>Fast Delivery</strong>
                      <small>Quick doorstep delivery</small>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BACK TO PRODUCTS ================= */}

      <section className="back-section">

        <div className="container-fluid text-center">

          <Link
            to="/products"
            className="back-products"
          >
            ← Back to Products
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="details-footer">

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


            {/* LINKS */}

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

export default ProductDetails;