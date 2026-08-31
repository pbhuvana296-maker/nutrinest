import { Link } from "react-router-dom";
import "../assets/style/Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Almonds",
      price: "₹450",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      name: "Royal Cashews",
      price: "₹520",
      weight: "250g",
      image:
        "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=85",
    },
   
    {
      id: 4,
      name: "Medjool Dates",
      price: "₹480",
      weight: "500g",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=85",
    },
      
    ];

  return (
    <div className="products-page">

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
            data-bs-target="#productsNav"
            aria-controls="productsNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="productsNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
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


      {/* ================= PRODUCTS HEADER ================= */}

      <section className="products-header">

        <div className="container-fluid px-4 px-lg-5 text-center">

          <span>OUR PRODUCTS</span>

          <h1>Premium Dry Fruits</h1>

          <p>
            Carefully selected goodness for your everyday snacking.
          </p>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="products-list">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-4">

            {products.map((product) => (

              <div
                className="col-xl-4 col-lg-4 col-md-6"
                key={product.id}
              >

                <div className="product-card">

                  {/* Product Image */}

                  <div className="product-img-wrapper">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />

                    <span className="product-tag">
                      Premium
                    </span>

                  </div>


                  {/* Product Content */}

                  <div className="product-content">

                    <div className="rating">
                      ★★★★★
                    </div>

                    <h4>
                      {product.name}
                    </h4>

                    <p className="weight">
                      {product.weight}
                    </p>


                    <div className="product-bottom">

                      <h3>
                        {product.price}
                      </h3>

                      <Link
                        to={`/product/${product.id}`}
                        className="details-btn"
                      >
                        View Details →
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container-fluid px-4 px-lg-5">

          <div className="row g-4">

            {/* Brand */}

            <div className="col-lg-4 col-md-6">

              <h3>
                🌰 NutriNest
              </h3>

              <p>
                Premium dry fruits for a healthier,
                happier and tastier lifestyle.
              </p>

            </div>


            {/* Quick Links */}

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


            {/* Categories */}

            <div className="col-lg-3 col-md-6">

              <h6>
                Categories
              </h6>

              <p>Almonds</p>
              <p>Cashews</p>
              <p>Raisins</p>
              <p>Dates</p>

            </div>


            {/* Contact */}

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

          <p className="copyright text-center">
            © 2026 NutriNest. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Products;