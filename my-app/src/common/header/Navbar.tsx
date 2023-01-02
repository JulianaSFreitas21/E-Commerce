import { useState } from "react";
import { Link } from "react-router-dom";

import chevronDown from '../assets/icons/chevron-down.svg';
import bars from '../assets/icons/bars.svg';
import close from '../assets/icons/close.svg';
import borderAll from '../assets/icons/border-all.svg';

export function Navbar() {
    const [MobileMenu, setMobileMenu] = useState(false);

    return (
      <>
        <header className="header">
            <div className="container d_flex">
                <div className="categories d_flex">
                    <img src={borderAll} alt="border-all" />
                    <h4>Categories <img src={chevronDown} alt="chevron-down" /></h4>
                </div>
                <div className="navlink">
                <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick={()=> setMobileMenu(false)}>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/pages">pages</Link></li>
                    <li><Link to="/user">user account</Link></li>
                    <li><Link to="/vendor">vendor account</Link></li>
                    <li><Link to="/track">track my order</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
                <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)}>
                    {
                        MobileMenu? 
                        (
                            <div className="close home-btn">
                                <img src={close} alt="close" />
                            </div>
                        )
                         
                        :
                        (
                            <div className="open">
                                 <img src={bars} alt="bars" />
                            </div>
                        )
                        
                    }
                </button>
            </div>
            </div>
        </header>
      </>
    );
}  