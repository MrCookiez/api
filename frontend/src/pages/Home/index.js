import React, { useState, useEffect } from "react";

const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3001/api/anytime/getProducts");
    res
      .json()
      .then(res => setProducts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(products)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default Home;