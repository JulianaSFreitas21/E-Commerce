import { useState } from "react"
import { useUser } from "../../hook/user"

export function ShopCart() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const {shopItems} = useUser();
  const {addToCard} = useUser();

  return (
    <>
      {shopItems.map((shopItem, index) => {
        return (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItem.discount}% Off</span>
                <img src={shopItem.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItem.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItem.price}.00 </h4>
                  <button onClick={() => addToCard(shopItem)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}