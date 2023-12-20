// components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    axios.get('/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>Product Name: {product.productName}</p>
            <p>Product Number: {product.productNumber}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={`/${product.barcodePath}`} alt={`Barcode for ${product.productName}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
