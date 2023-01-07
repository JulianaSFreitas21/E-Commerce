import { Link } from 'react-router-dom';
import search from '../assets/icons/search.svg';
import bagShopping from '../assets/icons/bag-shopping-solid.svg';
import User from '../assets/icons/user-solid.svg';
import { useUser } from '../../hook/user';

export function Search() {
    window.addEventListener('scroll', function () {
      const search = document.querySelector('.search') ;
      if(search !== null) search.classList.toggle('active', this.window.scrollY > 100)
    })

    const {cartItem} = useUser();
    return (
      <>
        <section className="search">
          <div className="container c_flex">
            <div className="logo width">
              <p>JuShopping</p>
            </div>

            <div className="search-box f_flex">
              <div className='box'>
                <img src={search} alt="search" />
              </div>
              <input type="text" placeholder='Search and hit enter' />
              <span>All Category</span>
            </div>
            <div className="icon f_flex width">
              <div className="cart">
                <div className="icon-circle">
                  <img src={User} alt="circle-user" />
                </div>
                <Link to="/cart">
                  <div className='icon-circle'>
                    <img src={bagShopping} alt="bag-shopping" />
                  </div>
                  {cartItem.length === 0? '' : <span>{cartItem.length}</span>}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}  