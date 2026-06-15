import { useEffect } from "react";

function ProductPage() {
  useEffect(() => {
    console.log("Fetching Product Details...");
  }, []);

  return <h1>Product Details</h1>;
}

export default ProductPage;