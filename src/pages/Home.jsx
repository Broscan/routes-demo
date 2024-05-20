import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
    );
  }, []);
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">
        <h3>Link to about page</h3>
      </Link>
      <Link to="/contact">
        <h3>Link to Contact page</h3>
      </Link>

      {products.map((p) => (
        <div className="product" key={p.id}>
          <Link to={`/products/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Home;
