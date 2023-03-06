export default function ShoppingCart({ cart }) {
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>
        {cart.length > 0 ? (
          cart.map((product, index) => {
            return (
              <div key={product.index}>
                <p>{product.name}</p>
                <p>Amount: {product.amount}</p>
              </div>
            );
          })
        ) : (
          <p>No products yet</p>
        )}
      </div>
    </div>
  );
}
