import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  size: string;
  images: string[]; // Assuming images are stored as URLs or paths
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you have a JWT token stored
        console.log(token);

        const response = await axios.get("/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p>Size: {product.size}</p>
              <p>Images:</p>
              <ul>
                {product.images.map((image, idx) => (
                  <li key={idx}>
                    <img
                      src={image}
                      alt={`Product Image ${idx}`}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
