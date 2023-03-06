import Products from "../components/products/Products";

export default function Shop({ products, addProductToCart }) {
  return (
    <div className="page-container">
      <h1>Products</h1>

      <Products products={products} addProductToCart={addProductToCart} />
    </div>
  );
}
