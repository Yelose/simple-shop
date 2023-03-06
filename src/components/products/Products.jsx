import Product from "./Product";
import "./products.css";

export default function Products({ products, addProductToCart }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            id={product.id}
            addProductToCart={addProductToCart}
          />
        );
      })}
    </div>
  );
}
