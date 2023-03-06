export default function Product({ name, description, addProductToCart, id }) {
  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => addProductToCart(id, name)}>Add to chart</button>
    </section>
  );
}
