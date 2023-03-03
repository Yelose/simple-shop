import Product from "./Product";
import "./products.css";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1 example product",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2 example product",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is product 3 example product",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is product 4 example product",
    },
  ];
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
          />
        );
      })}
    </div>
  );
}
