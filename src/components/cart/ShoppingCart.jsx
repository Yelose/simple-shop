import cartImg from "../../assets/img/cart.png";
import CartProduct from "./CartProduct";
import "./shoppingcart.css";

export default function ShoppingCart({
  cart,
  total,
  removeProduct,
  cartToggle,
  openCart,
}) {
  return (
    <div className="shopping-cart">
      <div>
        <em>
          <h3>{total}</h3>
        </em>
        <figure>
          <img src={cartImg} alt="Cart" />
        </figure>
        <em>
          <h2 onClick={cartToggle}> ▼ </h2>
        </em>
      </div>
      {openCart && (
        <section>
          <p onClick={cartToggle}>Shopping Cart</p>
          {total > 0 &&
            cart.map((product, index) => {
              return (
                <CartProduct
                  key={index}
                  name={product.name}
                  amount={product.amount}
                  id={product.id}
                  removeProduct={removeProduct}
                />
              );
            })}
        </section>
      )}
    </div>
  );
}
