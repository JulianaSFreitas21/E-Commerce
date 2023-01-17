import { useState } from 'react';
import { Banks } from './Banks';
import { Products } from './Products';
import { Profile } from './Profile';
import { Securty } from './Security';
import { Settings } from './Settings';
import './vendor.css'

function renderElement(param: string) {
  switch(param) {
    case '1':
      return <Profile/>;
    case '2':
      return <Settings/>;
    case '3':
      return <Products/>;
    case '4':
      return <Securty/>;
    case '5':
      return <Banks/>;
    default:
      return <Profile/>;
  }
}

export function Vendor() {
    
  const [element, SetElement] = useState('1');
    return (
      <>
        <section className="vendor">
          <div className="container d_flex">
            <div className="category">
                <div onClick={() => SetElement('1')} className="box">
                  <span>Profile</span>
                </div>
                <div onClick={() => SetElement('2')} className="box">
                  <span>Account Settings</span>
                </div>
                <div onClick={() => SetElement('3')} className="box">
                  <span>Products</span>
                </div>
                <div onClick={() => SetElement('4')} className="box">
                  <span>Password and Security</span>
                </div>
                <div onClick={() => SetElement('5')} className="box">
                  <span>Banks</span>
                </div>
            </div>
            {renderElement(element)}
          </div>
        </section>
      </>
    );
}  