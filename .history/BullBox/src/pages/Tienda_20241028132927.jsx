import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import ProductsCard from "../components/ProductsCard";

function ProductPage() {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 pt-5">
      {products.map((Product) => (
        <ProductsCard product={Product} key={Product._id} />
      ))}
    </div>
  );
}

export default ProductPage;
