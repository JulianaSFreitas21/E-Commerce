import { useUser } from "../../hook/user";
import './style.css'

export function Cart() {
  const {cartItem} = useUser();
  const {addToCard} = useUser();
  const {decreaseQty} = useUser();

  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
  
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
              {cartItem.length === 0 && <h1 className="no-items product">No items are add in Cart</h1>}
              {cartItem.map((item: any) => {
                const productQty = item.price * item.qty;
                return(
                  <div className="cart-list product f_flex">
                    <div className="img">
                      <img src={item.cover} alt={item.name} />
                    </div>
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <h4>
                        {item.price}.00 * {item.qty}
                        <span>${productQty}.00</span>
                      </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button className="removeCart">
                          <i className="fa -solid fa-xmark"></i>
                        </button>
                      </div>
                      <div className="cartControl d_flex">
                        <button className="incCart" onClick={() => addToCard(item)}>
                          <i className="fa fa-plus"></i>
                        </button>

                        <button className="descCart" onClick={() => decreaseQty(item)}>
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-price"></div>
                  </div>
                )
              })
              }
              
          </div>
          <div className="cart-total product">
            <h2>Card Summary</h2>
            <div className="d_flex">
            <h4>Total Price: </h4>
            <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}