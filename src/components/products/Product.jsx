export default function Product({ name, description }) {
  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Add to chart</button>
    </section>
  );
}
