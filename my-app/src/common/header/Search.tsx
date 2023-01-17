import { Link } from 'react-router-dom';
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
              <p>GoBuy</p>
            </div>

            <div className="search-box f_flex">
              <div className='box'>
                <i className='fa fa-search'></i>
              </div>
              <input type="text" placeholder='Search and hit enter' />
              <span>All Category</span>
            </div>
            <div className="icon f_flex width">
              <div className="cart">
                <Link to="/user">
                  <div className="icon-circle">
                    <i className='fa fa-user'></i>
                  </div>
                </Link>
                <Link to="/cart">
                  <div className='icon-circle'>
                    <i className='fa fa-shopping-bag'></i>
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