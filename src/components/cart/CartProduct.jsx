export default function CartProduct({ name, amount, id, removeProduct }) {
  return (
    <div className="product-container">
      <h4>{name}</h4>
      <p>
        Amount: {amount} <span onClick={() => removeProduct(id)}>-</span>
      </p>
    </div>
  );
}
