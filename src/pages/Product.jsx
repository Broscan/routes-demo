import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          throw error;
        }
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setProduct(null);
        setLoading(false);
      });
  }, [productId]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : product === null ? (
        <h1>No product found</h1>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <h2>$ {product.price}</h2>
          <em>{product.description}</em>
        </div>
      )}
    </>
  );
}

export default Product;
